import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent implements OnInit {

  public deportes: Array<string>;

  constructor() {
    this.deportes =
    [ "Golf", "Futbol", "Padel", "Tennis", "Basketball"];

  }

  ngOnInit(): void {
  }

}
