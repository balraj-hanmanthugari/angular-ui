import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  private UrlOrigin = environment.baseURL;

  constructor(private http: HttpClient) {}

  ajaxGetMultipleCall(urls) {
    let responses = [];
    for (let url of urls) {
      responses.push(this.http.get(this.UrlOrigin + url));
    }
    return forkJoin(responses);
  }

  ajaxGetCall(url) {
    return this.http.get(this.UrlOrigin + url);
  }

  ajaxPostCall(url, data) {
    return this.http.post(this.UrlOrigin + url, data);
  }

  ajaxPatchCall(url, data) {
    return this.http.patch(this.UrlOrigin + url, data);
  }

  ajaxDeleteCall(url) {
    return this.http.delete(this.UrlOrigin + url);
  }
}
