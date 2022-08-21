package com.casestudy.repository;

import com.casestudy.model.Users;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UsersRepository extends MongoRepository<Users, String> {
	
	
}
