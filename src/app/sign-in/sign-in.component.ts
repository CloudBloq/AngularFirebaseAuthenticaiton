import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) { }
  isLoggedIn = false;


  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) this.isLoggedIn = true;
    else this.isLoggedIn = false;

    console.log("this is the isLoggedIn vale", this.isLoggedIn);

  }





  async onSingIn(emailSignUp: string, passwordSignUp: string) {
    // this is the singIn method
    await this.firebaseService.signIn(emailSignUp, passwordSignUp);
    if (this.firebaseService.isLoggedIn) this.isLoggedIn = true;

  }

}
