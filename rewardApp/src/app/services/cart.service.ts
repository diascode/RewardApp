import { Injectable } from '@angular/core';
import { StorageserviceService } from './storageservice.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ShoppingItem } from '../models/shopping-item/shopping-item.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any[]=[{}];
  tempCart: any[] =[{}];

  //shoppingListRef$ : AngularFireList<ShoppingItem[]>;
  

  constructor( private storage: StorageserviceService,
               private database: AngularFireDatabase,
               
    ) {
      //this.shoppingListRef$ = this.database.list('shopping-list');
     }

  getCart(): any{

  }
  addItem(item: any){
   // this.shoppingListRef$.push(item);  
   console.log(item);  
   this.tempCart.push(item);
   console.log('PushedArray: '+this.tempCart);
   this.storage.get('CART')
    .then(res => {
      console.log(res)
      if(res===false){
        this.storage.store('CART', this.tempCart)
      }else{
        this.storage.get('CART')
        .then(res =>{
          var storedCart = res;
          console.log('storedCart: '+storedCart)
          for (let entry of storedCart) {
            if(entry.id != null){
              console.log(entry);
              this.tempCart.push(entry);
            }
              
              this.storage.store('CART', this.tempCart)
              .then(result => console.log(result))
            
            
        }
        
            
          
        })
      }
    } );    
 }
 

  removeItem(id, price){
    /*let tmpId = `${id}-${price}`;
    let tmp = this.theCart.map(x => x.orderId).indexOf(tmpId);

    if (tmp > -1) {
      this.theCart.splice(tmp, 1);
    }
  */
  }

  emptyCart(){
   // this.theCart = [];
  }

}
