
/**
 * @author Gonzalo A. Arenas Flores <gonzalo.arenas@globant.com>
 * @since 05-09-2018
 * @version 1.0.0
 * 
 * página para el despliegue ciudades y sus estado climáticos
 * 
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Apis
import { CitiesWeathersApi } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-wheater',
  templateUrl: 'wheater.html'
})
export class WheaterPage {

  /**
   * Ciudades y sus estados climáticos
   */
  public cities: any[];
  public ready: boolean = false;

  /**
   * Constructor
   */
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public citiesWeathersApi: CitiesWeathersApi
  ) { }

  /**
   * Al momento de cargar la vista
   */
  ngOnInit() {
    this.getCitesWeather();
  }

  /**
   * Recupera las ciudades desde servicios con sus estados climaticos
   */
  private getCitesWeather () {

    this.citiesWeathersApi.get()
    .subscribe( (weather: any) => {
      this.cities = weather.detalle;
      this.ready = true;
    });

  }

  /**
   * Despliega la página con más información de la ciudad
   * @param city : Datos de la ciudad obtenidos desde servicio
   */
  private getInfoCity (city: any) {
    this.navCtrl.push('WeatherCityPage', { city });
  }

}