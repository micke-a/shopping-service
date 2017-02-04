/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject, fakeAsync} from '@angular/core/testing';
import { HttpModule, XHRBackend, ResponseOptions, Response, RequestMethod} from '@angular/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MockBackend,  MockConnection} from '@angular/http/testing/mock_backend';

import {MaterialModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF} from "@angular/common";

import {ShopService} from "./shop.service";
import {Shop} from "./shop";

/*
Created this test following https://angular-2-training-book.rangle.io/handout/testing/services/mockbackend.html
*/

const mockResponse = {
  "id":1,"name":"name 1",
  "address":{"number":"1 Buckwells Field","postCode":"SG143FF"},
  "location":{"id":1,"longitude":1.0,"latitude":1.0}
};

describe('ShopService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [HttpModule],
      providers: [
        ShopService,
        { provide: APP_BASE_HREF, useValue: '/'},
        { provide: XHRBackend, useClass: MockBackend}
      ]
    })
  });

  it('should find Shop for id', fakeAsync(
    inject([XHRBackend,ShopService], (mockBackend: XHRBackend, shopService:ShopService) =>{

      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          expect(connection.request.method).toBe(RequestMethod.Get);
          expect(connection.request.url).toBe(ShopService.shopsUrl+"/1");

          connection.mockRespond(new Response(
            new ResponseOptions({ body: mockResponse })
          ));
        });

      shopService.findById(1).then(shop => {
        expect(shop.id).toEqual(mockResponse.id);
        expect(shop.name).toEqual(mockResponse.name);

        expect(shop.location.id).toEqual(mockResponse.location.id);
        expect(shop.location.longitude).toEqual(mockResponse.location.longitude);
        expect(shop.location.latitude).toEqual(mockResponse.location.latitude);

        expect(shop.address.number).toEqual(mockResponse.address.number);
        expect(shop.address.postCode).toEqual(mockResponse.address.postCode);

        //This is probably a better idea...
        let expectedShop:Shop = mockResponse as Shop;
        expect(shop).toEqual(expectedShop);

      });

    })

    ));
});
