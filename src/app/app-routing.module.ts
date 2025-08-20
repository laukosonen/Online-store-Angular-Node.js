import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MujerComponent } from './components/mujer/mujer.component';
import { HombreComponent } from './components/hombre/hombre.component';
import { NinoComponent } from './components/nino/nino.component';
import { BolsaComponent } from './components/bolsa/bolsa.component';

const routes: Routes = [
  {
    path:"",
    component:MujerComponent
  },
  {
    path:"mujer",
    component:MujerComponent
  },
    {
    path:"hombre",
    component:HombreComponent
  },
  {
    path:"nino",
    component:NinoComponent
  },
  {
    path:"bolsa",
    component:BolsaComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
