import { Component, OnInit } from '@angular/core';
import {LocationService } from '../shared/location.service';
import { WeatherService } from '../shared/weather.service';
import {Location} from '../models/location.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  isLoading = true;
  loadingFailed = false;
  constructor(private locationService: LocationService, private weatherService: WeatherService) { }
  currentTemp: number = null;
  ngOnInit() {
    this.locationService.getLocation().subscribe(success => {
      this.weatherService.getCurrent(new Location(success.coords.latitude, success.coords.longitude)).subscribe(
        current => {
          console.log(current);
          this.currentTemp = current;
          this.isLoading = false;
        },
        error => {
          console.log(error);
          this.loadingFailed = true;
        }
      );
    },
    error => this.loadingFailed = true
    );

  }

}
