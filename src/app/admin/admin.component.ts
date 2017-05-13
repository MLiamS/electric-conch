import { Component, OnInit } from '@angular/core';
import { Castaway } from '../castaway.model';
import { CastawayService } from '../castaway.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CastawayService]
})
export class AdminComponent implements OnInit {

  constructor(private castawayService: CastawayService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, alliance: string, eyeColor: string, hairColor: string, heightFeet: number, heightInches: number, weight: number, violent: boolean, intelligence: number) {
    var newCastaway: Castaway = new Castaway(name, Number(age), alliance, eyeColor, hairColor, Number(heightFeet), Number(heightInches), Number(weight), Boolean(Number(violent)), Number(intelligence));
    this.castawayService.addCastaway(newCastaway);
    console.log(newCastaway)
  }
}
