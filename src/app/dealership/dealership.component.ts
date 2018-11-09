import { Component, OnInit } from '@angular/core';
import { Dealership } from '../models/dealership';
import { DealershipService } from '../services/dealership.service';


@Component({
	selector: 'dealership',
	templateUrl: './dealership.component.html',
	providers: [DealershipService],
	styleUrls: ['./dealership.component.css']
})

export class DealershipComponent implements OnInit {

	pageTitle = 'Dealership Catalog';
	filteredDealerships: Dealership[] = [];
	dealerships: Dealership[] = [];
	_listFilter: string;
	_showAll: Boolean = true;

	constructor(private dealershipResource: DealershipService) {

		dealershipResource.init('Dealership');
	}

	ngOnInit() {
		this.dealershipResource.getAllDealerships()
			.subscribe(dealerships => {
				this.dealerships = dealerships;
				this.filteredDealerships = this.dealerships;
			}
			);
	}

	get listFilter(): string {
		return this._listFilter;
	}
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredDealerships = this._listFilter ? this.performFilter(this._listFilter) : this.dealerships;
	}

	performFilter(filterBy: string): Dealership[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.dealerships.filter((dealership: Dealership) =>
			(dealership.name.toLocaleLowerCase().indexOf(filterBy) !== -1) 
			&& dealership.active == true);
	}

	deleteDalership(id: number): void {
		this.dealershipResource.deleteDalershipById(id)
			.subscribe(
				() => {
					//  debugger;
					// let index: number = this.dealerships.findIndex(dealership => dealership.id === id);

					// this.dealerships.splice(index, 1);

					// this.filteredDealerships = this._listFilter ? this.performFilter(this._listFilter) : this.dealerships;

					this.ngOnInit();

					this.filteredDealerships = this._listFilter ? this.performFilter(this._listFilter) : this.dealerships;
				}
			);
	}


}
