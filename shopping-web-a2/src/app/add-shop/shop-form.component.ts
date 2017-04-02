import {Component, OnInit} from '@angular/core';
import {Shop} from "../shop";
import {ShopService} from "../shop.service";

@Component({
    selector: 'app-shop-form',
    templateUrl: "./shop-form.component.html",
    styles: []
})
export class ShopFormComponent implements OnInit {

    model: Shop = new Shop();
    addedShop : Shop;

    constructor(private shopService: ShopService) {
    }

    onSubmit() {
        console.log("ShopForm - submit clicked");
        this.shopService.addShop(this.model);

        this.shopService.addShop2(this.model).then(shop => this.addedShop = shop);


        this.resetForm();

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }

    ngOnInit() {
    }

    resetForm(): void {
        this.model = new Shop();
    }
}
