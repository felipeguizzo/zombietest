import { MovimentationType } from "../enums/Type";
import { Resource } from "./Resource";

export class Movement {

    constructor() {
        this.id = '00000000-0000-0000-0000-000000000000';        
    }

    id: string;
    type: MovimentationType = MovimentationType.INPUT;
    quantity?: number;
    requesterName?: string;
    resource: Resource = new Resource();
}