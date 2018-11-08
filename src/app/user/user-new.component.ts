import { Component, OnInit } from "@angular/core";
import { UserResourceService } from "../services/user-resource.service";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { SaltService } from "../services/salt.service";

import * as bcrypt from "bcryptjs";

@Component({
    selector: 'user-new',
    templateUrl: 'user-new.component.html',
    providers: [UserResourceService]
})

export class UserNewComponent {

    user = new User();

    constructor(private userResource: UserResourceService,
        private router: Router,
        private salt: SaltService) {
        userResource.init('users');
    }

    backToLogin() {
		return this.router.navigate(['/UserLogin']);
    }
    
    save() {
        this.user.salt = this.salt.getSalt();
        this.user.password = bcrypt.hashSync(this.user.password, this.user.salt);
        
		this.userResource.saveUser(this.user)
			.subscribe(res => this.router.navigate(['/dealership']));
	}

}