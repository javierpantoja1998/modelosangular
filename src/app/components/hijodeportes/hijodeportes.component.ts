import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijodeportes',
  templateUrl: './hijodeportes.component.html',
  styleUrls: ['./hijodeportes.component.css']
})
export class HijodeportesComponent implements OnInit {

  @Input() sport !: string;

  seleccionarFavorito():void{

  }

  constructor() { }

  ngOnInit(): void {
  }

}
