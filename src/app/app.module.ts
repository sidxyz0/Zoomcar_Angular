import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { getAuth } from "firebase/auth";
// import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

const firebaseConfig = {
  apiKey: "AIzaSyCX4ZW3r2vFpz1TdiP47Z-G8DwIkpo93Uk",
  authDomain: "zoomcar-f4ff4.firebaseapp.com",
  projectId: "zoomcar-f4ff4",
  storageBucket: "zoomcar-f4ff4.appspot.com",
  messagingSenderId: "1002564534030",
  appId: "1:1002564534030:web:f85c2ae10e64c6d061a15f",
  measurementId: "G-S2RSD39KK7"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // provideFirebaseApp(() => initializeApp( firebaseConfig )),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
