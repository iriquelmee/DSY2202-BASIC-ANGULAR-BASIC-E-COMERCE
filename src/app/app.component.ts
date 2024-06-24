import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { NavComponent } from './components/layouts/shared/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-core';
}
