package com.casestudy.Controller;

import java.util.List;

import com.casestudy.Model.Booking;
import com.casestudy.Service.BookingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@GetMapping("/getAllTickets")
	public List<Booking> getAllTickets() {
		return bookingService.getAllTickets();
	}

	@PostMapping("/reserve")
	public String reserveTicket(@RequestBody Booking book) {
		bookingService.reserveTicket(book);
		return "Ticket Reserved !";

	}
	
	@DeleteMapping("/cancel/{pnr}")
	public String cancelTicket(@PathVariable long pnr) {
		bookingService.cancelTicket(pnr);
		return "Ticket Cancelled !";
	}
}
