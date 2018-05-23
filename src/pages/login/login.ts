import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from "angularfire2";
import firebase  from "firebase/app";

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleplus: GooglePlus, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  googleauth() {
    this.googleplus.login({
        // scopes: 'https://www.googleapis.com/auth/contacts.readonly profile email',
        webClientId: '153609424137-trsjpkcuak7a5989s66gferrlsqtq1ev.apps.googleusercontent.com',
       offline: true,

    }).then((result) => {
      console.log('Login Success' + JSON.stringify(result));
      
      firebase.auth().signInAndRetrieveDataWithCredential(firebase.auth.GoogleAuthProvider.credential(result.idToken))
              .then((success) => {
                let toast  = this.toastCtrl.create({
                  message: 'Successfully Login in to your account.',
                  position: 'buttom',
                  duration: 3000
                })
                toast.present();
                this.navCtrl.setRoot(HomePage);
                
              }).catch((err) => {
                alert('Login Error: ' + err);

              })

      

   
    }).catch((err) => {
      alert('Login Error.\Code: ' + JSON.stringify(err));

    });

  }

  viewSHA1() {
    return this.googleplus.getSigningCertificateFingerprint();
  }

}
