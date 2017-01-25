package me.mikael.shopping;

import com.google.maps.GeoApiContext;
import io.dropwizard.Configuration;

import java.util.concurrent.TimeUnit;

/**
 *
 */
public class ShoppingApplicationConfiguration extends Configuration {

    private String googleMapsApiKey;

    public String getGoogleMapsApiKey() {
        return googleMapsApiKey;
    }

    public void setGoogleMapsApiKey(String googleMapsApiKey) {
        this.googleMapsApiKey = googleMapsApiKey;
    }

    public GeoApiContext createGeoApiContext(){
        return new GeoApiContext()
                .setConnectTimeout(1, TimeUnit.SECONDS)
                .setReadTimeout(1, TimeUnit.SECONDS)
                .setWriteTimeout(1, TimeUnit.SECONDS)
                .setApiKey(getGoogleMapsApiKey());

    }
}
