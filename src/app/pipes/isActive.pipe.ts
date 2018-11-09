import { Pipe, PipeTransform } from "@angular/core";
import { Dealership } from "../models/dealership";

@Pipe({
    name: 'isActive'
})

export class IsActivePipe implements PipeTransform {
    transform(items: Array<Dealership>, filter: boolean): Array<Dealership> {
        if (filter) {
            return items;
        }
        if (!items) {
            return [];
        }
        return items.filter(item => item.active === true);
    }
}