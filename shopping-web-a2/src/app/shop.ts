import {Location} from './location';
import {ShopAddress} from "./shop-address";

export class Shop{
  id: number;
  name: string;
  location: Location;
  address: ShopAddress;

  constructor(){
    this.location = new Location();
    this.address = new ShopAddress();
  }
}
