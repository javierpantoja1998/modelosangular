import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrls: ['./padredeportes.component.css']
})
export class PadredeportesComponent implements OnInit {

  public deportes: Array<string>;
  public mensaje!: string
  //Cuando hagamos emit, leera este metodo
  seleccionarDeportePadre(event:string): void{
    console.log(event)
    this.mensaje = "Deporte favorito: " + event;
  }
  constructor() {
    this.deportes =
    [ "Golf", "Futbol", "Padel", "Tennis", "Basketball"];

  }

  ngOnInit(): void {
  }

}
