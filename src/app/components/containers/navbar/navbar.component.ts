import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  isCustomer?: boolean;
  isLoggedIn?: boolean;

  ngOnInit() {
    this.authService.isCostumer.subscribe((x) => (this.isCustomer = x));
    this.authService.isLoggedIn$.subscribe((x) => (this.isLoggedIn = x));
  }

  handleLogout() {
    this.authService.logout();
  }
}
