import {Component, OnInit} from '@angular/core';
import {NewsService, Post} from '../../services/news.service';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(private newsService: NewsService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.post$ = this.router.params
      .pipe(
        switchMap(
          (param: Params) => this.newsService.getPostByIndex(param.index)
        ));
  }


}
