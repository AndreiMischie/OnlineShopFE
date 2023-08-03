import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AuthData, ProfileData } from 'src/app/modules/shared/types/types';
import { LOCAL_STORAGE_TOKEN_KEY } from 'src/app/util/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  profileData!: Observable<ProfileData>;

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

    this.router.navigate(['/']);
  }

  getProfileData(): Observable<ProfileData> {
    let token = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);

    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get<ProfileData>(
      'http://localhost:3000/api/auth/profile',
      { headers }
    );
  }
}
