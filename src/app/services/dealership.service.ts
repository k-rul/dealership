import { Injectable } from '@angular/core';
import { Dealership } from '../models/dealership';

import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable(
    // {
    //     providedIn: 'root'
    // }
)
export class DealershipService {

    private restApi = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) {

    }

    init(url: string) {
        this.restApi = this.restApi + url;
    }

    getDealershipById(id: number): Observable<Dealership> {
        return this.httpClient.get<Dealership>(this.restApi + '/' + id);
    }

    getAllDealerships(): Observable<Dealership[]> {

        let getAllUrl = this.restApi;

        return this.httpClient.get<Dealership[]>(getAllUrl);
    }

    deleteDalershipById(id: number): Observable<void>{
        return this.httpClient.delete<void>(this.restApi + '/' + id);
    }


}
