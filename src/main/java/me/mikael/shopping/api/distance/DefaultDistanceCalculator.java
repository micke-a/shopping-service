package me.mikael.shopping.api.distance;

import me.mikael.shopping.api.domain.Location;
import org.springframework.stereotype.Component;

/**
 * Simple as the bird flies default implementation
 * Other implementations could look at the Google Maps API https://github.com/googlemaps/google-maps-services-java/blob/master/src/test/java/com/google/maps/DistanceMatrixApiIntegrationTest.java
 *
 */
@Component
public class DefaultDistanceCalculator implements DistanceCalculator {

    @Override
    public double calculate(Location loc1, Location loc2) {

        double dx = loc2.getLatitude() - loc1.getLatitude();
        double dy = loc2.getLongitude() - loc1.getLongitude();

        return Math.sqrt( Math.pow(dx, 2) + Math.pow(dy, 2) );
    }
}
