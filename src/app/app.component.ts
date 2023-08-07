import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { LOCAL_STORAGE_USER_ROLES } from './util/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.isCostumer.next(
      localStorage.getItem(LOCAL_STORAGE_USER_ROLES)?.includes('customer')!
    );
    this.authService.isAdmin.next(
      localStorage.getItem(LOCAL_STORAGE_USER_ROLES)?.includes('admin')!
    );
  }

  title = 'online-shop';
}
