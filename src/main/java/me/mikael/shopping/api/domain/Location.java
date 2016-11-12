package me.mikael.shopping.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import me.mikael.shopping.api.distance.LocationAware;

import javax.persistence.*;

/**
 * TODO: good candidate for reuse, utility library perhaps?
 */
@Entity
@Data
public class Location implements LocationAware {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Version
    @JsonIgnore
    private long version;

    private double longitude;
    private double latitude;

    public Location() { /*Needed by Hibernate */ }

    public Location(double longitude, double latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    @Transient
    @JsonIgnore
    @Override
    public Location getLocation() {
        return this;
    }
}
