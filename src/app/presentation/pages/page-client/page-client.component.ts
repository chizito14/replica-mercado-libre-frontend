import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../subcomponent/header/header.component';
import { CardProductsComponent } from '../../subcomponent/card-products/card-products.component';

@Component({
  selector: 'app-page-client',
  standalone: true,
  imports: [
    HeaderComponent,
    CardProductsComponent
  ],
  templateUrl: './page-client.component.html',
  styleUrl: './page-client.component.scss'
})
export class PageClientComponent implements OnInit {
router = inject(Router)

  lista = [
    {
      titulo: " Myomega - Aceite De Pescado - Myogenix - 90 Cápsulas Blandas ",
      precio: '37',
      decimales: ',99',
      envio: 'Envio gratis',
      img: './assets/img/img-product1.webp'
  },
  {
    titulo: " Creatina Muscletech Platinum 100% Creatine 400g ",
    precio: '43',
    decimales: ',99',
    envio: 'Envio gratis',
    img: './assets/img/img-produc2.webp'
},
{
  titulo: " Creatina Allmax Nutrition 400g 80servicios Creatine ",
  precio: '54',
  decimales: ',99',
  envio: 'Envio gratis',
  img: './assets/img/img-product3.webp'
},
{
  titulo: " Creatina Monohidratada Creapure 410 Gr 82 Gold S ",
  precio: '41',
  decimales: ',99',
  envio: 'Envio gratis',
  img: './assets/img/img-product4.webp'
},
{
  titulo: " Creatina Monohidratada Creapure 410 Gr 82 Gold S ",
  precio: '41',
  decimales: ',99',
  envio: 'Envio gratis',
  img: './assets/img/img-product4.webp'
},
{
  titulo: " Creatina Monohidratada Creapure 410 Gr 82 Gold S ",
  precio: '41',
  decimales: ',99',
  envio: 'Envio gratis',
  img: './assets/img/img-product4.webp'
},
{
  titulo: " Creatina Monohidratada Creapure 410 Gr 82 Gold S ",
  precio: '41',
  decimales: ',99',
  envio: 'Envio gratis',
  img: './assets/img/img-product4.webp'
},
{
  titulo: " Creatina Monohidratada Creapure 410 Gr 82 Gold S ",
  precio: '41',
  decimales: ',99',
  envio: 'Envio gratis',
  img: './assets/img/img-product4.webp'
},
{
  titulo: " Creatina Monohidratada Creapure 410 Gr 82 Gold S ",
  precio: '41',
  decimales: ',99',
  envio: 'Envio gratis',
  img: './assets/img/img-product4.webp'
},
]

  constructor( private rt: ActivatedRoute ){ }

  ngOnInit(): void {
    this.rt.params.subscribe( e => {
      console.log(e)
    })
  }
}
