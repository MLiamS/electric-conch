import { Pipe, PipeTransform } from '@angular/core';
import { Castaway } from './castaway.model';

@Pipe({
  name: 'ally',
  pure: false
})
export class AllyPipe implements PipeTransform {

  transform(input: Castaway[], desiredAlly) {
    var output: Castaway[] = [];
    if (desiredAlly === "Ralph")  {
      for (var i = 0; i < input.length; i++) {
        if (input[i].alliance === "Ralph") {
         output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAlly === "Jack")  {
      for (var i = 0; i < input.length; i++) {
        if (input[i].alliance === "Jack") {
         output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
