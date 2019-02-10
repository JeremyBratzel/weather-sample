import { Component, OnInit } from '@angular/core';
import {LocationService } from './shared/location.service';
import {Location} from './models/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeremy\'s Weather App';
  location: Location = null;
  locationFailed = false;

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocation().subscribe(success => {
      this.location = new Location(success.coords.latitude, success.coords.longitude);
      this.locationFailed = false;
    },
    error => this.locationFailed = true
    );
  }
}
