package me.mikael.shopping.api.distance;

import me.mikael.shopping.api.domain.Location;

import java.util.List;
import java.util.Optional;

/**
 *
 */
public interface DistanceCalculator {

    double calculate(Location loc1, Location loc2);

    default double calculate(final LocationAware loc1, final LocationAware loc2){
        
        return calculate(loc1.getLocation(), loc2.getLocation());
    }

    default Optional<? extends LocationAware> nearest(LocationAware refLoc, List<? extends LocationAware> locations ){

        if(refLoc == null || locations == null || locations.isEmpty()){
            return Optional.empty();
        }

        LocationAware nearest = null;
        double smallestDistanceFound = Double.MAX_VALUE;

        //TODO use streams
        for( LocationAware dest : locations){
            double d = calculate(refLoc, dest);
            if(d < smallestDistanceFound){
                smallestDistanceFound = d;
                nearest = dest;
            }
        }

        return Optional.ofNullable(nearest);
    }
}
