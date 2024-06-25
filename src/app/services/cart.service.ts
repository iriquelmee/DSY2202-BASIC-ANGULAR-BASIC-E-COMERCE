// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import {CartItem} from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems';

  constructor() { }

  getCart(): CartItem[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  saveCart(cart: CartItem[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  addItem(product: CartItem): void {
    const cart = this.getCart();
    cart.push(product);
    this.saveCart(cart);
  }
  removeItem(productId: number): void {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}