import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionicViewDidLoad(){
  	this.alert.create({
	  title:'Username',
	  inputs:[{
	    name:'username',
	    placeholder: 'username'
	  }],
	  buttons:[{
	    text: 'Continue',
	    handler: username =>{
	      this.name = username
	   }
	  }]
	 }).present();
  }

  send(){
	this.ref.push({
		name: this.name.username,
	    message: this.newmessage
	});
  }

}
