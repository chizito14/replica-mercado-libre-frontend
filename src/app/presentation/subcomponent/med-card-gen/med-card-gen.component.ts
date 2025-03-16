import { Component, Input } from '@angular/core';

@Component({
  selector: 'gen-card',
  standalone: true,
  imports: [],
  templateUrl: './med-card-gen.component.html',
  styleUrl: './med-card-gen.component.scss'
})
export class MedCardGenComponent {
  @Input() titulo = 'Tiendas Oficiales'
  @Input() descripcion = 'Encuentra tus marcas preferidas'
  @Input() boton = 'Mostrar tiendas'
}
