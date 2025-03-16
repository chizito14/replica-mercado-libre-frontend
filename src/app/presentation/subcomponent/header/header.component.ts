import { Component } from '@angular/core';
import { SeachBarComponent } from '../seach-bar/seach-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SeachBarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
