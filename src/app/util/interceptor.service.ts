import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AngularPopupComponent } from '../shared/angular-popup/angular-popup.component';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  intercept(req, next) {
    let dialog = this.dialog.open(AngularPopupComponent, {
      width: '400px',
      data: {
        name: 'spinner',
        message: ''
      }
    });

    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    if (req.url.search('regLogin') === -1) {
      headers['Authorization'] = 'Bearer ' + this.userService.authData.token1;
    }

    let reqCopy = req.clone({
      setHeaders: headers
    });

    return next.handle(reqCopy).pipe(
      map(event => {
        dialog.close();
        return event;
      }),
      catchError(error => {
        dialog.close();
        if (error.status === 500 && error.error?.message === 'jwt malformed') {
          this.userService.logoutUser();
        }
        return throwError(error);
      })
    );
  }
}
