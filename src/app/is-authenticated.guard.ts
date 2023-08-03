import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { tap } from 'rxjs';
import { Paths } from './app-routing.module';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) {
        router.navigate([Paths.LOGIN]);
      }
    })
  );
};
