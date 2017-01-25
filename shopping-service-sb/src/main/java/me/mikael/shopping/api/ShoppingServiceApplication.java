package me.mikael.shopping.api;

import com.google.maps.GeoApiContext;
import me.mikael.shopping.api.distance.DefaultDistanceCalculator;
import me.mikael.shopping.api.distance.DistanceCalculator;
import me.mikael.shopping.api.persistence.JpaShopRepository;
import me.mikael.shopping.api.persistence.ShopRepository;
import me.mikael.shopping.api.service.DefaultShopLocatorService;
import me.mikael.shopping.api.service.GeolocationService;
import me.mikael.shopping.api.service.GoogleGeolocationService;
import me.mikael.shopping.api.service.ShopLocatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.TimeUnit;

@Configuration
@SpringBootApplication
public class ShoppingServiceApplication {

    @Value("${GOOGLE_MAPS_API_KEY}")
    private String googleMapsApiKey;

    @Autowired
    private ShopRepository shopRepository;

    @Bean
    public GeoApiContext geoApiContext(){

        return new GeoApiContext()
                .setConnectTimeout(1, TimeUnit.SECONDS)
                .setReadTimeout(1, TimeUnit.SECONDS)
                .setWriteTimeout(1, TimeUnit.SECONDS)
                .setApiKey(googleMapsApiKey);

    }

    @Bean
    public GeolocationService geolocationService(){
        return new GoogleGeolocationService(geoApiContext());
    }

    @Bean
    public DistanceCalculator distanceCalculator(){
        return new DefaultDistanceCalculator();
    }

    @Bean
    public ShopLocatorService shopLocatorService(){
     return new DefaultShopLocatorService(distanceCalculator(),shopRepository );
    }

    public static void main(String[] args) {
        SpringApplication.run(ShoppingServiceApplication.class, args);
    }
}
