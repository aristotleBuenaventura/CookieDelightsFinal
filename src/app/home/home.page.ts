import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CartService } from 'src/app/services/cart.service';
import { CartModalPage } from 'src/app/pages/cart-modal/cart-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  products= [];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }


  async openCart(product) {
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'card-modal'
    });
    modal.present();
  }

}
