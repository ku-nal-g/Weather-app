import { WeatherDataService } from './../../services/weather-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-infoo',
  templateUrl: './weather-infoo.component.html',
  styleUrls: ['./weather-infoo.component.scss']
})
export class WeatherInfooComponent implements OnInit {

  showDetailsBtn: boolean = false;
  isShowCityDiv: boolean = true;
  weatherData: any = [];
  temperature!: number;
  feelsLikeTemperature!: number;
  humidity!: number;
  weatherDescription: string = '';
  cityName: string = '';
  countryCode: string = '';
  latitude!: number;
  longitude!: number;

  constructor(private weatherinfo: WeatherDataService) { }

  ngOnInit(): void {
  }

  getDetailsByName(data: any) {
    if (data.trim()) {
      this.showDetailsBtn = true;
      setTimeout(() => {
        this.weatherinfo.getDataByName(data).subscribe((res) => {
          this.weatherData = res;
          this.temperature = Math.round(this.weatherData.main.temp - 273.15);
          this.feelsLikeTemperature = Math.round(this.weatherData.main.feels_like - 273.15);
          this.humidity = this.weatherData.main.humidity;
          this.weatherDescription = this.weatherData.weather[0].description;
          this.cityName = this.weatherData.name;
          this.countryCode = this.weatherData.sys.country;
          console.log(this.weatherData);
          this.showDetailsBtn = !this.showDetailsBtn;
          this.isShowCityDiv = false;
        });
      }, 3000);
    }
    else {
      alert("Please enter valid city name.")
    }
  }
  getDetailsByCoords() {
    if (window.navigator.geolocation) {
      this.showDetailsBtn = true;
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.fetchData(this.latitude, this.longitude);
      });
    }
    else {
      alert("Your browser not support geolocation api");
    }
  }
  fetchData(latitude: number, longitude: number) {
    setTimeout(() => {
      this.weatherinfo.getDataByCoordinates(latitude, longitude).subscribe((res) => {
        this.weatherData = res;
        console.log(this.weatherData);
        this.temperature = Math.round(this.weatherData.main.temp);
        this.feelsLikeTemperature = Math.round(this.weatherData.main.feels_like);
        this.humidity = this.weatherData.main.humidity;
        this.weatherDescription = this.weatherData.weather[0].description;
        this.cityName = this.weatherData.name;
        this.countryCode = this.weatherData.sys.country;
        this.showDetailsBtn = !this.showDetailsBtn;
        this.isShowCityDiv = false;
      })
    }, 3000);
  }
  navigateToCity() {
    this.isShowCityDiv = true;
  }
}

