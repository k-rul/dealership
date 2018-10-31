import {Car} from './car'

export class Dealership {
    id: number;
    name: string;
    active: boolean;
    ownerName: string;
    cars: Car[];
}