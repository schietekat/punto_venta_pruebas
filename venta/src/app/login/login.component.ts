import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(){
    var username = ( <HTMLInputElement>document.getElementById('username')).value;
    var secret = ( <HTMLInputElement>document.getElementById('secret')).value;
    alert('username: '+username+ ' \nsecret: '+secret);
    
  }

}
