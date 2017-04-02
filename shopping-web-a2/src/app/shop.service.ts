import {Injectable, Inject} from '@angular/core';
import {Shop} from './shop';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShopService {

    static host: string = "http://localhost:8080/api";
    static shopsUrl: string = `${ShopService.host}/shops`;
    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private http: Http) {

    }

    handleError(error: any): Promise<any> {
        console.log("An error occured in ShopService", error)
        return Promise.reject(error.message || error);
    }

    getShops(): Promise<Shop[]> {
        //return Promise.resolve(SHOPS);
        let retVal: Promise<Shop[]> = this.http.get(ShopService.shopsUrl)
            .toPromise()
            .then(response => response.json() as Shop[])
            .catch(this.handleError);

        console.log("ShopService getShops", retVal);

        return retVal;
    }

    findById(shopId: number): Promise<Shop> {

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

    locate(long: number, lat: number): Promise<Shop> {

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

    addShop2(shop: Shop): Promise<Shop> {
        let allShops: Shop[];

        return this.getShops().then(shops => {
            allShops = shops;

            let newShopId = Math.max(...allShops.map(shop => shop.id)) +1;

            return newShopId;
            })
            .then(newShopId => {
                shop.id = newShopId;

                return this.http.post(ShopService.shopsUrl, JSON.stringify(shop), {headers: this.headers})
                    .toPromise()
                    .then(response => response.json() as Shop )
                    .catch(this.handleError);
            });
    }

    addShop(shop: Shop): void {
        this.getShops().then(shops => {
            let allShops: Shop[] = shops;

            let newShopId = Math.max(...allShops.map(shop => shop.id)) +1;

            shop.id = newShopId;

            this.http.post(ShopService.shopsUrl, JSON.stringify(shop), {headers: this.headers})
                .toPromise()
                .catch(this.handleError);
        });
    }
}
