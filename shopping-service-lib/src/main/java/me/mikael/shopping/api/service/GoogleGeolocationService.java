package me.mikael.shopping.api.service;

import com.google.maps.GeoApiContext;
import com.google.maps.GeocodingApi;
import com.google.maps.GeocodingApiRequest;
import com.google.maps.model.GeocodingResult;
import com.google.maps.model.LatLng;
import me.mikael.shopping.api.domain.Location;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * Geolocation service using the Google Maps Geocoding API
 *
 * See https://developers.google.com/maps/documentation/geocoding/intro for documentation.
 * See https://github.com/googlemaps/google-maps-services-java for client library information
 *
 */
public class GoogleGeolocationService implements GeolocationService {

    private final GeoApiContext geoApiContext;

    public GoogleGeolocationService(final GeoApiContext geoApiContext){
        this.geoApiContext = geoApiContext;
    }

    @Override
    public Optional<Location> findLocationByStreetAndPostCode(final String street, final String postCode) {

        GeocodingApiRequest request = GeocodingApi.newRequest(geoApiContext).address(street +" " +postCode);
        GeocodingResult[] results;
        Location loc = null;
        try {
            results = request.await();
            if(results.length > 0) {
                LatLng ll = results[0].geometry.location;
                loc = new Location(ll.lng, ll.lat);
            }

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return Optional.ofNullable(loc);
    }
}
