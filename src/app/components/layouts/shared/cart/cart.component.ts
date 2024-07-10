import { Component, OnInit } from '@angular/core';
import { productos } from '../../../../data';
import { CartService } from '../../../../services/cart.service';
import { CartItem } from '../../../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  title:string = "Carrito de Compras";
  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.updateCartState();
    console.log(this.cartItems);
  }

  // Actualizando estado del carrito.
  updateCartState(): void {
    this.loadCart();
    this.calculateTotal();
    this.updateCounter();
  }

  // lista los items dl carrito.
  loadCart(){
    this.cartItems = this.cartService.getCart();
  }

  // calculando total.
  calculateTotal(){
    this.total = this.cartItems.reduce((acc, item) => acc + item.precio, 0);
  }

  // agregando producto al carro.
  addProduct(productId: string) {
    const product = productos.find(p => p.itemId === productId);
    if (product) {
      this.cartService.addItem(product);
      this.updateCartState();
      alert('¡Producto añadido al carrito con éxito!');
    } else {
      alert('Producto no encontrado.');
    }
  }

  // limpiar carrito.
  clearCart(){
    this.cartService.clearCart();
    this.updateCartState();
  }

  //remover producto del carrito
  removeProduct(itemId: string){
    this.cartService.removeItem(itemId);
    this.updateCartState();
    alert('¡Producto eliminado del carrito!');
  }

  // actualiza contador
  updateCounter(){
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) {
      cartCounter.textContent = this.cartItems.length.toString();
    }
  }
}