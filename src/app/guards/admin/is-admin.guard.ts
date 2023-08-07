import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Paths } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth/auth.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAdmin.pipe(
    tap((isAdmin) => {
      if (!isAdmin) {
        router.navigate([Paths.PRODUCT_LIST]);
      }
    })
  );
};
