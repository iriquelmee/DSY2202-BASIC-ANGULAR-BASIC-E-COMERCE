import { Component } from '@angular/core';
import { CartItem } from '../../../../models/cart-item.model';
import { productos } from '../../../../data';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title: string = 'Home';
  products = productos; // Assuming productos is your array of products
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  addToCart(product: any){
    this.cartService.addItem(product);
    alert('¡Producto añadido al carrito con éxito!');
  }

}
