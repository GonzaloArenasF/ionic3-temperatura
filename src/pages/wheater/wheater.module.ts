/**
 * @author Gonzalo A. Arenas Flores <gonzalo.arenas@globant.com>
 * @since 05-09-2018
 * @version 1.0.0
 * 
 * Módulo para el despliegue ciudades y sus estado climáticos
 * 
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { WheaterPage } from './wheater';
import { CitiesWeathersApi } from '../../providers';

@NgModule({
  declarations: [
    WheaterPage
  ],
  imports: [
    IonicPageModule.forChild(WheaterPage),
    TranslateModule.forChild()
  ],
  exports: [
    WheaterPage
  ],
  providers: [
    CitiesWeathersApi
  ]
})
export class WheaterPageModule {}
