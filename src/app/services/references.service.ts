import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<any> {
    return this.http.get(environment.serverUrl+'references/categories')
  }
}
