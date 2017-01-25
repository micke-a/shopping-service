package me.mikael.shopping.api.controller;

import me.mikael.shopping.api.resource.ErrorResource;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.ws.rs.BadRequestException;

/**
 *
 */
@ControllerAdvice
public class ShopExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = Exception.class)
    public String handleException(Exception e){
        return e.getMessage();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(value = BadRequestException.class)
    public ResponseEntity<Object> badRequest(BadRequestException e, WebRequest request){

        ErrorResource er = new ErrorResource(HttpStatus.BAD_REQUEST.value(), e.getMessage());

        return handleExceptionInternal(e,er,jsonHeaders(),HttpStatus.BAD_REQUEST, request);

    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(value = ResourceNotFoundException.class)
    public ResponseEntity<Object> notFound(ResourceNotFoundException e, WebRequest request){

        ErrorResource er = new ErrorResource(HttpStatus.NOT_FOUND.value(), e.getMessage());

        return handleExceptionInternal(e,er,jsonHeaders(),HttpStatus.NOT_FOUND, request);

    }

    private HttpHeaders jsonHeaders(){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        return headers;
    }

}
