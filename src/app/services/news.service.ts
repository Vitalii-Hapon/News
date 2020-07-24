import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Post {
  source: {
    id: string ,
    name: string,
  };
  author: string;
  title: string;
  description: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  readonly HTTP_URL = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-24&sortBy=publishedAt&apiKey=1be834d5d6a845929bcb756e50452e9d';
  req = new Request(this.HTTP_URL);

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<any> {
    const prom = fetch(this.req).then(value => value.json());
    return fromPromise(prom).pipe(
      map( value => console.log(value.articles))
    );
  }
}

