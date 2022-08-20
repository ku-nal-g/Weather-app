import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http:HttpClient) { }

  getDataByName(data:string):Observable<any>{
    return this.http.get("https://api.openweathermap.org/data/2.5/weather?q="+data+"&appid=12ea993ec4cc9104c621a0bb9e7fd228")
  }
  getDataByCoordinates(latitude:number,longitude:number){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=12ea993ec4cc9104c621a0bb9e7fd228`)
  }
}
