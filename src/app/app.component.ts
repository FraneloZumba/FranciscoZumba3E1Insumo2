import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './Components/sidemenu/sidemenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SidemenuComponent],
  template: `
    <app-sidemenu></app-sidemenu>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Insumo 2';
}