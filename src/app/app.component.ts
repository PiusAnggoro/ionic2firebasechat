import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let config = {
      apiKey: "AIzaSyBnGengwieT7M7A5EiKbY0kBN3Sc7ce1Tk",
      authDomain: "ionic2chat-e18ab.firebaseapp.com",
      databaseURL: "https://ionic2chat-e18ab.firebaseio.com",
      projectId: "ionic2chat-e18ab",
      storageBucket: "ionic2chat-e18ab.appspot.com",
      messagingSenderId: "474584107890"
    };
    firebase.initializeApp(config);
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

