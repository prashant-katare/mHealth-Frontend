import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../models/ArticleData';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { ArticlesByTopic } from '../models/ArticlesByTopic';
import { baseUrl, appName } from '../services/baseUrl';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private articleService : ArticleService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get("articleId");
    console.log(this.articleId);

    this.articleService.getArticleById(baseUrl+appName+"/article/"+this.articleId)
          .subscribe((data) =>{
            this.articleData = data;

            this.categoryId = data.categoryId;
            console.log("category id -"+this.categoryId);

            console.log(this.articleData);

            this.articleService.getAllArticlesByCategory(baseUrl+appName+"/allArticlesByCategory/"+this.categoryId)
          .subscribe((data) =>{
            this.articlesByTopic = data;
            console.log(this.articlesByTopic);
          });

          });
  }

  articleId: string | null = "";

  categoryId: string | null = "";

  articleData : ArticleData = {
    articleId : "65",
    articleName : "Messi",
    articleContent : "<p>Lionel Andrés Messi (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.&nbsp;</p><p>Widely regarded as one of the greatest players of all time.Messi has won a record seven Ballon d'Or awards and a record six European Golden Shoes, and in 2020 he was named to the Ballon d'Or Dream Team. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 34 trophies, including 10 La Liga titles, seven Copa del Rey titles and four UEFA Champions Leagues.&nbsp;</p><p>&nbsp;With his country, he won the 2021 Copa América and the 2022 FIFA World Cup. A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga (474), most hat-tricks in La Liga (36) and the UEFA Champions League (eight), and most assists in La Liga (192) and the Copa América (17).&nbsp;</p><p>&nbsp;He also has the most international goals by a South American male (102). Messi has scored over 800 senior career goals for club and country, and has the most goals by a player for a single club (672).</p>",
    category : "Sports",
    categoryId : "3"
  };

  articlesByTopic : ArticlesByTopic = {
    categoryName : "Sports",
    categoryId : "54",
    articles : [
      {articleName : "Dhoni", articleId : 9},
      {articleName : "Sachin", articleId : 5},
      {articleName : "Messi", articleId : 10},
    ]
  };

  getNewArticleData (newArticleId:number) {
    this.articleId = this.route.snapshot.paramMap.get("articleId");
    console.log(this.articleId);

    this.articleService.getArticleById(baseUrl+appName+"/article/"+newArticleId)
          .subscribe((data) =>{
            this.articleData = data;
            console.log(this.articleData);

            this.categoryId = this.articleData.categoryId;
            console.log("category id -"+this.categoryId);
      
            this.articleService.getAllArticlesByCategory(baseUrl+appName+"/allArticlesByCategory/"+this.categoryId)
                .subscribe((data) =>{
                  this.articlesByTopic = data;
                  console.log(this.articlesByTopic);
            });
          });

  }


}
