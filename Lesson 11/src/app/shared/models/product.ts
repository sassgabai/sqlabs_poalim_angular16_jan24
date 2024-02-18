import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class Product {
    public id?: number;
    public name?: string;
    public price?: number;
    public image?: string;
    public quantity?: number;

    constructor(id?: number, name?: string, price?: number, image?: string, quantity?: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.quantity = quantity;
    }

    static standardValidators(control: AbstractControl): ValidationErrors | null {
        return Validators.required(control) && Validators.minLength(2)(control);
        // return Validators.required(control) || Validators.minLength(2)(control) || Validators.maxLength(30)(control);
    }

    static customNameValidator(control: AbstractControl): ValidationErrors | null {
        const name: string = control.value || '';
    
        // If falsly condition return 'name' error
        if (name === 'xxx') {
            return { 'name': true };
        }
    
        // Else, return 'null'
        return null;
    }
}

export class ApiProduct {
    id?: number;
    title?: string;
    price?: number;
    description?: string;
    category?: string;
    image?: string;
}

