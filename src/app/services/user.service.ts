import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(environment.serverUrl + 'user');
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(environment.serverUrl + 'mod');
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.serverUrl + 'admin', { responseType: 'text' });
  }
}
