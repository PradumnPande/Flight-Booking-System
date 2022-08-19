package com.example.demo;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;



@Configuration
public class Config {
    
    @Bean
    public RouteLocator allRoutes(RouteLocatorBuilder route) {
        return route.routes()
                .route(user->user
                .path("/")
                .uri("http://localhost:8081"))
                
                .route(train->train
                        .path("/")
                        .uri("http://localhost:8082"))
                .route(booking->booking
                        .path("/api")
                        .uri("http://localhost:8083"))
                .build();
    }



}