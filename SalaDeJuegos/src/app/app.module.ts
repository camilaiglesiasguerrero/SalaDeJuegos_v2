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
import { EstadoDeResultadoComponent } from './Componentes/estado-de-resultado/estado-de-resultado.component';

let miRuteo = [{path:'adivina',component:AdivinaElNumeroComponent},
{path:'agilidad',component:AgilidadAritmeticaComponent},
{path:'login',component:LoginComponent},
{path:'menu',component:MenuComponent},
{path:'',component:LoginComponent}];

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    LoginComponent,
    MenuComponent,
    EstadoDeResultadoComponent
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
