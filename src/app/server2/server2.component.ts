 import { Component} from '@angular/core';
 import { Dish } from '../../shared/dish.model';
 import {printLine} from "tslint/lib/verify/lines";

@Component({
  selector: 'app-server2',
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']})

export class Server2Component {
  noIngradients = true;
  isDish = false;
  ingradientName: string;
  checked = false;

  result = "Not found";

  dishes: Dish[] = [new Dish('A,B,C', 'ABC'),
                    new Dish('D,E,F', 'DEF'),
                    new Dish('G,H,I', 'GHI'),];


  check() {
    for (var dish of this.dishes) {
      if (dish.ingredient === this.ingradientName) {
        this.isDish = true;
        this.result = dish.dishName
        this.checked = true;
        break;
      }
    }
    this.checked = true;
   }


  clear(){
    this.ingradientName = "";
    this.noIngradients = true;
    this.isDish = false;
    this.result = "Not found"
    this.checked = false;
  }

  n
}
