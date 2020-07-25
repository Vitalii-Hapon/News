import {Injectable} from '@angular/core';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

export interface Post {
  source: {
    id: string | null,
    name: string,
  };
  author: string;
  title: string;
  description: string | null;
  // url: webkitURL;
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string;

}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  readonly HTTP_URL = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-25&sortBy=publishedAt&apiKey=1be834d5d6a845929bcb756e50452e9d';
  req = new Request(this.HTTP_URL);

  constructor() {
  }

  getPosts(): Observable<Post[]> {
    const prom = fetch(this.req).then(value => value.json());
    return fromPromise(prom)
      .pipe(
      map( value => value.articles)
    );
  }
}

