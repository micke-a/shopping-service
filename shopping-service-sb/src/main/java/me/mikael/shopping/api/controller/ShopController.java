package me.mikael.shopping.api.controller;

import me.mikael.shopping.api.domain.Location;
import me.mikael.shopping.api.domain.Shop;
import me.mikael.shopping.api.domain.ShopAddress;
import me.mikael.shopping.api.persistence.JpaShopRepository;
import me.mikael.shopping.api.service.GeolocationService;
import me.mikael.shopping.api.service.ShopLocatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.BadRequestException;
import java.util.Optional;

/**
 *
 */
@RestController
public class ShopController {

    @Autowired
    private JpaShopRepository shopRepository;

    @Autowired
    private GeolocationService geolocationService;

    @Autowired
    private ShopLocatorService shopLocatorService;

    @RequestMapping(path = "/shops", method = RequestMethod.POST)
    public void shopsPost(@RequestBody Shop shop){

        //Fetch and set the geolocation of the Shop
        final ShopAddress sa = shop.getAddress();

        final Optional<Location> shopLocation = geolocationService.findLocationByNumberAndPostCode(sa.getNumber(), sa.getPostCode() );

        if(shopLocation.isPresent()){
            shop.setLocation(shopLocation.get());
            shopRepository.save(shop);
        }
        else{
            throw new BadRequestException("Bad request. Specified Location not found for the shop");
        }
    }

    @RequestMapping(path = "/shops/{longitude}/{latitude}/", method = RequestMethod.GET)
    public Shop shopsGetLongLat(@PathVariable("longitude") double longitude, @PathVariable("latitude") double latitude){

        final Optional<Shop> shopOptional = shopLocatorService.findShopNearestTo(new Location(longitude, latitude));

        if(shopOptional.isPresent()){
            return shopOptional.get();
        }
        else{
            throw new ResourceNotFoundException(String.format("No shops located near your location (long:%1s , lat:%2s )", longitude, latitude));
        }
    }

    @RequestMapping(path = "/shops", method = RequestMethod.GET)
    public Iterable<Shop> shopsFindAll(){

        return shopRepository.findAll();
    }
}
