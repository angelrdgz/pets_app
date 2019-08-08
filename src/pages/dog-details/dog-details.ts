import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from  './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-dog-details',
  templateUrl: 'dog-details.html',
})
export class DogDetailsPage {

  public pet:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiProvider: ApiProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DogDetailsPage');
    this.getPet(this.navParams.get('id'))
  }

  getPet(id){

    this.apiProvider.getPet(id).then((data:any) => {
      console.log(data)
      this.pet = data.data;
    });

  }

}
