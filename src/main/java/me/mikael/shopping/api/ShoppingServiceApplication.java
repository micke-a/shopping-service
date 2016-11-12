package me.mikael.shopping.api;

import com.google.maps.GeoApiContext;
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

    @Bean
    public GeoApiContext geoApiContext(){

        return new GeoApiContext()
                .setConnectTimeout(1, TimeUnit.SECONDS)
                .setReadTimeout(1, TimeUnit.SECONDS)
                .setWriteTimeout(1, TimeUnit.SECONDS)
                .setApiKey(googleMapsApiKey);

    }

    public static void main(String[] args) {
        SpringApplication.run(ShoppingServiceApplication.class, args);
    }
}
