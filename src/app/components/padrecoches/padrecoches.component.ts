import { Component, OnInit } from '@angular/core';
import { Coche } from '../coche';

@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrls: ['./padrecoches.component.css']
})
export class PadrecochesComponent implements OnInit {
  public coches: Array<Coche>;


  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 20, false),
      new Coche("Volvo", "Volv", 0, 20, false),
      new Coche("Lamborghini", "Huracan", 0, 25, false)
    ]
  }

  ngOnInit(): void {
  }

}
