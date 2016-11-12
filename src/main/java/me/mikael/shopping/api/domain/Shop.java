package me.mikael.shopping.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import me.mikael.shopping.api.distance.LocationAware;

import javax.persistence.*;

/**
 *
 */
@Entity
@Data
public class Shop implements LocationAware{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Version
    @JsonIgnore
    private long version;

    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    private ShopAddress address;

    @OneToOne(cascade = CascadeType.ALL)
    private Location location;
}
