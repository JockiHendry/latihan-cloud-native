import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Auth, EmailAuthProvider} from '@angular/fire/auth';
import {getApp} from '@angular/fire/app';
import * as firebaseui from 'firebaseui';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  @ViewChild('authContainer', {static: true}) authContainerElement?: ElementRef;

  constructor(public router: Router, private auth: Auth) { }

  ngOnInit(): void {
    if (this.authContainerElement == null) {
      console.error('authContainerElement is not ready');
      return;
    }
    let ui = firebaseui.auth.AuthUI.getInstance(getApp().name);
    if (ui == null) {
      ui = new firebaseui.auth.AuthUI(this.auth);
    }
    ui.start(this.authContainerElement.nativeElement, {
      callbacks: {
        signInSuccessWithAuthResult: (_authResult: any, _redirectUrl?: string): boolean => {
          this.router.navigate(['/dashboard']);
          return true;
        },
      },
      signInFlow: 'popup',
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
      ]
    });
  }

}
