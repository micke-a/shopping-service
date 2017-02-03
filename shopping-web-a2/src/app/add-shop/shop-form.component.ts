import { Component, OnInit } from '@angular/core';
import {Shop} from "../shop";
import {ShopService} from "../shop.service";

@Component({
  selector: 'app-shop-form',
  template: `
    <form (ngSubmit)="onSubmit()" #shopForm="ngForm">

    <md-input-container>
      <input md-input placeholder="Shop name" type="text" required [(ngModel)]="model.name" name="name"/>
    </md-input-container>
    
    <table cellspacing="0">

      <tr>
        <td>
          <md-input-container>
            <input md-input placeholder="Number" type="text" required [(ngModel)]="model.address.number" name="number"/>
          </md-input-container>
        </td>
        <td>
          <md-input-container>
            <input md-input placeholder="Post Code"  type="text" required [(ngModel)]="model.address.postCode" name="postCode"/>
          </md-input-container>
        </td>
      </tr>
    </table>
    
    <button md-raised-button (click)="onSubmit()" color="primary" [disabled]="!shopForm.form.valid">Save</button>
    <button md-raised-button (click)="resetForm()" color="warn">Reset</button>
    
  </form>
  <pre>
    {{diagnostic}}
</pre>
  
  `,
  styles: []
})
export class ShopFormComponent implements OnInit {

  model:Shop = new Shop();
  constructor( private shopService:ShopService) { }

  onSubmit(){
    console.log("ShopForm - submit clicked");
    this.shopService.addShop(this.model);

    this.resetForm();

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

  resetForm(): void {
    this.model = new Shop();
  }
}
