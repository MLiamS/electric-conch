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
  addCastaway(newCastaway: Castaway) {
    this.castaways.push(newCastaway);
  }
  getCastawayById(castawayId: string){
    return this.database.object('castaways/' + castawayId);
  }
  updateCastaway(localUpdatedCastaway){
    var castawayEntryInFirebase = this.getCastawayById(localUpdatedCastaway.$key);
    castawayEntryInFirebase.update({alliance: localUpdatedCastaway.alliance});
  }
  deleteCastaway(localCastawayToDelete){
   var castawayEntryInFirebase = this.getCastawayById(localCastawayToDelete.$key);
   castawayEntryInFirebase.remove();
 }
}
