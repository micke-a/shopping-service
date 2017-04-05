package me.mikael.shopping.resources;

/**
 *
 */

import com.codahale.metrics.annotation.Timed;
import me.mikael.shopping.api.domain.Location;
import me.mikael.shopping.api.domain.Shop;
import me.mikael.shopping.api.domain.ShopAddress;
import me.mikael.shopping.api.persistence.ShopRepository;
import me.mikael.shopping.api.service.GeolocationService;
import me.mikael.shopping.api.service.ShopLocatorService;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.Optional;

@Path("/")
@Produces(MediaType.APPLICATION_JSON)
public class ShopResource {

    private GeolocationService geolocationService;
    private ShopRepository shopRepository;
    private ShopLocatorService shopLocatorService;

    public ShopResource(ShopRepository shopRepository, GeolocationService geolocationService, ShopLocatorService shopLocatorService){
        this.shopRepository = shopRepository;
        this.geolocationService = geolocationService;
        this.shopLocatorService = shopLocatorService;

    }

    @POST
    @Timed
    @Path("/shops")
    public Shop addShop(Shop shop){

        //Fetch and set the geolocation of the Shop
        final ShopAddress sa = shop.getAddress();

        final Optional<Location> shopLocation = geolocationService.findLocationByStreetAndPostCode(sa.getStreet(), sa.getPostCode() );

        if(shopLocation.isPresent()){
            shop.setLocation(shopLocation.get());
            shopRepository.saveShop(shop);
        }

        return shop;
    }

    @GET
    @Timed
    @Path("/shops")
    public Iterable<Shop> findAllShops(){

        return shopRepository.findAll();
    }

    @GET
    @Timed
    @Path("/shops/{longitude}/{latitude}/")
    public Optional<Shop> getShopsForLongLat(
            @PathParam("longitude") double longitude,
            @PathParam("latitude") double latitude){

        return shopLocatorService.findShopNearestTo(new Location(longitude, latitude));
    }

    @GET
    @Timed
    @Path("/shops/{id}")
    public Optional<Shop> getShopsForLongLat(@PathParam("id") int id){
        return shopRepository.findById(id);
    }
}
