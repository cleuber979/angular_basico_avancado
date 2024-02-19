import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
   template:`<!--<router-outlet />-->
   <h1>Curso de Angular</h1>
   <h2>Componemts</h2>
   {{title}}
   `
   ,

})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
//<router-outlet />
