import { Component, OnInit, Input } from '@angular/core';
import { Coche } from '../coche';
@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrls: ['./hijocoche.component.css']
})
export class HijococheComponent implements OnInit {

  @Input() car !: Coche;

  public mensaje!:string


  constructor() {
      //Cuando recibimos inputs no podemos usarlos en el constructor

   }
   ngOnInit(): void {
    this.comprobarEstado();
  }

   comprobarEstado(): boolean{
    if(this.car.estado === false){
      this.mensaje = "El coche esta apagado";
      this.car.velocidad = 0;
      return false;
    }else{
      this.mensaje = "El coche esta encendido";
      return true;
    }
   }

   encenderCoche(): void{
    // !this.car.estado -> signigica que tiene el valor contrario
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
   }

   acelerarCoche(){
    if(this.comprobarEstado() === false ){
      alert("Donde vas??? El coche esta apagado XD");
    }else{
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
    }
   }



}
