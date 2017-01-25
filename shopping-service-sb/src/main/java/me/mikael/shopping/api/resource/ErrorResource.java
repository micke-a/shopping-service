package me.mikael.shopping.api.resource;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

/**
 *
 */
@Data
@JsonIgnoreProperties
public class ErrorResource {
    private int code;
    private String message;

    public ErrorResource(int code, String message) {
        this.code = code;
        this.message = message;
    }
}
