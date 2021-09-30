package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ErrorResponse;
import com.app.pojo.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/")
@CrossOrigin
public class ValidateController {

	@Autowired
	private IUserService userService;

	public ValidateController() {
		// TODO Auto-generated constructor stub
	}

	@PostMapping
	public ResponseEntity<?> validateUser(@RequestBody User user) {

		try {
			User availableUser=userService.validateUser(user);
		return new ResponseEntity<>(availableUser,HttpStatus.OK);	
		}
		catch (Exception e) {
			return new ResponseEntity<>(new ErrorResponse("No user found", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
	}

}
