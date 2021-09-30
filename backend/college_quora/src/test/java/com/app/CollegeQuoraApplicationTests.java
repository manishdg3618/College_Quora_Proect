package com.app;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.dao.UserRepository;
import com.app.pojo.Role;
import com.app.pojo.User;
import com.app.service.IUserService;

@SpringBootTest
class CollegeQuoraApplicationTests {
	@Autowired
	private IUserService userService;
	@Autowired
	private UserRepository userDao;

	@Test
	void contextLoads() {
		List<User> users = userService.getallUser();
		assertEquals(0, users.size());
		
	}
	
	@Test
	public void testSaveUser() throws Exception{
		User user=new User("mohit","raina", "mohit@gmail.com", "9900",Role.STUDENT, "9028218400");
		User newUser = userDao.save(user);
		assertEquals(3,newUser.getId() );
	}
	
	
	

}
