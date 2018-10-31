import { Component, OnInit } from '@angular/core';
import { Dealership } from '../models/dealership';
import { Router, ActivatedRoute } from '@angular/router';
import { DealershipService } from '../services/dealership.service';


@Component({
    selector: 'dealership-details',
    templateUrl: './dealership-details.component.html',
    providers:[DealershipService]
})

export class DealershipDetailsComponent implements OnInit {

    dealership: Dealership;

    constructor(private router: Router, private dealershipResource: DealershipService,
        private route: ActivatedRoute) {
        dealershipResource.init('Dealership');
    }


    ngOnInit() {
        this.dealershipResource.getDealershipById(+this.route.snapshot.params['id'])
            .subscribe(res => this.dealership = res);
    }


}
