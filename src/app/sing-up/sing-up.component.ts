import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor(public firebaseService: FirebaseService, public singInComponent: SignInComponent) { }

  ngOnInit(): void {
  }

  async onSingUp(emailSignUp: string, passwordSignUp: string) {
    // this is the singUp method
    await this.firebaseService.signUp(emailSignUp, passwordSignUp);
    if (this.firebaseService.isLoggedIn) this.singInComponent.isLoggedIn = true;
  }


}
