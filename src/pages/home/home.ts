import { Component } from '@angular/core';
import { NavController, ModalController  } from 'ionic-angular';
import { DogDetailsPage } from '../dog-details/dog-details';

import { NewPetPage } from '../new-pet/new-pet';

import { ApiProvider } from  './../../providers/api/api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pets:any;

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider,public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.getPets();
  }

  dogDetails(id){
    this.navCtrl.push(DogDetailsPage, {id:id})
  }

  getPets(){

    this.apiProvider.getPets().then((data:any) => {
      console.log(data)
      this.pets = data.data;
    });

  }

  newPet() {
    const modal = this.modalCtrl.create(NewPetPage);
    modal.present();
  }

}
