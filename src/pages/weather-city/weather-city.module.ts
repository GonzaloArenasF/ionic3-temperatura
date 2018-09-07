/**
 * @author Gonzalo A. Arenas Flores <gonzalo.arenas@globant.com>
 * @since 07-09-2018
 * @version 1.0.0
 * 
 * Módulo para el despliegue de una ciudad y sus estado climáticos
 * 
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { WeatherCityPage } from './weather-city';
import { CitiesWeathersApi } from '../../providers';

@NgModule({
  declarations: [
    WeatherCityPage,
  ],
  imports: [
    IonicPageModule.forChild(WeatherCityPage),
    TranslateModule.forChild()
  ],
  exports: [
    WeatherCityPage
  ],
  providers: [
    CitiesWeathersApi
  ],
})
export class WeatherCityPageModule {}
