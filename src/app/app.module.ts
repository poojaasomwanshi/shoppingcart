import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {getFirestore,provideFirestore} from '@angular/fire/firestore'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HomeModule,HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(()=> getFirestore()),
  
   ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Geolocation,NativeGeocoder],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomeModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
>>>>>>> 237fcc38ca6e87bb0f74ad9e9cb44a6c2bbb2311
  bootstrap: [AppComponent],
})
export class AppModule { }
