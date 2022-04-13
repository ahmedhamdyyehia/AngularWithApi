import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Iproduct } from '../models/iproduct';


@Injectable({
  providedIn: 'root'
})

export class TrackService {

  constructor(private httpClient:HttpClient) { }
  getallcourse()
  {
    let url="https://localhost:7106/api/tracks";
    return this.httpClient.get(url);
  }
  
}

