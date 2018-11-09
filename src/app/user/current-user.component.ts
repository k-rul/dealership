import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'current-user',
	templateUrl: './current-user.component.html'
})

export class CurrentUserComponent implements OnInit {

	userName = 'Test';

	constructor(private router: Router) {

	}
	ngOnInit() {
		this.userName = localStorage.getItem('userName');
	}

	logout() {
		localStorage.removeItem('userName');
		return this.router.navigate(['/UserLogin']);
	}
}
