package com.news.agg.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.news.agg.model.NewsArticle;
import com.news.agg.repo.NewsRepository;

@Service
public class NewsService {

	@Autowired
	private NewsRepository repo;
	
	public List<NewsArticle> getAllNews(){
		return repo.findAll();
	}
	
	public void saveNews(NewsArticle article)
	{
		repo.save(article);
	}
	
	public List<NewsArticle> getNewsBySource(String source)
	{
		return repo.findBySource(source);
	}
}
