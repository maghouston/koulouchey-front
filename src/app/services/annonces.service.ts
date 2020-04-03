import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
 

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {



  constructor(private http: HttpClient) { }

  public getAnnonces(begin:number, offset:number):Observable<any>{

    return this.http.get(environment.serverUrl+'annonce/see?begin='+begin+'&offset='+offset);

  }

  public createAnnonce(annonce: any): Observable<any>{
    return this.http.post(environment.serverUrl+'annonce/', annonce);
  }

  public postImageAnnonce(image: any, idAnnonce: number): Observable<any>{

    let formdata: FormData = new FormData();
    formdata.append('imageFile', image);
 
    const req = new HttpRequest('POST', environment.serverUrl+'image/?idAnnonce='+idAnnonce, formdata);
 
    return this.http.request(req);

  }

}
