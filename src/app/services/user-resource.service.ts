import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserResourceService {

    private restApi = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) {
        
    }

    init(url: string){
        this.restApi = this.restApi + url;
    }

    getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(this.restApi + '/' + id);
    }

    getAll(age?: number): Observable<User[]> {

        let getAllUrl = this.restApi;

        return this.httpClient.get<User[]>(getAllUrl);
    }

    editUser(id: number, user: User): Observable<User> {
		return this.httpClient.put<User>(this.restApi + '/' + id, user);
	}

    saveUser(user: User): Observable<User>{
        return this.httpClient.post<User>(this.restApi, user);
    }

    deleteUser(id: number): Observable<null>{
        return this.httpClient.delete<null>(this.restApi + '/' + id)
    }

    getCurrentUser(username: string): Observable<User[]> {
        return this.httpClient.get<User[]>(this.restApi + '?username=' + username);
    }

    loginUser(username: string, password: string): Observable<User[]> {
        return this.httpClient.get<User[]>(this.restApi + '?username=' + username
        + '&password=' + password);
    }


}