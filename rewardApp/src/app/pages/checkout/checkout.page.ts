import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { ShoppingItem } from 'src/app/models/shopping-item/shopping-item.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  //shoppingList : any[];
  orderList: any[];
  orderTotal: number;
  customer:any;

  constructor(private user: AuthService,
              private cart: CartService,
              private database: AngularFireDatabase) {
              /* database.list('/shopping-list').valueChanges()   // returns observable
              .subscribe(list=> {
              this.shoppingList = list;
              console.log(this.shoppingList);
           });*/
              }
  ngOnInit() {
     //this.cart.getCart()
    //.then(theCart => this.orderList = theCart)
    //.then(cart => this.sumTotal(cart))
    //.then(sum => this.orderTotal = sum)
  }

  sumTotal(order: any[]){
    return Promise.resolve(order.reduce((total: number, item: any) => total + item.price, 0));

  }
  removeItem(itemId, ItemPrice){
    this.cart.removeItem(itemId, ItemPrice);
    this.sumTotal(this.orderList)
    .then(sum => this.orderTotal = sum)
  }

}
