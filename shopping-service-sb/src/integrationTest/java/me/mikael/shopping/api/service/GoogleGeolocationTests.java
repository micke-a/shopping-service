package me.mikael.shopping.api.service;

import com.google.maps.GeoApiContext;
import me.mikael.shopping.api.domain.Location;
import org.junit.Before;
import org.junit.Test;

import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/**
 *
 */
public class GoogleGeolocationTests {

    private GoogleGeolocationService ggs;

    @Before
    public void before(){
        ggs = new GoogleGeolocationService(new GeoApiContext().setApiKey(System.getenv("GOOGLE_MAPS_API_KEY")));
}

    @Test
    public void locationLookupAgainstKnownLocation(){
        Optional<Location> locationOptional = ggs.findLocationByStreetAndPostCode("70 Buckwells Field","SG143FF");

        assertTrue(locationOptional.isPresent());

        Location loc = locationOptional.get();

        assertEquals(-0.082995, loc.getLongitude(),0.00000001);
        assertEquals(51.8103, loc.getLatitude(),0.0001);
    }

    @Test
    public void locationLookupAgainstLocationWhichDoesNotExist(){
        Optional<Location> locationOptional = ggs.findLocationByStreetAndPostCode("123 Gotham City","BATMAN");

        assertFalse(locationOptional.isPresent());
    }
}
