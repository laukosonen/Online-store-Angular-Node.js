import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MujerComponent } from './components/mujer/mujer.component';
import { HttpClientModule } from '@angular/common/http';
import { HombreComponent } from './components/hombre/hombre.component';
import { NinoComponent } from './components/nino/nino.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MujerComponent,
    HombreComponent,
    NinoComponent,
    BolsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
