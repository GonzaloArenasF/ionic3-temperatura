import { NgModule } from '@angular/core';
import { NumberFormatPipe } from './number-format/number-format';

@NgModule({
	declarations: [
		NumberFormatPipe
	],
	imports: [],
	exports: [
		NumberFormatPipe
	]
})
export class PipesModule {}
