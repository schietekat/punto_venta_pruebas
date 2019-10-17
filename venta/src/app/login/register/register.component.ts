import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(){
    var names = ( <HTMLInputElement>document.getElementById('names')).value;
    var lastnames = ( <HTMLInputElement>document.getElementById('lastnames')).value;
    var username = ( <HTMLInputElement>document.getElementById('username')).value;
    var secret = ( <HTMLInputElement>document.getElementById('secret')).value;
    var confirm_secret = ( <HTMLInputElement>document.getElementById('confirm_secret')).value;
    var email = ( <HTMLInputElement>document.getElementById('email')).value;
    var cellphone = ( <HTMLInputElement>document.getElementById('cellphone')).value;
    alert('names: '+names+ ' \n'
         +'lastnames: '+lastnames+ ' \n'
         +'username: '+username+ ' \n'
         +'secret: '+secret+ ' \n'
         +'confirm_secret: '+confirm_secret+ ' \n'
         +'email: '+email+ ' \n'
         +'cellphone: '+cellphone+ ' \n');
  }

}
