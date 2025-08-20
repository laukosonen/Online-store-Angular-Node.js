import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   categoriaSeleccionada: string = 'Mujer'; 
   mostrarBolsita:boolean=false;

  personaSeleccionada(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

    mostrarBolsa():boolean{
    console.log("entrado a mostrar cARRO");
    this.mostrarBolsita=!this.mostrarBolsita; 
    return this.mostrarBolsita;

  }

}
