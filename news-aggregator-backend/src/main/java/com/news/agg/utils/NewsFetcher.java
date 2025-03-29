package com.news.agg.utils;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.news.agg.model.NewsArticle;
import com.news.agg.service.NewsService;

@Component
public class NewsFetcher {

	@Autowired
	private NewsService newsService;
	
	private final String NEWS_API_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY";
	
	@Scheduled(fixedRate = 3600000)
	public void fetchNewsFromAPI() {
		RestTemplate restTemplate = new RestTemplate();
		NewsApiResponse res = restTemplate.getForObject(NEWS_API_URL,NewsApiResponse.class);
		
		if(res!=null && res.getArticle()!=null) {
			List<NewsArticle> articles = res.getArticle();
			articles.forEach(article->{
				article.setPublishedAt(LocalDateTime.now());
				newsService.saveNews(article);
			});
		}
	}
}
