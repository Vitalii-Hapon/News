import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService, Post} from '../../services/news.service';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, OnDestroy {

  post: Post;
  ngUnsubscribe = new Subject();

  constructor(private newsService: NewsService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap(
          (param: Params) => this.newsService.getPostByTitle(param.title)
        )).subscribe( value => {console.log(value); this.post = value; });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
