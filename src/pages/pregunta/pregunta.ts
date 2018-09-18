import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage({
  name: 'page-pregunta'
})
@Component({
  selector: 'page-pregunta',
  templateUrl: 'pregunta.html',
})
export class PreguntaPage {
  question: any = {};
  ix: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntaPage');
    this.storage.get('ix').then(ix => {
      console.log(ix);
      this.ix = ix;
      this.storage.get('q').then(q => {
        console.log(q);
        
        this.question = q.preguntas[ix];
        console.log(this.question);
      });
    })
  }

  respuesta(res) {
    console.log('respond', res);
    this.navCtrl.setRoot('respuesta-page', { question: this.question, answer: res, ix: this.ix });
  }
}
