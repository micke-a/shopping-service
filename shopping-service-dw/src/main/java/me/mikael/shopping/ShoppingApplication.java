package me.mikael.shopping;

import com.google.maps.model.Distance;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import me.mikael.shopping.api.distance.DefaultDistanceCalculator;
import me.mikael.shopping.api.distance.DistanceCalculator;
import me.mikael.shopping.api.domain.Location;
import me.mikael.shopping.api.domain.Shop;
import me.mikael.shopping.api.domain.ShopAddress;
import me.mikael.shopping.api.persistence.ShopRepository;
import me.mikael.shopping.api.service.DefaultShopLocatorService;
import me.mikael.shopping.api.service.GeolocationService;
import me.mikael.shopping.api.service.GoogleGeolocationService;
import me.mikael.shopping.api.service.ShopLocatorService;
import me.mikael.shopping.persistence.ListShopRepository;
import me.mikael.shopping.resources.ShopResource;

/**
 *
 */
public class ShoppingApplication extends Application<ShoppingApplicationConfiguration> {

    private ShopRepository shopRepository;
    private GeolocationService geolocationService;
    private ShopLocatorService shopLocatorService;
    private DistanceCalculator distanceCalculator;

    @Override
    public void initialize(Bootstrap<ShoppingApplicationConfiguration> bootstrap) {
        super.initialize(bootstrap);

        shopRepository = new ListShopRepository();

        for(int i=0; i<10;i++) {
            ShopAddress sa = new ShopAddress();
            sa.setNumber("10"+i);
            sa.setPostCode("SG14"+i+"FF");

            Location loc = new Location(i,i);

            Shop shop = new Shop();
            shop.setName("name"+i);
            shop.setAddress(sa);
            shop.setLocation(loc);

            shopRepository.saveShop(shop);
        }

    }

    @Override
    public void run(ShoppingApplicationConfiguration configuration, Environment environment) throws Exception {

        distanceCalculator = new DefaultDistanceCalculator();
        shopLocatorService = new DefaultShopLocatorService(distanceCalculator, shopRepository);
        geolocationService = new GoogleGeolocationService(configuration.createGeoApiContext());

        final ShopResource shopResource = new ShopResource(shopRepository, geolocationService, shopLocatorService);


        environment.jersey().register(shopResource);
    }

    public static void main(String[] args) throws Exception {
        new ShoppingApplication().run(args);
    }
}
