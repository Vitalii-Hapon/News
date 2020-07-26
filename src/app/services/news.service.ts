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
  url: string;
  urlToImage: string | null;
  publishedAt: Date;
  content: string;
}

export interface Response {
  status: string;
  totalResults: number;
  articles: Post[];
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  readonly HTTP_URL = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-26&sortBy=publishedAt&apiKey=1be834d5d6a845929bcb756e50452e9d';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Response>(this.HTTP_URL).pipe(map(value => value.articles));
  }

  getPostByTitle(title: string): Observable<Post> {
    return this.http.get<Response>(this.HTTP_URL).pipe(map(value => {
      return value.articles.find(item => item.title.toLowerCase() === title.toLowerCase());
    }));
  }
}

