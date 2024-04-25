export interface ArticlesByTopic {
    categoryName : string,
    categoryId : string,
    articles : ArticlesArray []
  }


export interface ArticlesArray {
    articleName : string,
    articleId : number
}
