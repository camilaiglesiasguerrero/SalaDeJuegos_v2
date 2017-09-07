import { Router, ActivatedRoute, ParamMap } from '@angular/router';
export class Login {

    usuario: string;
    clave: string;
    tipoUser: string = 'null';

    constructor(private route: ActivatedRoute, private router: Router){
    }

    public Entrar():void{
    //console.log("entra");
        if(this.usuario=="admin" && this.clave=='admin')
        {
            this.tipoUser = "admin";
            this.router.navigate(['/menu']);
        }
        else
        {
            this.tipoUser = "invitado";
            this.router.navigate(['/agilidad']);
        }   
    }

}
