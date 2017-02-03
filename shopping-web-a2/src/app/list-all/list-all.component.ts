import { Component, OnInit } from '@angular/core';
import {ShopService} from "../shop.service";
import {Shop} from "../shop";

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  shops:Shop[];
  constructor(private shopService:ShopService) { }

  ngOnInit() {
    this.shopService.getShops().then(shops => {
      console.log("ListAllComponents init",shops);
      this.shops = shops
    } );
  }

}
