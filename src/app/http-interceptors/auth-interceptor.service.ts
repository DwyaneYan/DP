import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';//获取token服务
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { mergeMap, catchError, tap} from 'rxjs/operators';
import { NzMessageService } from "ng-zorro-antd";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private ApiService: ApiService,
    public message: NzMessageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authReq = request;
    // 是否需要设置 token
    const authToken = sessionStorage.getItem("token")
    if (authToken) {
      authReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }
    //拦截器都会调用 next.handle()，以便这个请求流能走到下一个拦截器，并最终传给后端处理器
    return next.handle(authReq).pipe(
      mergeMap((event: any) => {
        console.log(event)
        if (event instanceof HttpResponse && event.status === 200) {
          console.log(event);//具体处理请求返回数据
          const code = event.body.code || 200;
          if (code == 401) {
            
          }
        }
        return of(event);
      }),
      //catchError会拦截并处理响应中的错误
      catchError((err: HttpErrorResponse) => this.handleData(err)
      )
    )
  }
  private handleData(
    event: HttpResponse<any> | HttpErrorResponse,
  ): Observable<any> {
    console.log(event)
    switch (event.status) {
      case 500:
        this.message.error(
          "An unknown server error has occurred ☹️" + event.status.toString()
        );
        break;
      default:
        break;
    }
    return of(event);
  }
}
