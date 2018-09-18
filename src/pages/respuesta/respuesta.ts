import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


@IonicPage({
  name: 'respuesta-page'
})
@Component({
  selector: 'page-respuesta',
  templateUrl: 'respuesta.html',
})
export class RespuestaPage {
  question: any = {};
  ix: number = 0;
  answer: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private alertCtrl: AlertController) {
    this.question = navParams.get('question');
    this.ix = navParams.get('ix');
    this.answer = navParams.get('answer');

    console.log(this.answer, this.ix, this.answer);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespuestaPage');
  }

  continue() {
    //check answer
    this.storage.get('correct').then(val => {
      if(this.question.respuesta == this.answer) {
        this.storage.set('correct', val + 1);
      }

      //Check if is the end 
      if(this.ix < 2) {
        this.storage.set('ix', this.ix + 1).then(() => {
          this.navCtrl.setRoot('page-pregunta');
        });
      } else {
        //Alert correct total
        this.storage.get('correct').then(val => {
          let alert = this.alertCtrl.create({
            title: 'Terminaste',
            subTitle: 'Acertaste en ' + val + ' preguntas',
            buttons: [{
              text: 'Aceptar',
              handler: () => {
                this.navCtrl.setRoot('page-home');
              }
            }]
          });
          alert.present();
        });
      }
    });
  }
}
