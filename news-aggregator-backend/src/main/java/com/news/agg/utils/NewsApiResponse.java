package com.news.agg.utils;

import java.util.List;

import com.news.agg.model.NewsArticle;

public class NewsApiResponse {

	private List<NewsArticle> article;

	public List<NewsArticle> getArticle() {
		return article;
	}

	public void setArticle(List<NewsArticle> article) {
		this.article = article;
	}
}
