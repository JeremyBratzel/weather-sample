import { Component, OnInit } from '@angular/core';
import {LocationService } from '../shared/location.service';
import { WeatherService } from '../shared/weather.service';
import {Location} from '../models/location.model';
import {Forecast} from '../models/forecast.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  isLoading = true;
  loadingFailed = false;
  forecasts: Forecast[] = [];
  constructor(private locationService: LocationService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.locationService.getLocation().subscribe(success => {
      this.weatherService.getForecast(new Location(success.coords.latitude, success.coords.longitude)).subscribe(
        forecast => {
          this.forecasts = forecast.map(pair => new Forecast(pair.date, pair.temp));
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
