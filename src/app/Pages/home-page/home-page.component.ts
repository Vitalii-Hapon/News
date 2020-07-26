import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService, Post} from '../../services/news.service';
import {Observable, Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  news$: Observable<Post[]>;
  filter: string;
  searchInput = new FormControl('');
  ngUnsubscribe = new Subject();

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getFilterValue();

    this.news$ = this.newsService.getPosts();

    this.searchInput.valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        this.filter = value;
        sessionStorage.setItem('filter', this.filter);
      });
  }

  getFilterValue(): void {
    if (sessionStorage.getItem('filter')) {
      this.filter = sessionStorage.getItem('filter');
      this.searchInput.patchValue(this.filter);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  clearFilter(): void {
    this.searchInput.reset();
    this.filter = '';
    sessionStorage.setItem('filter', this.filter);
  }
}
