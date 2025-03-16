import { Component, inject, input, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-grande',
  standalone: true,
  imports: [],
  templateUrl: './card-grande.component.html',
  styleUrl: './card-grande.component.scss'
})
export class CardGrandeComponent {
  router= inject(Router)
  @Input() Titulo = 'Envio gratis en 48 horas'
  @Input() entrena = '!Entrena y supera tus limites !'
  @Input() boton = 'Ver mas'
  @Input() img = './assets/img/card-grande.webp'

  @Input() url = 'home'  

  goWhere(){
    this.router.navigateByUrl(this.url)
  }


}

