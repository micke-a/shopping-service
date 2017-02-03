import {Component, Input} from '@angular/core';
import {Shop} from "../shop";

@Component({
  selector: 'app-shop-card',
  template: `
    <md-card class="example-card">
      <md-card-header>
        <md-card-title>
            <a routerLink="/details/{{shop.id}}">{{shop.name}}</a>
         </md-card-title>
        <md-card-subtitle>Location ({{shop.location.longitude}},{{shop.location.latitude}})</md-card-subtitle>
      </md-card-header>
      <md-card-content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum finibus quam in mattis. Fusce odio erat, fringilla vel tempus nec, eleifend et nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vitae odio vitae lectus accumsan efficitur. Donec varius metus non urna vulputate, nec ullamcorper tortor fringilla. Sed nec euismod ligula. Pellentesque lacinia orci enim, eget maximus est fermentum a. Vestibulum vel imperdiet metus. Donec at tincidunt nulla, id egestas massa.
        </p>
      </md-card-content>
      <md-card-actions>
        <button md-button>CONTACT</button>
        <button md-button>MAP</button>
      </md-card-actions>
    </md-card>
  `,
  styles: []
})
export class ShopCardComponent  {

  @Input()
  shop:Shop;

}
