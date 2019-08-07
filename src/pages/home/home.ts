import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DogDetailsPage } from '../dog-details/dog-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  dogDetails(){
    this.navCtrl.push(DogDetailsPage)
  }

}
