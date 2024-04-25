import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesArray, ArticlesByTopic } from '../models/ArticlesByTopic';
import { ArticleData } from '../models/ArticleData';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  getRecommendedBlogs(urlParam: string): Observable<ArticlesArray []> {
    return this.http.get<ArticlesArray []>(urlParam);
  }

  getAllArticles(urlParam: string): Observable<ArticlesByTopic []> {
    return this.http.get<ArticlesByTopic []>(urlParam);
  }

  getAllArticlesByCategory(urlParam: string): Observable<ArticlesByTopic> {
    return this.http.get<ArticlesByTopic>(urlParam);
  }

  getArticleById(urlParam: string): Observable<ArticleData> {
    return this.http.get<ArticleData>(urlParam);
  }

  getAllCategories(urlParam: string): Observable<Category []> {
    return this.http.get<Category []>(urlParam);
  }
}
