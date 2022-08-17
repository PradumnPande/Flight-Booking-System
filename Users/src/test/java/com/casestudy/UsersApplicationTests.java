package com.casestudy;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.casestudy.exception.UserNotFoundException;
import com.casestudy.model.Booking;
import com.casestudy.model.Users;
import com.casestudy.repository.UsersRepository;
import com.casestudy.service.UsersService;

@RunWith(SpringRunner.class)
@SpringBootTest
class UsersApplicationTests {
	
	@Autowired
	private UsersService usersService;
	@MockBean
	private UsersRepository usersRepository;
	
	@Test
	public void registerUserTest() {
		Users user = new Users("Pradumn", "Pradumn Pande", 24, "male", "pandepraduman@gmail.com", "helloworld", 987654321, "ROLE_USER", new ArrayList<Booking>());
//		when(usersRepository.save(user)).thenReturn(user);
		assertEquals("User Registered Successfully", usersService.registerUser(user));
	}
	
	@Test
	public void getUserTest() throws UserNotFoundException {
		String username = "Pradumn";
		Optional<Users> userOpt = Optional.of(new Users("Pradumn", "Pradumn Pande", 24, "male", "pandepraduman@gmail.com", "helloworld", 987654321, "ROLE_USER", new ArrayList<Booking>()));
		when(usersRepository.findById(username))
		.thenReturn(userOpt);
		Users user = userOpt.get();
		assertEquals(user, usersService.getUser(username));
	}
	
	@Test
	public void removeUserTest() throws UserNotFoundException {
		String username="abc";
		Optional<Users> userOpt = Optional.of(new Users("abc", "Pradumn", 24, "male", "pandepraduman@gmail.com", "helloworld", 987654321, "ROLE_USER", new ArrayList<Booking>()));
		Users user1 = userOpt.get();
		when(usersRepository.save(user1)).thenReturn(user1);
		when(usersRepository.findById(username))
		.thenReturn(userOpt);
		if(usersRepository.existsById(username)) {
			usersService.removeUser(username);
			verify(usersRepository, times(1)).deleteById(username);
		}
		
	}
	
	

}
