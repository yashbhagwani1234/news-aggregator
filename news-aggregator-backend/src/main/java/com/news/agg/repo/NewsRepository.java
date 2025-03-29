package com.news.agg.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.news.agg.model.NewsArticle;

public interface NewsRepository extends JpaRepository<NewsArticle,Long>{

	List<NewsArticle> findBySource(String source);
}
