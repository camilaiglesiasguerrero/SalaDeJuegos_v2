export class Agilidad {
    nombre : string;
    numero1: number;
    operador: string;
    numero2: number;
    resultado: number;
    Gano: boolean;
    Jugador: string;

    constructor(elJuego: string) { 
        this.nombre = elJuego;
        }
      
        public GenerarCalculo():void{
          this.numero1 = Math.floor(Math.random()*100+1);
          this.numero2 = Math.floor(Math.random()*100+1);
          let operadorN = Math.floor((Math.random()*4)+1);
          switch (operadorN) {
              case 1:
                this.operador = '+';
                this.resultado = this.numero1 + this.numero2;
                break;
              case 2:
                this.operador = '-';
                this.resultado = this.numero1 - this.numero2;
                break;
              case 3:
                this.operador = '*';
                this.resultado = this.numero1 * this.numero2;
                break;
              case 4:
                this.operador = '/';
                this.resultado = this.numero1 / this.numero2;
                break;
          }
        }
}
