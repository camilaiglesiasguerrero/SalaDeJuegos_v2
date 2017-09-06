import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule, Router} from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './Componentes/agilidad-aritmetica/agilidad-aritmetica.component';

let miRuteo = [{path:'adivina',component:AdivinaElNumeroComponent},
{path:'agilidad',component:AgilidadAritmeticaComponent}];

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo),
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
