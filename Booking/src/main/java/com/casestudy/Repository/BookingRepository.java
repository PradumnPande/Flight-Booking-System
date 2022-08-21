package com.casestudy.Repository;

import com.casestudy.Model.Booking;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookingRepository extends MongoRepository<Booking, Long> {

	Booking findByPnr(long pnr);

}
