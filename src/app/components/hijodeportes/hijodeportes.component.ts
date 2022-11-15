import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijodeportes',
  templateUrl: './hijodeportes.component.html',
  styleUrls: ['./hijodeportes.component.css']
})
export class HijodeportesComponent implements OnInit {

  @Input() sport !: string;


  @Output()seleccionarDeporteHijo: EventEmitter<any> = new EventEmitter();

  //Vamos a recibir un metodo del padre mediante props
  seleccionarFavoritoHijo():void{
    //Cuando hagan click en el hijo llamamos al padre
    this.seleccionarDeporteHijo.emit(this.sport);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
