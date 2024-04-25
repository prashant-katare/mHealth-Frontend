import { Component, OnInit } from '@angular/core';
import { ArticlesArray } from '../models/ArticlesByTopic';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { baseUrl, appName } from '../services/baseUrl';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private articleService : ArticleService, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    this.articleService.getRecommendedBlogs(baseUrl+appName+"/allRecommendedArticles")
          .subscribe((data) =>{
            this.recommendedArticles = data;
            console.log(this.recommendedArticles);
          });
  }

  recommendedArticles : ArticlesArray [] = [
    {articleId : 2, articleName : "Why we sleep (You are probably anxious because you lack sleep)"},
    {articleId : 40, articleName : "Diet, Exercise and Sleep"},
    {articleId : 49, articleName : "Emotional maturity"},
    {articleId : 55, articleName : "Do less... Do important"},
    {articleId : 10, articleName : "Messi"}
  ]

}
