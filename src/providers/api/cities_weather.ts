/**
 * @author Gonzalo A. Arenas Flores <gonzalo.arenas@globant.com>
 * @since 05-09-2018
 * @version 1.0.0
 * 
 * Servicio para la obtención del estado climático de ciudades
 * mediante sus coordenadas de latitud y longitud
 * 
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CitiesWeathersApi {

  /**
   * URL del servicio DarkSky
   */
  private url: any = {
    allCities : 'http://localhost:3000/temperatura',
    city      : 'http://localhost:3000/city-weather'
  };

  /**
   * Constructor
   */
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Promesa para la obtención del estado climático de ciudades
   */
  get () {
    return this.http.get(this.url.allCities);
  }

  /**
   * Datos de una ciudad en particular
   */
  getCity (coordenadas) {
    return this.http.get(this.url.city + '/' + coordenadas);
  }

}