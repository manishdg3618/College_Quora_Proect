package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exception.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojo.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
    @Autowired
    private UserRepository userRepo;
	
	@Override
	public List<User> getallUser() {
		
		return userRepo.findAll();
	}

	@Override
	public User addUser(User user) {

		return userRepo.save(user);
	}

	@Override
	public User validateUser(User user) {
		User availableUser = userRepo.findByEmail(user.getEmail());
		if(user != null && user.getPasswd().equals(availableUser.getPasswd()))
		return availableUser;
		else
		throw new UserHandlingException("No user found");
		
	}

	@Override
	public void deleteUSer(int id) {
		userRepo.deleteById(id);
		
	}
	
	
}
