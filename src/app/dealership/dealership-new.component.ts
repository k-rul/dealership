import { OnInit, Component } from "@angular/core";
import { DealershipService } from "../services/dealership.service";
import { Dealership } from '../models/dealership';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'dealership-new',
    templateUrl: './dealership-new.component.html',
    providers: [DealershipService]
})

export class DealershipNewComponent {

    dealership: Dealership = new Dealership();

    isEditMode = true;

    constructor(private router: Router, private dealershipResource: DealershipService,
        private route: ActivatedRoute) {
        dealershipResource.init('Dealership');
        this.dealership.ownerName = '';
    }


    create(): void {

        this.dealershipResource.saveDealership(this.dealership)
            .subscribe(() => {
                return this.backToDealerships();
            });
    }

    backToDealerships() {
        return this.router.navigate(['/dealership']);
    }

}