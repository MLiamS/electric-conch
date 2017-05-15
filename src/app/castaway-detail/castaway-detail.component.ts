import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable} from 'angularfire2/database';
import { Castaway } from '../castaway.model';
import { CastawayService } from '../castaway.service';

@Component({
  selector: 'app-castaway-detail',
  templateUrl: './castaway-detail.component.html',
  styleUrls: ['./castaway-detail.component.css'],
  providers: [CastawayService]
})

export class CastawayDetailComponent implements OnInit {
  castawayId: string;
  castawayToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private castawayService: CastawayService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.castawayId = urlParameters['id'];
   });
   this.castawayToDisplay = this.castawayService.getCastawayById(this.castawayId);
  }

}
