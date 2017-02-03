package me.mikael.shopping;

import com.google.maps.model.Distance;
import io.dropwizard.Application;
import io.dropwizard.configuration.EnvironmentVariableSubstitutor;
import io.dropwizard.configuration.SubstitutingSourceProvider;
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
import org.eclipse.jetty.servlets.CrossOriginFilter;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

import static org.eclipse.jetty.servlets.CrossOriginFilter.*;

/**
 *
 */
public class ShoppingApplication extends Application<ShoppingApplicationConfiguration> {

    private static final String targetURLFormat         = "http://localhost:%d/";
    private static final String ALLOWED_HEADERS_LIST    = "*"; //"Accept, Content-Type, Content-Length, Authorization";
    private static final String ALLOWED_METHODS_LIST    = "GET, OPTIONS, PATCH, POST, PUT";
    private static final String GOOD_ORIGIN             = "*";
    private static final String BAD_ORIGIN              = "denied_host";

    private ShopRepository shopRepository;
    private GeolocationService geolocationService;
    private ShopLocatorService shopLocatorService;
    private DistanceCalculator distanceCalculator;

    @Override
    public void initialize(Bootstrap<ShoppingApplicationConfiguration> bootstrap) {
        super.initialize(bootstrap);

        bootstrap.setConfigurationSourceProvider(
                new SubstitutingSourceProvider(bootstrap.getConfigurationSourceProvider(),
                        new EnvironmentVariableSubstitutor()
                )
        );

        shopRepository = new ListShopRepository();

        for(int i=0; i<10;i++) {
            ShopAddress sa = new ShopAddress();
            sa.setNumber(i+" Buckwells Field");
            sa.setPostCode("SG143FF");

            Location loc = new Location(i,i);
            loc.setId(i);

            Shop shop = new Shop();
            shop.setId(i);
            shop.setName("name "+i);
            shop.setAddress(sa);
            shop.setLocation(loc);

            shopRepository.saveShop(shop);
        }

    }

    @Override
    public void run(ShoppingApplicationConfiguration configuration, Environment environment) throws Exception {

        System.setProperty("sun.net.http.allowRestrictedHeaders", "true");
        FilterRegistration.Dynamic filter = environment.servlets().addFilter("CORSFilter", CrossOriginFilter.class);

        //filter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), false, environment.getApplicationContext().getContextPath() + "*");
        filter.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");

        filter.setInitParameter(ALLOWED_METHODS_PARAM, ALLOWED_METHODS_LIST);
        filter.setInitParameter(ALLOWED_ORIGINS_PARAM, GOOD_ORIGIN);
        filter.setInitParameter(ALLOWED_HEADERS_PARAM, ALLOWED_HEADERS_LIST);
        filter.setInitParameter(ALLOW_CREDENTIALS_PARAM, "true");
        filter.setInitParameter(CHAIN_PREFLIGHT_PARAM, "false");
        filter.setInitParameter(CrossOriginFilter.ACCESS_CONTROL_EXPOSE_HEADERS_HEADER, "true");
        //filter.setInitParameter(CrossOriginFilter.EXPOSED_HEADERS_PARAM, "X-AUTH-TOKEN");

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
