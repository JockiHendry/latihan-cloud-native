import {Component, ViewChild} from '@angular/core';
import {Auth, authState, User} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: User|null = null;
  @ViewChild('sidenav') sideNav: MatSidenav|null = null;

  constructor(public auth: Auth, private router: Router) {
    authState(this.auth).subscribe((user) => {
      this.user = user;
      if (this.user == null) {
        this.router.navigate(['/login']);
      }
    })
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });

  }

  toggle() {
    this.sideNav?.toggle();
  }

}
