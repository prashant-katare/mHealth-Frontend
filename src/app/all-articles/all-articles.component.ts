import { Component, OnInit } from '@angular/core';
import { ArticlesByTopic, ArticlesArray } from '../models/ArticlesByTopic';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { baseUrl, appName } from '../services/baseUrl';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  constructor(private articleService : ArticleService) { }

  ngOnInit(): void {

    this.articleService.getRecommendedBlogs(baseUrl+appName+"/allRecommendedArticles")
          .subscribe((data) =>{
            this.recommendedArticles = data;
            console.log(this.recommendedArticles);
          });

    this.articleService.getAllArticles(baseUrl+appName+"/allArticles")
          .subscribe((data) =>{
            this.allArticlesData = data;
            console.log(this.allArticlesData);
          });


  }


  allArticlesData : ArticlesByTopic [] = [
    {
      categoryName : "Sports",
      categoryId : "53",
      articles : [
        {articleName : "Dhoni", articleId : 9},
        {articleName : "Sachin", articleId : 5},
        {articleName : "Messi", articleId : 10},
      ]
    },
    {
      categoryName : "Health",
      categoryId : "54",
      articles : [
        {articleName : "Diet", articleId : 69},
        {articleName : "Water", articleId : 65},
        {articleName : "Sleep", articleId : 61},
      ]
    },
    {
      categoryName : "Tech",
      categoryId : "55",
      articles : [
        {articleName : "ChatGpt", articleId : 92},
        {articleName : "AI", articleId : 52},
        {articleName : "ML", articleId : 102},
      ]
    },
  ]

  recommendedArticles : ArticlesArray [] = [
    {articleId : 2, articleName : "Why we sleep (You are probably anxious because you lack sleep)"},
    {articleId : 40, articleName : "Diet, Exercise and Sleep"},
    {articleId : 49, articleName : "Emotional maturity"},
    {articleId : 55, articleName : "Do less... Do important"},
    {articleId : 10, articleName : "Messi"}
  ]

}
