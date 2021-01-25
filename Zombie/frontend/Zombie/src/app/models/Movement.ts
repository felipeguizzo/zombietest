import { MovimentationType } from "../enums/Type";

export class Movement {

    constructor() {
        this.id = '00000000-0000-0000-0000-000000000000';        
    }

    id?: string;
    type?: MovimentationType;
    quantity?: number;
    requesterName?: string;
}