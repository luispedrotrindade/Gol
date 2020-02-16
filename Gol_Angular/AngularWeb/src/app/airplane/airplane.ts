import { Identifiers } from "@angular/compiler";

export class Airplane {
    constructor(
        public Id: number,
        public Model: string,
        public QtdPassengers: number,
        public CreationDate: Date
    ) { }

}