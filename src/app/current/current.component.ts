import { Component, OnInit } from '@angular/core';
import {LocationService } from '../shared/location.service';
import { WeatherService } from '../shared/weather.service';
import {Location} from '../models/location.model';
import {Forecast} from '../models/forecast.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  isLoading = true;
  loadingFailed = false;
  constructor(private locationService: LocationService, private weatherService: WeatherService) { }
  forecast: Forecast = null;
  ngOnInit() {

    this.locationService.getLocation().subscribe(success => {
      this.weatherService.getCurrent(new Location(success.coords.latitude, success.coords.longitude)).subscribe(
        current => {
          this.forecast = new Forecast(current.date, current.temp, current.icon);
          this.isLoading = false;
        },
        error => {
          this.loadingFailed = true;
        }
      );
    },
    error => this.loadingFailed = true
    );
  }
}
