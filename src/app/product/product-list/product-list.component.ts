import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string="";
  mostrarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:IProductos[]=[
    {
      "ProductoId":1,
      "Modelo":"Versa",
      "Descripcion": "4 Puertas",
      "Year":"marzo 2 2020",
      "Precio":2000,
      "Color":"Rojo",
      "Marca":"NISSAN",
      "ImagenUrl": "https://th.bing.com/th/id/R.b60ff7bb9e3b1cfbaa7b2498c8558431?rik=YJ4JuVqbsY7M%2bQ&pid=ImgRaw&r=0"
    },
    {
      "ProductoId":2,
      "Modelo":"A5",
      "Descripcion": "2 Puertas",
      "Year":"marzo 2 2024",
      "Precio":4000,
      "Color":"Azul",
      "Marca":"AUDI",
      "ImagenUrl": "https://www.gannett-cdn.com/presto/2018/09/04/PDTN/5a9a8046-21df-449e-b5f6-039d76cfaa5e-_29R0298.jpg?crop=5183,2915,x1,y411&width=3200&height=1680&fit=bounds"
    },
    {
      "ProductoId":3,
      "Modelo":"Aveo",
      "Descripcion": "4 Puertas",
      "Year":"septiempre 19 2025",
      "Precio":4500,
      "Color":"perla azulado",
      "Marca":"CHEVROLET",
      "ImagenUrl": "https://th.bing.com/th/id/OIP.DxV8yj1_8k9QNCkJrhk99gHaE9?rs=1&pid=ImgDetMain"
    },
  ]
}
