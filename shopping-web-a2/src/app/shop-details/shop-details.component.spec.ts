/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShopDetailsComponent } from './shop-details.component';
import {ShopService} from "../shop.service";
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ShopCardComponent} from "./shop-card.component";
import {AppRoutingModule} from "../app-routing.module";
import {APP_BASE_HREF} from "@angular/common";
import {LocateShopComponent} from "../locate-shop/locate-shop.component";
import {ListAllComponent} from "../list-all/list-all.component";
import {ShopFormComponent} from "../add-shop/shop-form.component";
import {AddShopComponent} from "../add-shop/add-shop.component";


describe('ShopDetailsComponent', () => {
  let component: ShopDetailsComponent;
  let fixture: ComponentFixture<ShopDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsComponent, AddShopComponent, ShopFormComponent,ListAllComponent, LocateShopComponent, ShopCardComponent],
      imports: [MaterialModule.forRoot(),FormsModule, AppRoutingModule],
      providers: [ShopService,{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
