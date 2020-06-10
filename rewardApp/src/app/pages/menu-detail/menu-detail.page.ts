import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { ShoppingItem } from 'src/app/models/shopping-item/shopping-item.interface';



@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {
  itemSelected ={} as ShoppingItem;

  theCart:any[]=[{}];
 
  
    constructor(private router: Router,
                private route: ActivatedRoute,
                private cart: CartService,
                private user: AuthService,
                private alert: AlertService
                ) { }
  
    ngOnInit() {
      if(this.route.snapshot.data['itemByID']){
        let item = this.route.snapshot.data['itemByID'];
        this.initObject(item);
  
      }
    }
    initObject(myData){
      this.itemSelected.id = myData.id;
      this.itemSelected.name = myData.name;
      this.itemSelected.description =  myData.description;
      this.itemSelected.img = myData.img;
      this.itemSelected.price = myData.price;
      
    }
    
    addShoppingItem(){
      this.itemSelected.price = Number(this.itemSelected.price);
      this.itemSelected.orderId = `${this.itemSelected.id}-${this.itemSelected.price}-${this.itemSelected.option1}-${this.itemSelected.option2}-${this.itemSelected.option3}`;
      this.cart.addItem(this.itemSelected);
      this.itemSelected = {} as ShoppingItem;
      this.alert.presentToast("Ordem: "+this.itemSelected.orderId,"Item "+this.itemSelected.name+" adicionado no seu carrinho");
      this.router.navigateByUrl(`/home/menu`);
    }
  }
