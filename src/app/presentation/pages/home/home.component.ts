import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SeachBarComponent } from '../../subcomponent/seach-bar/seach-bar.component';
import { MedCardComponent } from '../../subcomponent/med-card/med-card.component';
import { MedCardGenComponent } from '../../subcomponent/med-card-gen/med-card-gen.component';
import { CardGrandeComponent } from '../../subcomponent/card-grande/card-grande.component';
import { HeaderComponent } from '../../subcomponent/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MedCardGenComponent,
    RouterOutlet,
    SeachBarComponent,
    MedCardComponent,
    MedCardGenComponent,
    CardGrandeComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
router=inject(Router)

 linkDeportes(){
  this.router.navigateByUrl('C-Deportes-y-mas')
}

lista = [
  {
    titulo: 'Envios en menos de 24 horas',
    contenido: 'entrena y supera tus limites',
    Bton:'Ver mas',
    path: 'product/C-Deportes-y-mas',
    img: './assets/img/card-grande.webp'
  },
  {
  titulo: 'Envios en menos de 24 horas',
  contenido: ' Remodela y renueva tus espacios ',
  Bton:'Ver mas',
  path: 'product/mondogo',
  img: './assets/img/card2.webp'

}, {
  titulo: 'Envios en menos de 24 horas',
  contenido: ' Lo mejor en Remo ',
  Bton:'Ver mas',
  path: 'product/mondogo',
  img: './assets/img/card3.webp'

}, {
  titulo: 'Envios en menos de 24 horas',
  contenido: ' Cuida de tu salud, sin salir de casa ',
  Bton:'Ver mas',
  path: 'product/mondogo',
  img: './assets/img/card4.webp'

}]
lista2 = [
  {
    titulo:'Ingresa tu cuenta',
    descripcion:'Disfruta de ofertas y compra sin limites',
    boton:'Ingresar a tu cuenta'
  },
  {
    titulo:'Tiendas oficiales',
    descripcion:'Encuentra tus marcas preferidas',
    boton:'Mostrar tiendas'
  },
  {
    titulo:'Zapatos',
    descripcion:'Encuentra el estilo que se adapta a ti',
    boton:'Buscar zapatos'
  },
  {
    titulo:'Celulares',
    descripcion:'Descubre celulares en tendencia',
    boton:'Ir a celulares'
  },
  {
    titulo:'Nuestras categorias',
    descripcion:'Encuentra celulares,ropa y mas ',
    boton:'Ir a categorias'
  },
]
 
}
