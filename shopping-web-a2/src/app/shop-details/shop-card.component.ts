import {Component, Input} from '@angular/core';
import {Shop} from "../shop";

@Component({
    selector: 'app-shop-card',
    template: `
     <div class="card">
     
        <div class="card-block">
        <h4 class="card-title"> {{shop.name}} - Location ({{shop.location.longitude}},{{shop.location.latitude}}) </h4>
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum finibus quam in mattis. Fusce odio erat, fringilla vel tempus nec, eleifend et nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vitae odio vitae lectus accumsan efficitur. Donec varius metus non urna vulputate, nec ullamcorper tortor fringilla. Sed nec euismod ligula. Pellentesque lacinia orci enim, eget maximus est fermentum a. Vestibulum vel imperdiet metus. Donec at tincidunt nulla, id egestas massa.
        </p>
      <hr/>
      <button class="btn btn-info">CONTACT</button>
      <button class="btn btn-info">MAP</button>
      </div>
    </div>
  `,
    styles: []
})
export class ShopCardComponent {

    @Input()
    shop: Shop;

}
