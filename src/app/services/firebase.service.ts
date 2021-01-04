import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;


  constructor(public firebaseAuth: AngularFireAuth) { }


  // signIn method
  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      // here we will update the isLoggedIn bool
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }
  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      // here we will update the isLoggedIn bool
      this.isLoggedIn = true; a
      localStorage.setItem('user', JSON.stringify(res.user));
    })
  }
}
