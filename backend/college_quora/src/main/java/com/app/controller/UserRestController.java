package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserRestController {
	@Autowired
	private IUserService userService;

	public UserRestController() {
		// TODO Auto-generated constructor stub
	}

	@GetMapping
	public List<User> getAllUsersData() {

		return userService.getallUser();

	}

	@DeleteMapping("/{id}")
	public void deleteUserById(@PathVariable int id)
	{
		userService.deleteUSer(id);
	}
	
	
}
