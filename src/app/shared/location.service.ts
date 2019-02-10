import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocation(): Observable<any> {
    return Observable.create(observer => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (success) => { observer.next(success);
                            observer.complete();
                          },
            (error) => observer.error(error)
          );
      } else {
        observer.error('Browser is unsupported');
      }
    });
  }
}
