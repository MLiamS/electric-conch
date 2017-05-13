import { Injectable } from '@angular/core';
import { Castaway } from './castaway.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class CastawayService {
  castaways: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.castaways = database.list('castaways');
  }

  getCastaways(){
    return this.castaways;
  }
}