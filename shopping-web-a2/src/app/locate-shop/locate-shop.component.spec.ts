/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocateShopComponent } from './locate-shop.component';

describe('LocateShopComponent', () => {
  let component: LocateShopComponent;
  let fixture: ComponentFixture<LocateShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateShopComponent ]
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
