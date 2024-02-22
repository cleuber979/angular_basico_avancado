import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NewComponent],
 styles:[
  `
    h1{
      color:yellow;
    }
  `,
 ],

  template:`
  <!--<router-outlet />-->
  <h1>Curso de Angula</h1>
  <div class="thema-red">
  <app-new-component/></div>
  {{title}}
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
//<router-outlet />
