import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfooComponent } from './weather-infoo.component';

describe('WeatherInfooComponent', () => {
  let component: WeatherInfooComponent;
  let fixture: ComponentFixture<WeatherInfooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherInfooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
