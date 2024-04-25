import { Component, OnInit } from '@angular/core';
import { ArticlesByTopic } from '../models/ArticlesByTopic';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesArray } from '../models/ArticlesByTopic';
import { baseUrl, appName } from '../services/baseUrl';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-by-topic',
  templateUrl: './articles-by-topic.component.html',
  styleUrls: ['./articles-by-topic.component.css']
})
export class ArticlesByTopicComponent implements OnInit {

  
  constructor(private articleService : ArticleService, private route: ActivatedRoute, private sharedService: SharedService) { 
      this.clickEventsubscription = this.sharedService.getClickEvent().subscribe((newCategoryId)=>{
      this.getNewCategoryData(newCategoryId);
      })
  }

  ngOnInit(): void {

    this.categoryId = this.route.snapshot.paramMap.get("categoryId");

    this.articleService.getAllArticlesByCategory(baseUrl+appName+"/allArticlesByCategory/"+this.categoryId)
          .subscribe((data) =>{
            this.articlesByTopic = data;
            console.log(this.articlesByTopic);
          });

          this.articleService.getRecommendedBlogs(baseUrl+appName+"/allRecommendedArticles")
          .subscribe((data) =>{
            this.recommendedArticles = data;
            console.log(this.recommendedArticles);
          });
  }

  clickEventsubscription:Subscription;

  categoryId: string | null = "";


  articlesByTopic : ArticlesByTopic = {
    categoryName : "Sports",
    categoryId : "54",
    articles : [
      {articleName : "Dhoni", articleId : 9},
      {articleName : "Sachin", articleId : 5},
      {articleName : "Messi", articleId : 10},
    ]
  };

  recommendedArticles : ArticlesArray [] = [
    {articleId : 2, articleName : "Why we sleep (You are probably anxious because you lack sleep)"},
    {articleId : 40, articleName : "Diet, Exercise and Sleep"},
    {articleId : 49, articleName : "Emotional maturity"},
    {articleId : 55, articleName : "Do less... Do important"},
    {articleId : 10, articleName : "Messi"}
  ]


  getNewCategoryData(newCategoryId:string) {
    this.categoryId = this.route.snapshot.paramMap.get("categoryId");
    console.log(this.categoryId);

    this.articleService.getAllArticlesByCategory(baseUrl+appName+"/allArticlesByCategory/"+newCategoryId)
                .subscribe((data) =>{
                  this.articlesByTopic = data;
                  console.log(this.articlesByTopic);
            });

  }



}
