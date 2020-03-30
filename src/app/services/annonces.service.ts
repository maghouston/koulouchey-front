import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {

  constructor(private http: HttpClient) { }

  public getAnnonces(begin:number, offset:number):Observable<any>{

    return this.http.get(environment.serverUrl+'annonce/see?begin='+begin+'&offset='+offset);

  }

}
