import { Component } from "@angular/core";
import { UserResourceService } from "../services/user-resource.service";
import { User } from "../models/user";
import * as bcrypt from "bcryptjs";
import { Router } from "@angular/router";

@Component({
    selector: 'user-login',
    templateUrl: 'user-login.component.html',
    providers: [UserResourceService]
})

export class UserLoginComponent {
    model = new User();

    constructor(private userResource: UserResourceService, private router: Router) {
        userResource.init('users');
    }

    login() {
        this.userResource.getCurrentUser(this.model.username)
            .subscribe(res => {
                if (res[0]) {
                    const hashPass = bcrypt.hashSync(this.model.password, res[0].salt);
                    this.userResource.loginUser(this.model.username, hashPass)
                        .subscribe(hashRes => {
                            if (hashRes[0]) {
                                localStorage.setItem('userName', this.model.username);
                                return this.router.navigate(['/users']);
                            }else {
                                alert("Грешен username или password");
                            }
                        });
                }else {
                    alert("Грешен username или password");
                }
            });
    }
}