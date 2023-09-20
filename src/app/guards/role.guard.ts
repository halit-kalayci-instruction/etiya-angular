import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  let requiredRoles = route.data['roles'] || []; // Sol taraf null ise sağ tarafı kullan.

  if (authService.isAuthorized(requiredRoles)) return true;

  //TODO: Kullanıcıya yetkiniz yok mesajının gösterilmesi..
  router.navigateByUrl('/');
  return false;
};
