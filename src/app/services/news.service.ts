import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface IPost {
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

export interface IResponse {
  status: string;
  totalResults: number;
  articles: IPost[];
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  readonly HTTP_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=1be834d5d6a845929bcb756e50452e9d';

  constructor(private http: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IResponse>(this.HTTP_URL).pipe(map(value => value.articles));
  }

  getPostByTitle(title: string): Observable<IPost> {
    return this.http.get<IResponse>(this.HTTP_URL).pipe(map(value => {
      return value.articles.find(item => item.title.toLowerCase() === title.toLowerCase());
    }));
  }
}

