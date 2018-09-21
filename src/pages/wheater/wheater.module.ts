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

// Pages
import { WheaterPage } from './wheater';

// Api
import { CitiesWeathersApi } from '../../providers';

// Pipes
import { PipesModule } from './../../pipes/pipes.module';
import { NumberFormatPipe } from '../../pipes/number-format/number-format';

@NgModule({
  declarations: [
    WheaterPage,
    NumberFormatPipe
  ],
  imports: [
    IonicPageModule.forChild(WheaterPage),
    TranslateModule.forChild(),
    PipesModule
  ],
  exports: [
    WheaterPage
  ],
  providers: [
    CitiesWeathersApi
  ]
})
export class WheaterPageModule {}
