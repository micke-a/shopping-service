import { Component, OnInit} from '@angular/core';
import {ShopService} from '../shop.service';
import {Shop} from "../shop";

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html'
})
export class OtherComponent implements OnInit {
  list:Shop[];

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
    this.shopService.getShops().then(shops => this.list = shops );
  }

}
