import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { QRScanner } from '@ionic-native/qr-scanner/ngx';



/* AndroidStudio imports to be corrected: 
import androidx.core.content.FileProvider;
import androidx.core.app.ActivityCompat; */



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireAuthModule,
     AngularFirestoreModule,
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireDatabaseModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    NavParams,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QRScanner,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
