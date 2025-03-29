package com.news.agg.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.news.agg.model.User;
import com.news.agg.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;
	
	@Autowired
	private PasswordEncoder passEncode;
	
	public User saveUser(User user)
	{
		user.setPassword(passEncode.encode(user.getPassword()));
		return repo.save(user);
	}
	
	public Optional<User> findByUsername(String username)
	{
		return repo.findByUsername(username);
	}
}
