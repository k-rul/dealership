import { Injectable } from "@angular/core";
import * as bcrypt from "bcryptjs";

@Injectable({
    providedIn: 'root'
})
export class SaltService {

    private salt: string | null = null;

    getSalt() {
        if (this.salt === null) {
            this.salt = bcrypt.genSaltSync(10);
        }
    return this.salt;
    }
}