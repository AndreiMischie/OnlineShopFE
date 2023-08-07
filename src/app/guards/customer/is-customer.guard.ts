import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Paths } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth/auth.service';

export const isCustomerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isCostumer.pipe(
    tap((isCostumer) => {
      if (!isCostumer) {
        router.navigate([Paths.PRODUCT_LIST]);
      }
    })
  );
};
