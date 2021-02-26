import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './template-parts/footer/footer.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HeaderComponent } from './template-parts/header/header.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HomeComponent } from './components/home/home.component';
import { ProcessoComponent } from './components/processo/processo.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SobreComponent } from './components/sobre/sobre.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ContatoComponent,
    FaqComponent,
    FooterComponent,
    GaleriaComponent,
    HeaderComponent,
    HistoriaComponent,
    HomeComponent,
    ServicosComponent,
    SobreComponent,
    ProcessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
