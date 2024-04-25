import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Category } from '../models/Category';
import { baseUrl, appName } from '../services/baseUrl';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private articleService : ArticleService, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.articleService.getAllCategories(baseUrl+appName+"/allCategories")
          .subscribe((data) =>{
            this.allCategories = data;
            console.log(this.allCategories);
          });
  }

  displayProperty:string = "none";

  dropdownOpen:boolean = false;

  navbarClass:string = "navBar";

  titleDisplay:string = "inline"

  hamDisplay:string = "inline";

  crossDisplay:string = "none";

  callToArticlesByTopicFunction(newCategoryId:string){

    this.sharedService.sendClickEvent(newCategoryId);

    }

  toggle() {
    if(this.dropdownOpen == false) {
      this.displayProperty = "block";
      this.dropdownOpen = true;
    }
    else{
      this.displayProperty = "none";
      this.dropdownOpen = false;
    }
  }

  collapseDropdown() {
    this.displayProperty = "none";
    this.dropdownOpen = false;
  }

  allCategories : Category [] = [
    { categoryName : "Sports", categoryId : "1"},
    { categoryName : "Tech", categoryId : "1"},
    { categoryName : "Health", categoryId : "1"},
    { categoryName : "Education", categoryId : "1"},
  ]

  expandSmallNav() {
    this.navbarClass = "smallScreenNavBar";
    this.hamDisplay = "none";
    this.titleDisplay = "none";
    this.crossDisplay = "block";
  }

  collapleSmallnav() {
    this.navbarClass = "navBar";
    this.hamDisplay = "inline";
    this.titleDisplay = "inline";
    this.crossDisplay = "none";
  }

}
