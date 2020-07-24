import {Component, OnInit} from '@angular/core';
import {NewsService, Post} from '../../services/news.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  news$: Observable<Post[]>;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.news$ = this.newsService.getPosts();
    // this.newsService.getPosts().subscribe( value => console.log(value));
  }

}
