import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Base } from '../helper/base';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private router: Router, private http: HttpClient) { this.baseUrl = Base.baseUrl}
  // private apiUrl = 'https://rangkar-1.onrender.com';
  baseUrl: any

  public get(url: string, options?: any) {
     return this.http.get(this.baseUrl + url, options); 
    }
  public post(url: string, data: any, options?: any) {
    // debugger;
     return this.http.post(this.baseUrl + url, data, options); 
    }
  public put(url: string, data: any, options?: any) {
     return this.http.put(this.baseUrl + url, data, options); 
    }
  public delete(url: string, options?: any) {
     return this.http.delete(this.baseUrl + url, options); 
    }


  
}
