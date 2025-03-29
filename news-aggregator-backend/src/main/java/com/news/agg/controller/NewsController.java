package com.news.agg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.news.agg.model.NewsArticle;
import com.news.agg.service.NewsService;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins="*")
public class NewsController {

	@Autowired
	private NewsService newsService;
	
	@GetMapping("/all")
	public List<NewsArticle> getAllNews()
	{
		return newsService.getAllNews();
	}
	
	@PostMapping("/add")
	public String addNews(@RequestBody NewsArticle article)
	{
		newsService.saveNews(article);
		return "News added successfully";
	}
	
	@GetMapping("/source/{source}")
	public List<NewsArticle> getNewsBySource(@PathVariable String source)
	{
		return newsService.getNewsBySource(source);
	}
}
