package com.app.service;

import java.util.List;

import com.app.pojo.User;

public interface IUserService {
  List<User> getallUser();
  User addUser(User user);
  User validateUser(User user);
  void deleteUSer(int id);
}
