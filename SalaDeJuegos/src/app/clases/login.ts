export class Login {

    usuario: string;
    clave: string;
    tipoUser: string = 'null';

    constructor(){

    }

    public Entrar():void{
    //console.log("entra");
        if(this.usuario=="Juan" && this.clave=='123')
        {    
            this.tipoUser = "admin";
            
        }
        else
            this.tipoUser = "invitado no logueado";
    }
}
