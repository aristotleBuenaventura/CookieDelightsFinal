import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { CartService } from 'src/app/services/cart.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-daily-recipe',
  templateUrl: './daily-recipe.page.html',
  styleUrls: ['./daily-recipe.page.scss'],
})
export class DailyRecipePage implements OnInit {

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
