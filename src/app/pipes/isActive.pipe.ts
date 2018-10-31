import { Pipe, PipeTransform } from "@angular/core";
import { Dealership } from "../models/dealership";

@Pipe({
    name: 'isActive'
})

export class IsActivePipe implements PipeTransform {
    transform(items: Array<Dealership>): Array<Dealership> {
        if (!items) {
            return [];
        }
        return items.filter(item => item.active === true);
    }
}