import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-edit-castaway',
  templateUrl: './edit-castaway.component.html',
  styleUrls: ['./edit-castaway.component.css']
})
export class EditCastawayComponent implements OnInit {
  @Input() selectedCastaway;

  constructor() { }

  ngOnInit() {
  }

}
