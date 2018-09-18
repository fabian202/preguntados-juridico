import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController) {
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
    });
  }

  respuesta(res) {
    console.log('respond', res);
    this.navCtrl.setRoot('respuesta-page', { question: this.question, answer: res, ix: this.ix });
  }

  next() {
    this.storage.get('ix').then(ix => {
      this.ix = ix + 1;
      this.storage.get('q').then(q => {
        this.question = q.preguntas[this.ix];
        this.storage.set('ix', this.ix);
      });
    });
  }

  resign() {
    let alert = this.alertCtrl.create({
      title: 'Rendirse',
      message: '¿Está seguro que no desde continuar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.setRoot('page-home');
          }
        }
      ]
    });
    alert.present();
  }
}
