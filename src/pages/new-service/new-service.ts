import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from  './../../providers/api/api';

/**
 * Generated class for the NewServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-service',
  templateUrl: 'new-service.html',
})
export class NewServicePage {

  public services:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewServicePage');
    this.getZoneServices(2)
  }

  getZoneServices(id){
    this.apiProvider.getZoneServices(id).then((data:any) => {
      console.log(data)
      this.services = data.data;
    });
  }

}
