import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AnotherComponent } from './other/another.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding.component';
import {ShopService} from "./shop.service";
import { ListAllComponent } from './list-all/list-all.component';
import { AddShopComponent } from './add-shop/add-shop.component';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import {AppRoutingModule} from "./app-routing.module";
import { ShopFormComponent } from './add-shop/shop-form.component';
import { LocateShopComponent } from './locate-shop/locate-shop.component';
import { ShopCardComponent } from './shop-details/shop-card.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ListAllComponent,
    AddShopComponent,
    ShopDetailsComponent,
    ShopFormComponent,
    LocateShopComponent,
    ShopCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
