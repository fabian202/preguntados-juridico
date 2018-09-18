import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PreguntasDataProvider } from '../../providers/preguntas-data';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'page-home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public preguntasProvider: PreguntasDataProvider, private storage: Storage) {
    this.storage.set('ix', 0);
    this.storage.set('correct', 0);
  }


  start(){
    this.preguntasProvider.get().subscribe(res => {
      this.storage.set('q', res).then(() => {
        this.navCtrl.setRoot('page-pregunta');
      });
      // console.log(res);
      
    });
    //
  }

}
