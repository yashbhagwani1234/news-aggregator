package com.news.agg.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.news.agg.model.User;

public interface UserRepo extends JpaRepository<User,Long>{

	Optional<User> findByUsername(String username);
}
