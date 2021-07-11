import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AngularPopupComponent } from '../shared/angular-popup/angular-popup.component';
import { UserService } from './user.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private userService: UserService, public dialog: MatDialog) {}

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
      headers['Authorization'] = 'Bearer ' + this.userService.authData.token;
    }

    let reqCopy = req.clone({
      setHeaders: headers
    });

    return next.handle(reqCopy).pipe(
      map(event => {
        setTimeout(() => {
          dialog.close();
        }, 1000);
        return event;
      }),
      catchError(error => {
        dialog.close();
        return throwError(error);
      })
    );
  }
}
