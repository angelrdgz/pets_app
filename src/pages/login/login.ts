import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiProvider } from  './../../providers/api/api';

import { HomePage } from '../home/home';

import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loader:any;
  public user = {email:"angel@pets.com", password:"Hola1@"}

  constructor(
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController,
    private storage: Storage
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentLoading(text) {
    this.loader = this.loadingCtrl.create({
      content: text,
    });
    this.loader.present();
  }

  login(){

    this.presentLoading("Iniciando Sesión");

    this.apiProvider.login(this.user).then((data:any) => {
      this.storage.set('pet_token', data.token);
      this.storage.set('pet_user', JSON.stringify(data.user));
      this.loader.dismiss();
      this.navCtrl.setRoot(HomePage);
    });
  	 
  }

}
