import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDyYcQEUAyKocln7qwRUEk50BrZkuVaPcg",
      authDomain: "fir-angular-auth-613f6.firebaseapp.com",
      projectId: "fir-angular-auth-613f6",
      storageBucket: "fir-angular-auth-613f6.appspot.com",
      messagingSenderId: "659794333361",
      appId: "1:659794333361:web:1bb49ce0f929aec09ddc90"
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
