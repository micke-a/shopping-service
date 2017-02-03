import {Injectable, Inject} from '@angular/core';
import {Shop} from './shop';
import {SHOPS} from './mock-shops';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShopService {

  private host = "http://localhost:8080";
  private shopsUrl = `${this.host}/shops`;
  private headers = new Headers({'Content-Type': 'application/json'});



  constructor(private http:Http){

  }

  handleError(error: any): Promise<any>{
    console.log("An error occured in ShopService", error)
    return Promise.reject(error.message || error);
  }

  getShops(): Promise<Shop[]> {
    //return Promise.resolve(SHOPS);
    let retVal:Promise<Shop[]> =  this.http.get(this.shopsUrl)
      .toPromise()
      .then(response => response.json() as Shop[])
      .catch(this.handleError);

    console.log("ShopService getShops", retVal);

    return retVal;
  }

  findById(shopId: number): Promise<Shop>{

    const url = `${this.shopsUrl}/${shopId}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Shop)
      .catch(this.handleError);
    /*
    return new Promise((resolve, reject) => {
      this.getShops().then(shops => resolve(shops[shopId]) );
    });
  */
}

  locate(long:number, lat:number): Promise<Shop>{

    const url = `${this.shopsUrl}/${long}/${lat}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Shop)
      .catch(this.handleError);

    /*
    return new Promise((resolve, reject) => {
      let retVal:Promise<Shop>;

      this.getShops().then(shops => {
        resolve(shops[0]);
      });
    });
    */
  }

  addShop(shop:Shop): void{

    let maxShopId = Math.max(...SHOPS.map(shop => shop.id));
    let maxLocationId = Math.max(...SHOPS.map(shop => shop.location.id));

    shop.id = maxShopId+1;
    shop.location.id = maxLocationId+1;

    this.http.post(this.shopsUrl, JSON.stringify(shop),{headers: this.headers})
      .toPromise()
      .catch(this.handleError);

    //SHOPS.push(shop);
  }
}
