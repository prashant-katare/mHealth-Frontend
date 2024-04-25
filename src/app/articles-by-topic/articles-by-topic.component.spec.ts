import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesByTopicComponent } from './articles-by-topic.component';

describe('ArticlesByTopicComponent', () => {
  let component: ArticlesByTopicComponent;
  let fixture: ComponentFixture<ArticlesByTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesByTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesByTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
