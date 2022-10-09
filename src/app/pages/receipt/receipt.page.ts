import { Component, NgModule, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})

export class ReceiptPage implements OnInit {

  

  receipt = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  })
  constructor(private alertController: AlertController, private router: Router, private service: CartService) {}
  
  
  async complete() {
    if((document.getElementById("name") as HTMLInputElement).value == ""){
      const alert = await this.alertController.create({
        header: 'Please Input Your Full Name',
        buttons: [{
          text: 'OK',
          handler: () => {
          }
        }],
      });
      
      await alert.present();
      (document.getElementById("name") as HTMLInputElement).value == ""
    } else if((document.getElementById("address") as HTMLInputElement).value == ""){
      const alert = await this.alertController.create({
        header: 'Please Input Your Address',
        buttons: [{
          text: 'OK',
          handler: () => {
          }
        }],
      });
      
      await alert.present();
      (document.getElementById("address") as HTMLInputElement).value == ""
    } else {
      const alert = await this.alertController.create({
        header: 'Order Successful',
        subHeader: 'Thank you so much for your order.',
        buttons: [{
          text: 'OK',
          handler: () => {
            this.service.cart.pop();
            this.service.cart = [];
            this.service.cartItemCount.next(0);
            this.router.navigate(['/products']);
          }
        }],
      });
      
      await alert.present();
    }

    
    
  }


  ngOnInit() {
  }



}
