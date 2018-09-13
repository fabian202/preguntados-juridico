import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PreguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'page-pregunta'
})
@Component({
  selector: 'page-pregunta',
  templateUrl: 'pregunta.html',
})
export class PreguntaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreguntaPage');
  }

  respuesta() {
    this.navCtrl.setRoot('respuesta-page');
  }
}
