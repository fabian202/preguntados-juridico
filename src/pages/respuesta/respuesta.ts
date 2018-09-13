import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RespuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'respuesta-page'
})
@Component({
  selector: 'page-respuesta',
  templateUrl: 'respuesta.html',
})
export class RespuestaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespuestaPage');
  }

  continue() {
    this.navCtrl.setRoot('page-pregunta');
  }
}
