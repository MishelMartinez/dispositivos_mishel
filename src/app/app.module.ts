import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ImpresionesComponent } from './components/impresiones/impresiones.component';
import  {FooterComponent} from './components/shared/footer/footer.component';

import {ImpresionesService} from "./services/impresiones.service";

import {APP_ROUTING} from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { ImpresionComponent } from './components/impresion/impresion.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImpresionesComponent,
    FooterComponent,
    AboutComponent,
    ImpresionComponent,
    ResultadosComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING

  ],
  providers: [

    ImpresionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
