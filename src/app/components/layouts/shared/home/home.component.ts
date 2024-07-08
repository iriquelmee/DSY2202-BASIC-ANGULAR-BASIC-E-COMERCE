import { Component } from '@angular/core';
import { CartItem } from '../../../../models/cart-item.model';
import { productos } from '../../../../data';
import { CartService } from '../../../../services/cart.service';
import { FaqComponent } from '../faq/faq.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FaqComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title: string = 'Productos Disponibles';
  products = productos; // Assuming productos is your array of products
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  addToCart(product: any){
    this.cartService.addItem(product);
    alert('¡Producto añadido al carrito con éxito!');
  }

}
