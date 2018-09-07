/**
 * @author Gonzalo A. Arenas Flores <gonzalo.arenas@globant.com>
 * @since 07-09-2018
 * @version 1.0.0
 * 
 * página para el despliegue de los detalles de una ciudad
 * 
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CitiesWeathersApi } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-weather-city',
  templateUrl: 'weather-city.html',
})
export class WeatherCityPage {

  public ready: boolean = false;
  public city: any = {
    abreviado : null,
    clima     : null,
    latlon    : null,
    nombre    : null
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public citiesWeathersApi: CitiesWeathersApi
  ) {

    let city = this.navParams.get('city');

    if (typeof(city) === 'undefined') {
      this.navCtrl.setRoot('WheaterPage');
    } else {
      this.city = city;
    }

  }

  ionViewDidLoad() {
    this.getWeatherFromCity();
  }

  /**
   * Rescate del estado climático de una ciudad
   */
  private getWeatherFromCity () {
    
    this.citiesWeathersApi.getCity(this.city.latLon)
      .subscribe( (weather: any) => {
        console.log(weather);
        this.city.clima = weather.detalle;
        this.ready = true;
      });
    
  }

}
