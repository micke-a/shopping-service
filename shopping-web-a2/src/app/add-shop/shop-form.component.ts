import {Component, OnInit, Input} from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    keyframes,
    group
} from '@angular/animations';
import {Shop} from "../shop";
import {ShopService} from "../shop.service";

@Component({
    selector: 'app-shop-form',
    templateUrl: "./shop-form.component.html",
    styles: [],
    animations: [
        trigger('addNewAnim', [
            state('highlight', style({
                backgroundColor: 'green'
            })),
            state('normal',   style({
                backgroundColor: 'white'
            })),
            transition('normal <=> highlight', animate('1s ease-in'))
        ])
    ]
})
export class ShopFormComponent implements OnInit {

    model: Shop = new Shop();
    addedShop : Shop;
    newShopState: string = "highlight";

    constructor(private shopService: ShopService) {
    }

    onSubmit() {
        console.log("ShopForm - submit clicked");
        this.shopService.addShop2(this.model).then(shop => {
            this.addedShop = shop;
            this.resetForm();
            this.setNewShopState('normal');
        });
    }

    get diagnostic() {
        return JSON.stringify(this.model);
    }

    ngOnInit() {
    }

    setNewShopState(newState: string){
        this.newShopState = newState;
        console.log("newShopState set to ", this.newShopState);
    }

    resetForm(): void {
        this.model = new Shop();
    }
}
