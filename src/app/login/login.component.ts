import { Component, OnInit } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import * as auth from 'firebase/auth';
import { getAuth } from "firebase/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  phone!: string;
  otp!: string;
  recaptchaVerifier: any;
  auth:any;
  showOTP:boolean = false;
  verifyID!:string;
  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyCX4ZW3r2vFpz1TdiP47Z-G8DwIkpo93Uk",
      authDomain: "zoomcar-f4ff4.firebaseapp.com",
      projectId: "zoomcar-f4ff4",
      storageBucket: "zoomcar-f4ff4.appspot.com",
      messagingSenderId: "1002564534030",
      appId: "1:1002564534030:web:f85c2ae10e64c6d061a15f",
      measurementId: "G-S2RSD39KK7"
    };
    const app = initializeApp( firebaseConfig );
    this.auth = getAuth(app);
    this.recaptchaVerifier = new auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': function (response:any) {
        console.log("Captch Token Recieved",response);
        // reCAPTCHA solved - will proceed with submit function
      },
      'expired-callback': function () {
        // Reset reCAPTCHA?
      }
    }, this.auth);
  }

  getOTP() {
    this.angularFireAuth.signInWithPhoneNumber(this.phone, this.recaptchaVerifier).then((res:any) => {
      if(res && res.verificationId){
        console.log("Verify ID Recieved",res);
        this.showOTP = true;
        this.verifyID = res.verificationId;
      }
      else{
        this.showOTP = false
      }
    },err=>{
      this.showOTP = false;
    })
  }


  //this code will go to backend and returns a token and UUID of the user
  verifyOTP(){
    var cred = auth.PhoneAuthProvider.credential(this.verifyID,this.otp);
    auth.signInWithCredential(this.auth,cred).then(res=>{
      console.log("OTP verified",res);
    })
  }

}
