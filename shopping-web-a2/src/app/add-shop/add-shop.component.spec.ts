/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddShopComponent } from './add-shop.component';
import {ShopFormComponent} from "./shop-form.component";
import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {ShopService} from "../shop.service";
import {AppRoutingModule} from "../app-routing.module";
import {ListAllComponent} from "../list-all/list-all.component";
import {LocateShopComponent} from "../locate-shop/locate-shop.component";
import {ShopDetailsComponent} from "../shop-details/shop-details.component";
import { Shop } from '../shop';
import {ShopCardComponent} from "../shop-details/shop-card.component";
import {APP_BASE_HREF} from "@angular/common";

describe('AddShopComponent', () => {
  let component: AddShopComponent;
  let fixture: ComponentFixture<AddShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShopComponent, ShopFormComponent,ListAllComponent, LocateShopComponent, ShopDetailsComponent, ShopCardComponent],
      imports: [MaterialModule.forRoot(),FormsModule, AppRoutingModule],
      providers: [ShopService,{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
