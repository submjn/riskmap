import { Injectable, NgZone } from '@angular/core';
import { User } from '../../../models/User';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: any; // save logged in user data

  constructor(
    public afs: AngularFirestore, // inject firestore service
    public afAuth: AngularFireAuth, // inject firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      let data = null;
      if (user) {
        this.userData = user;
        data = JSON.stringify(this.userData);
      }
      localStorage.setItem('user', data);
      JSON.parse(localStorage.getItem('user'));
    });
   }

   // Sign in with email and password
   SignIn(email, password) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['admin']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
   }

   // Sign up with email and password
   SignUp(email, password) {
     return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificationMail() function when new user sign up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
   }

   // Reset Forgot password
   ForgotPassword(passwordResetEmail) {
     return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('password reset email sent, check your inbox');
      }).catch((error) => {
        window.alert(error);
      });
   }

   /* Setting up user data when sign in with username/password,
   sign up with username/password and sign in with social auth provider in
   Firestore database using AngularFirestore + AngularFirestoreDocument service*/
   SetUserData(user) {
     const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
     const userData: User = {
       uid: user.uid,
       email: user.email,
       displayName: user.displayName,
       photoURL: user.photoURL,
       emailVerified: user.emailVerified,
     };
     return userRef.set(userData, { merge: true });
   }

   // Send email verification when new user sign up
   SendVerificationMail() {
     return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['auth/verify-email']);
      });
   }

   // Return true when user is logged in and email is verified
   get isLoggedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user'));
     return (user !== null && user.emailVerified !== false) ? true : false;
   }

   // Sign in with Google
   GoogleAuth() {
     return this.AuthLogin(new auth.GoogleAuthProvider());
   }

   // Auth logic to run auth providers
   AuthLogin(provider) {
     return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['admin']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      });
   }

   // SignOut
   SignOut() {
     return this.afAuth.auth.signOut().then(() => {
       localStorage.removeItem('user');
       this.router.navigate(['auth/login']);
     });
   }
}
