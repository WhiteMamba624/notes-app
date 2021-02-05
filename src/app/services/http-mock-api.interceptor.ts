import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { selectHandler } from './mock.config';
   
  @Injectable()
  export class HttpMockApiInterceptor implements HttpInterceptor {
    constructor() {}
   
    intercept(
      request: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      const mockEndpointHandler = selectHandler(request);
      return mockEndpointHandler
        ? mockEndpointHandler(request)
        : next.handle(request);
    }
  }
   
  
  