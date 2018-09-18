import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PreguntasDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PreguntasDataProvider Provider');
  }

  get() {
    return this.http.get('../assets/data/preguntas.json');
  }

}
