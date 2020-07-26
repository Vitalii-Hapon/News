import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewsService, Post} from '../../services/news.service';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  news: Post[];
  filter: string;
  searchInput = new FormControl('');
  ngUnsubscribe = new Subject();
  pageSize = 5;
  startIndex = 0;
  endIndex = this.pageSize;

  constructor(private newsService: NewsService) {
  }

  ngOnInit(): void {
    this.getFilterValue();
    this.getNews();
    this.checkFilterInput();
  }

  getNews(): void {
    this.newsService
      .getPosts()
      .pipe(
        takeUntil(this.ngUnsubscribe))
      .subscribe(value => {
        this.news = value;
      });
  }

  checkFilterInput(): void {
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

  clearFilter(): void {
    this.searchInput.patchValue('');
    this.filter = '';
    sessionStorage.setItem('filter', this.filter);
  }

  changePage(event: PageEvent): void {
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
    if (this.endIndex > this.news.length) {
      this.endIndex = this.news.length;
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

