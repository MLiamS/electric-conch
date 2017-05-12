import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Castaway } from '../castaway.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { CastawayService } from '../castaway.service';


@Component({
  selector: 'app-castaways',
  templateUrl: './castaways.component.html',
  styleUrls: ['./castaways.component.css'],
  providers: [CastawayService]
})
export class CastawaysComponent implements OnInit {
  castaways: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private castawayService: CastawayService){}

  ngOnInit(){
    this.castaways = this.castawayService.getCastaways();
  }

}
