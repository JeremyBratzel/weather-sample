import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiEndPoint = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getCurrent(location: Location): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any[]>(this.apiEndPoint + '/current/?lat=' + location.Lat + '&lon=' + location.Lon, { }).pipe(map((response: any) => response));
  }
  getForecast(location: Location): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any[]>(this.apiEndPoint + '/forecast/?lat=' + location.Lat + '&lon=' + location.Lon, { }).pipe(map((response: any) => response));
  }
}
