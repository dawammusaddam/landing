import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const APIURL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  private Headers() {
    let headers = new HttpHeaders();
    // headers = headers.append('Authorization', 'Bearer ' + user?.token);
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('Access-Control-Allow-Origin', '*');
    const options = {headers: headers};
    return options;
  }
  
  post(url: string, data: any) {
    return this.http.post(APIURL + url, data, this.Headers());
  }

  get(url: string){
    return this.http.get(APIURL + url, this.Headers());
  }
}
