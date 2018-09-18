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
      const shuffled = res.preguntas.sort(() => .5 - Math.random());// shuffle  
      let selected =shuffled.slice(0,10) ;
      console.log(shuffled);
      console.log(selected);
      
      this.storage.set('q', selected).then(() => {
        this.navCtrl.setRoot('page-pregunta');
      });
      // console.log(res);
      
    });
    //
  }

}
