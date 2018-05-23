import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from "@ionic-native/google-plus";
import { AngularFireModule } from "angularfire2";
import firebase  from "firebase";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";

export const firebaseConfig = {
    apiKey: "AIzaSyCotqnq1AhwD2cSNIQmYmsI-XGGUUxKULQ",
    authDomain: "admob-app-id-6442693502.firebaseapp.com",
    databaseURL: "https://admob-app-id-6442693502.firebaseio.com",
    projectId: "admob-app-id-6442693502",
    storageBucket: "admob-app-id-6442693502.appspot.com",
    messagingSenderId: "153609424137"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
