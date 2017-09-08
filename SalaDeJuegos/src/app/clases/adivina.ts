//import { Juego } from './Juego';

export class Adivina{ //extends Juego{
    nombre : string;
    numeroSecreto: number;
    Gano: boolean;
    Jugador: string;
    numeroIngresado: number;
    tengoNumSec: boolean = false;
    contador: number;
    

constructor(elJuego: string) { 
  this.nombre = elJuego;
  }

public GenerarNuevo():void{
  this.numeroSecreto = Math.floor(Math.random()*100+1);
  console.info("Numero: ", this.numeroSecreto);
  this.tengoNumSec = true;
  this.contador = 0;
  }

  public Verificar():boolean{
   this.contador+=1;
    //   console.info("Numero: ", numero);
      if(this.numeroIngresado==this.numeroSecreto)
        this.Gano= true;
      else
        this.Gano = false;

      return this.Gano;
  }

}
