/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocateShopComponent } from './locate-shop.component';
import {ShopService} from "../shop.service";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {AddShopComponent} from "../add-shop/add-shop.component";
import {ShopFormComponent} from "../add-shop/shop-form.component";
import {ListAllComponent} from "../list-all/list-all.component";
import {ShopDetailsComponent} from "../shop-details/shop-details.component";
import {ShopCardComponent} from "../shop-details/shop-card.component";
import {APP_BASE_HREF} from "@angular/common";

describe('LocateShopComponent', () => {
  let component: LocateShopComponent;
  let fixture: ComponentFixture<LocateShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateShopComponent,AddShopComponent, ShopFormComponent,ListAllComponent, ShopDetailsComponent, ShopCardComponent],
      imports: [MaterialModule.forRoot(),FormsModule, AppRoutingModule],
      providers: [ShopService,{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
