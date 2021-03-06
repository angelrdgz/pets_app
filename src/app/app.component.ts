import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { ApiProvider } from './../providers/api/api';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  loader:any;
  rootPage: any;
  user: any;

  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    public apiProvider: ApiProvider) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mis Mascotas', component: HomePage, icon: 'paw' },
      { title: 'Servicios', component: ListPage, icon: 'paw' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      let self = this;
      this.storage.get('pet_user').then((condition) => {
        if (condition == null || condition == undefined) {
          self.rootPage = LoginPage;
        } else {
          this.user = JSON.parse(condition);
          self.rootPage = ListPage;
        }
      });
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario

    this.nav.setRoot(page.component);
  }

  presentLoading(text) {
    this.loader = this.loadingCtrl.create({
      content: text,
    });
    this.loader.present();
  }

  logout() {

    this.presentLoading("Cerrando Sesión");
    this.apiProvider.logout().then(data => {
      this.storage.clear();
      console.log(data);
      this.loader.dismiss();
      this.nav.setRoot(LoginPage);
    });
  }

}
