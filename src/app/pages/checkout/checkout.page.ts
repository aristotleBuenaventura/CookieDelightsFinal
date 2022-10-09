import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService, Product } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removePRoduct(product);
  }

  getTotal() {
    return this.cart.reduce((i,j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }
  
  checkout(){
    
  }

}
