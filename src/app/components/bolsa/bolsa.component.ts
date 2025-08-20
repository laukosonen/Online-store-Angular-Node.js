import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bolsa',
  standalone: false,
  templateUrl: './bolsa.component.html',
  styleUrl: './bolsa.component.css'
})
export class BolsaComponent {
  producto: Producto | undefined=undefined
 productosRecuperados:Producto[]=[];
 productosMostrados:Producto[]=[];
 productoDuplicado:boolean=false;
 precioTotal:number=0
 idEnviado:number=0;


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

    ngOnInit(){
    this.recargarProductos();
   
    }

recargarProductos() {
  this.precioTotal = 0;
  this.productosRecuperados = [];

  let idsProductosString: string[] = JSON.parse(localStorage.getItem('productosGuardados') || '[]');
  let idsProductos: number[] = idsProductosString.map(Number);
  console.log(idsProductos);

  this.dataService.getAllProductos().subscribe((data: any) => {
    for (const element of idsProductos) {
      let producto = data.find((item: Producto) => item.id === element);
      if (producto) {
        this.productosRecuperados.push(producto);
      }
    }
  
    this.calcularPrecioTotal(this.productosRecuperados);
    this.productosMostrar();
  });
}


calcularPrecioTotal(productosRecuperados:Producto[]){
  console.log("Entrando a calcular precio total");
  

  for (const element of productosRecuperados) {
    console.log("Es el elemento: "+element.nombre);
    this.precioTotal+=Number(element.precio);
    
  }
}



productosMostrar(){
  let idsProductosString: string[] = JSON.parse(localStorage.getItem('productosGuardados') || '[]');
  let idsProductos: number[] = idsProductosString.map(Number);
  for (let i = 0; i < idsProductos.length; i++) {
    const count = idsProductos.filter(x => x === idsProductos[i] ).length;
    console.log("El producto con id"+idsProductos[i]+" está "+count+" veces");
    
    if(count>1){
      console.log("Está más de una vez");
      
      this.dataService.getAllProductos().subscribe((data: any) => {
      
        let producto=data.find((item: Producto) => item.id === idsProductos[i]);
        producto.unidades=count;
  
     if (!this.productosMostrados.some(p => p.id === producto.id)){
         console.log("Se v a registrar el producto:"+producto.id);
        this.productosMostrados.push(producto)};
      })
    }
    else{
      console.log("Está solo una vez");
      
       this.dataService.getAllProductos().subscribe((data: any) => {
        let producto=data.find((item: Producto) => item.id === idsProductos[i]);
        producto.unidades=count;
        console.log("Se v a registrar el producto:"+producto.id);
        this.productosMostrados.push(producto);
   
      })
    }
  }}

    eliminarProductoBolsa(id:number){
      let idsProductosString: string[] = JSON.parse(localStorage.getItem('productosGuardados') || '[]');
      idsProductosString=idsProductosString.filter((producto)=>producto!==id.toString())
      localStorage.setItem('productosGuardados', JSON.stringify(idsProductosString));
      this.productosMostrados=this.productosMostrados.filter((item:Producto)=>item.id!=id)
      this.precioTotal=0;
      this.calcularPrecioTotal(this.productosMostrados);
      if(idsProductosString.length==0){
        localStorage.removeItem('productosGuardados');
        this.precioTotal=0;
      }
    }

    compraRealizada(){
                 Swal.fire({
            title: "¡Compra realizada con éxito!",
            icon: "success",
            draggable: true,
            confirmButtonText:"OK",
            customClass: {
            confirmButton:'confirm-button'
            }
           });
    }





}



