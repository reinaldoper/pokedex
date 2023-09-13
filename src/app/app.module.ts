import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarregandoComponent } from './carregando/carregando.component';
import { RenderizaComponent } from './renderiza/renderiza.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CarregandoComponent,
    AppComponent,
    RenderizaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
