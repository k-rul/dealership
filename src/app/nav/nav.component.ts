import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

@Component({
    selector: 'nav-component',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{

    pageTitle = `Dealership Catalog`;

    userName: string;

    constructor(private authenticationService: AuthenticationService) {
        
        authenticationService.getLoggedInName.subscribe(name => this.changeName(name));
    }

    private changeName(name: string): void {
        this.userName = name;
    }

    ngOnInit(): void {
        this.authenticationService.login('');
    }
    
    // checkedUser() {
    //     if (localStorage.getItem('userName') != '') {
    //         this.userName = localStorage.getItem('userName');
    //         this.isUserLoged = true;
    //     } else {
    //         this.userName = '';
    //         this.isUserLoged = false;
    //     }
    // }

    // ngOnInit(): void {
    //     this.checkedUser();
    // }

    // logout() {
	// 	localStorage.removeItem('userName');
	// 	return this.router.navigate(['/UserLogin']);
	// }
}