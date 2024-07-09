import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { NavComponent } from './components/layouts/shared/nav/nav.component';
import { FooterComponent } from './components/layouts/shared/footer/footer.component';
import { RegistrationService } from './services/registration.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink, NavComponent, FooterComponent, HttpClientModule],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-core';
}
