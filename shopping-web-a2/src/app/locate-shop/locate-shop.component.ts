import { Component} from '@angular/core';
import {ShopService} from "../shop.service";
import {Shop} from "../shop";

@Component({
  selector: 'app-locate-shop',
  templateUrl: './locate-shop.component.html',
  styleUrls: ['./locate-shop.component.css']
})
export class LocateShopComponent{

  longitude:number;
  latitude:number;

  nearestShop:Shop;

  constructor( private shopService:ShopService) { }

  onSubmit(): void{
    this.shopService.locate(this.longitude, this.latitude).then(shop => {
      this.nearestShop = shop
      console.log("Shop located", this.nearestShop);
    });


  }

  resetForm(): void{
    this.longitude = undefined;
    this.latitude  = undefined;
    this.nearestShop = undefined;
  }
}
