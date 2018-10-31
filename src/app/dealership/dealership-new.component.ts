import { OnInit, Component } from "@angular/core";
import { DealershipService } from "../services/dealership.service";

@Component({
    selector: 'dealership-new',
    templateUrl: './dealership-new.component.html',
    providers: [DealershipService]
})

export class DealershipNewComponent implements OnInit {

    ngOnInit(): void {

    }

    Create(): void {

    }

}