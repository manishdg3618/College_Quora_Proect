package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/register")
@CrossOrigin
public class RegisterController {

	@Autowired
	private IUserService userService;
	
	public RegisterController() {
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping
	public User addNewUser(@RequestBody User user) {

		return userService.addUser(user);
	}
}
