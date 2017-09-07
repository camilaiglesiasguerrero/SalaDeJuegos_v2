import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Router} from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './Componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { LoginComponent } from './Componentes/login/login.component';
import { AppServiceService } from './app-service.service';
import { MenuComponent } from './Componentes/menu/menu.component';
import { EstadoDeResultadosComponent } from './Componentes/estado-de-resultados/estado-de-resultados.component';
import { MenuDeListadoComponent } from './Componentes/menu-de-listado/menu-de-listado.component';

let miRuteo = [{path:'adivina',component:AdivinaElNumeroComponent},
{path:'agilidad',component:AgilidadAritmeticaComponent},
{path:'login',component:LoginComponent},
{path:'menu',component:MenuComponent},
{path:'',component:LoginComponent},
{path:'eerr',component:EstadoDeResultadosComponent},
{path:'menuListado',component:MenuDeListadoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    LoginComponent,
    MenuComponent,
    EstadoDeResultadosComponent,
    MenuDeListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo),
    HttpModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
