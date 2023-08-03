import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthData, ProfileData } from 'src/app/modules/shared/types/types';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/app/util/constants';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_USER_ROLES } from 'src/app/util/constants';
import { LOCAL_STORAGE_USER_DETAILS } from 'src/app/util/constants';
import { Paths } from 'src/app/app-routing.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  profileData!: ProfileData;

  isCostumer = new BehaviorSubject(false);
  isAdmin = new BehaviorSubject(false);

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('auth');

    this._isLoggedIn$.next(!!token);
  }

  login(data: AuthData) {
    return this.http.post('http://localhost:3000/api/auth/login', data).pipe(
      tap((res: any) => {
        this._isLoggedIn$.next(true);

        localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, res.access_token);
      })
    );
  }
  logout() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_USER_ROLES);

    this._isLoggedIn$.next(false);

    this.isCostumer.next(false);
    this.isAdmin.next(false);

    this.router.navigate(['/']);
  }

  getProfileData() {
    let token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    const headers = { Authorization: `Bearer ${token}` };

    return this.http
      .get<ProfileData>('http://localhost:3000/api/auth/profile', { headers })
      .subscribe((res) => {
        this.profileData = res;
        localStorage.setItem(
          LOCAL_STORAGE_USER_ROLES,
          JSON.stringify(res.roles)
        );
        localStorage.setItem(LOCAL_STORAGE_USER_DETAILS, JSON.stringify(res));

        if (res.roles.includes('customer')) {
          this.isCostumer.next(true);
        }
        if (res.roles.includes('admin')) {
          this.isAdmin.next(true);
        }
        this.router.navigate([Paths.PRODUCT_LIST]);
      });
  }
}
