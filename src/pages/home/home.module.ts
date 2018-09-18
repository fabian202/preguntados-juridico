import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PreguntasDataProvider } from '../../providers/preguntas-data';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  providers: [
      PreguntasDataProvider
  ]
})
export class PreguntaPageModule {}
