import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NewComponent],
  template:`
  <!--<router-outlet />-->
  <h1>Curso de Angula</h1>
  <app-new-component/>
  {{title}}
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
//<router-outlet />
