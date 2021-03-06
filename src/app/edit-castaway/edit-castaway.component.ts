import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CastawayService} from '../castaway.service';
//
@Component({
  selector: 'app-edit-castaway',
  templateUrl: './edit-castaway.component.html',
  styleUrls: ['./edit-castaway.component.css'],
  providers: [CastawayService]

})
export class EditCastawayComponent implements OnInit {
  @Input() selectedCastaway;

  constructor(private castawayService: CastawayService) { }

  ngOnInit() {
  }

  beginUpdatingCastaway(castawayToUpdate){
    this.castawayService.updateCastaway(castawayToUpdate);
  }

  beginDeletingCastaway(castawayToDelete){
    if(confirm("So they died yeah?")){
      this.castawayService.deleteCastaway(castawayToDelete);
    }
  }
}
