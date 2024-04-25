import { Component, OnInit } from '@angular/core';
import { ArticlesArray } from '../models/ArticlesByTopic';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Category } from '../models/Category';
import { baseUrl, appName } from '../services/baseUrl';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private articleService : ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articleService.getRecommendedBlogs(baseUrl+appName+"/allRecommendedArticles")
          .subscribe((data) =>{
            this.recommendedArticles = data;
            console.log(this.recommendedArticles);
          });

          this.articleService.getAllCategories(baseUrl+appName+"/allCategories")
          .subscribe((data) =>{
            this.allCategories = data;
            console.log(this.allCategories);
          });
  }

  allCategories : Category [] = [
    { categoryName : "Sports", categoryId : "1"},
    { categoryName : "Tech", categoryId : "1"},
    { categoryName : "Health", categoryId : "1"},
    { categoryName : "Education", categoryId : "1"},
  ]

  recommendedArticles : ArticlesArray [] = [
    {articleId : 2, articleName : "Why we sleep (You are probably anxious because you lack sleep)"},
    {articleId : 40, articleName : "Diet, Exercise and Sleep"},
    {articleId : 49, articleName : "Emotional maturity"},
    {articleId : 55, articleName : "Do less... Do important"},
    {articleId : 10, articleName : "Messi"}
  ]

}
