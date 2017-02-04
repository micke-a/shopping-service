import {Injectable, Inject} from '@angular/core';
import {Shop} from './shop';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShopService {

  static host:string = "http://localhost:8080";
  static shopsUrl:string = `${ShopService.host}/shops`;
  private headers = new Headers({'Content-Type': 'application/json'});



  constructor(private http:Http){

  }

  handleError(error: any): Promise<any>{
    console.log("An error occured in ShopService", error)
    return Promise.reject(error.message || error);
  }

  getShops(): Promise<Shop[]> {
    //return Promise.resolve(SHOPS);
    let retVal:Promise<Shop[]> =  this.http.get(ShopService.shopsUrl)
      .toPromise()
      .then(response => response.json() as Shop[])
      .catch(this.handleError);

    console.log("ShopService getShops", retVal);

    return retVal;
  }

  findById(shopId: number): Promise<Shop>{

    const url = `${ShopService.shopsUrl}/${shopId}`;

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

    const url = `${ShopService.shopsUrl}/${long}/${lat}`;

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
    let allShops:Shop[];
    this.getShops().then(shops => {
      allShops = shops

      let maxShopId = Math.max(...allShops.map(shop => shop.id));

      shop.id = maxShopId+1;

      this.http.post(ShopService.shopsUrl, JSON.stringify(shop),{headers: this.headers})
        .toPromise()
        .catch(this.handleError);

    });



    //SHOPS.push(shop);
  }
}
