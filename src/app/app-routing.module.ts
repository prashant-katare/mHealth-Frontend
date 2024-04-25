import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticlesByTopicComponent } from './articles-by-topic/articles-by-topic.component';
import { ContentComponent } from './content/content.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    component: ContentComponent, 
    path: ""
  },
  {
    component: ContentComponent, 
    path: "home"
  },
  {
    component: ArticleComponent,
    path: "article/:articleId"
  },
  {
    component: ArticlesByTopicComponent,
    path: "articlesByTopic/:categoryId"
  },
  {
    component: CategoriesComponent,
    path: "allCategories"
  },
  {
    component: AllArticlesComponent,
    path: "allArticles"
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing : false,
    scrollPositionRestoration: 'top'
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
