import { Component, OnInit } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() forecast: Forecast;
  constructor() { }

  ngOnInit() { }

}
