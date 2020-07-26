import {Pipe, PipeTransform} from '@angular/core';
import {Post} from '../services/news.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], filter: string = ''): Post[] {
    if (!filter.toLowerCase().trim()) {
      return posts;
    } else {
      return posts.filter(post => {
        return post.title.toLowerCase().includes(filter.toLowerCase());
      });
    }
  }

}
