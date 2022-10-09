import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService, Product } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private router: Router, private alertController: AlertController) { }

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

  async noCookie() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: "Please order at least one cookie.",
      buttons: ['OK'],
    });

    await alert.present();
  }
  
  checkout(){
    if (this.cart.length == 0){
      this.noCookie();
    } else {
      this.modalCtrl.dismiss();
      this.router.navigate(['/checkout']);
    }
  }



}
