import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: string;
  class: string;
  type: string;
  group: string;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    {id:0, name: 'Chocolate Chip', price: 180, amount: 1, image: 'assets/chocolateChip.png', class: 'cookieImage', type: 'Best Seller:', group: 'Best Seller'},
    {id:1, name: 'Gingersnaps', price: 105, amount: 1, image: 'assets/gingersnaps.png', class: 'cookieImageGinger', type: 'Best Seller:', group: ''},
    {id:2, name: 'Oatmeal Raisin', price: 115, amount: 1, image: 'assets/oatmeal.png', class: 'cookieImageOatmeal', type: 'Best Seller:', group: ''},
    {id:3, name: 'Peanut Butter', price: 100, amount: 1, image: 'assets/peanutbutter.png', class: 'cookieImagePeanut', type: 'Rating:', group: 'Kiddie Treats'},
    {id:4, name: 'Whoopee Pie', price: 115, amount: 1, image: 'assets/whoopie.png', class: 'cookieImageWhoopie', type: 'Rating:', group: ''},
    {id:5, name: 'Sugar Cookies', price: 180, amount: 1, image: 'assets/sugar.png', class: 'cookieImageSugar', type: 'Rating:', group: ''},
    {id:6, name: 'Biscotti', price: 150, amount: 1, image: 'assets/biscotti.png', class: 'cookieImageBiscotti', type: 'Rating:', group: 'Premium'},
    {id:7, name: 'Spritz Cookies', price: 160, amount: 1, image: 'assets/spritz.png', class: 'cookieImageSpritz', type: 'Rating:', group: ''},
    {id:8, name: 'Pinwheel Cookies', price: 120, amount: 1, image:'assets/pinwheel.png', class: 'cookieImagePinwheel', type: 'Rating:', group: ''},
    {id:9, name: 'Butter Cookies', price: 100, amount: 1, image: 'assets/butter.png', class: 'cookieImageButter', type: 'Rating:', group: ''},
  ];

  public cart = [];
  public cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if(p.amount ==0){
          this.cart.splice(index,1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value -1);
  }

  removePRoduct(product) {
    for (let [index,p] of this.cart.entries()) {
      if(p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value -p.amount);
        this.cart.splice(index, 1);
      }
    }

  }
}
