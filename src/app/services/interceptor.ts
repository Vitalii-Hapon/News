import {Injectable} from '@angular/core';
import {SpinnerService} from './spinner.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay, finalize} from 'rxjs/operators';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET') {
      this.spinnerService.show();
      return next.handle(req)
        .pipe(
          delay(250),
          finalize(() => {
            this.spinnerService.hide();
          }));
    }
    return next.handle(req);
  }
}
