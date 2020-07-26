import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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

  readonly HTTP_URL = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-26&sortBy=publishedAt&apiKey=1be834d5d6a845929bcb756e50452e9d';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get(this.HTTP_URL).pipe(map(value => value.articles));
  }

  getPostByIndex(index: number): Observable<any> {
    return this.http.get(this.HTTP_URL).pipe(map(value => value.articles[index]));
  }
}

