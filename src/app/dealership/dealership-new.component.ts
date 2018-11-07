import { OnInit, Component } from "@angular/core";
import { DealershipService } from "../services/dealership.service";
import { Dealership } from '../models/dealership';

@Component({
    selector: 'dealership-new',
    templateUrl: './dealership-new.component.html',
    providers: [DealershipService]
})

export class DealershipNewComponent implements OnInit {

    dealership:Dealership = new Dealership();
    
    ngOnInit(): void {

    }

    Create(): void {

    }

}