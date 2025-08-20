import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { DataService } from '../../services/data.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-mujer',
  standalone: false,
  templateUrl: './mujer.component.html',
  styleUrl: './mujer.component.css'
})
export class MujerComponent implements OnInit {

  productos:Producto[]=[];
  producto:Producto|undefined=undefined;


  constructor(
    private dataService: DataService,
   
    
   
  ) {}

    ngOnInit() {
         
             this.cargarProductos(); 
     
          
    };

    

cargarProductos() {
  this.dataService.getAllProductos().subscribe((data: any) => {
    if (data) {
      this.productos = data.filter((item: Producto) => item.persona === "Mujer");
      this.productos=this.productos.sort(() => Math.random() - 0.5);
    
    }
  });
}

filtrarCategoria(category:String){
  this.dataService.getAllProductos().subscribe((data: any) => {
    if (data) {
      if(category=="Todo"){
        this.productos=data.filter((item: Producto) => item.persona === "Mujer");
      }
      else{
      this.productos = data.filter((item: Producto) => item.persona === "Mujer" && item.categoria==category);
      this.productos=this.productos.sort(() => Math.random() - 0.5);
      }
    }
  });
}

enviarId(id:number){
  
  let idsProductos: string[] = JSON.parse(localStorage.getItem('productosGuardados') || '[]');
  idsProductos.push(id.toString());
    localStorage.setItem('productosGuardados', JSON.stringify(idsProductos));
     Swal.fire({title:"Producto agregado al carrito",
              confirmButtonText:"OK",
              customClass: {
                title: 'swal-title',
                confirmButton:'confirm-button'
              }
            });
            setTimeout(()=>{
              window.location.reload();
            },1000);
  }
}

