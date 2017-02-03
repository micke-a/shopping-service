import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Shop} from "../shop";
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent {

  shop: Shop;

  constructor(route: ActivatedRoute, shopService:ShopService) {
    let shopId: number = route.snapshot.params['id'];

    shopService.findById(shopId).then(shop => this.shop = shop);

  }


}
