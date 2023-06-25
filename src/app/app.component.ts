import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name:'',
    email:'',
    password:''
  }

  onRegister(){
    console.log(this.user);
  }
}
