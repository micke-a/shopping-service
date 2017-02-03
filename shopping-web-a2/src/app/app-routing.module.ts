import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddShopComponent }   from './add-shop/add-shop.component';
import { ListAllComponent }      from './list-all/list-all.component';
import {ShopDetailsComponent}  from './shop-details/shop-details.component';
import {LocateShopComponent} from "./locate-shop/locate-shop.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: ListAllComponent},
  { path: 'add',  component: AddShopComponent},
  { path: 'locate',  component: LocateShopComponent},
  { path: 'details/:id', component: ShopDetailsComponent }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

