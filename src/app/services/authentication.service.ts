import { Injectable, Output, EventEmitter, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    login(fullName: string): Observable<boolean> {
        var subject = new Subject<boolean>();

        if (fullName != '') {
            this.getLoggedInName.emit(fullName);
            subject.next(true);
        } else {
            this.getLoggedInName.emit('Sign In');
            subject.next(false);
        }

        return subject.asObservable();
    }

    logout(): void {
        this.getLoggedInName.emit('Sign In');
    }

}