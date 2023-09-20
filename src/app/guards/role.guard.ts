import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const toastr = inject(ToastrService);

  let requiredRoles = route.data['roles'] || []; // Sol taraf null ise sağ tarafı kullan.

  if (authService.isAuthorized(requiredRoles)) return true;

  //TODO: Kullanıcıya yetkiniz yok mesajının gösterilmesi..
  toastr.warning('Bu sayfayı görüntülümek için yetkiniz bulunmamaktadır.');
  router.navigateByUrl('/');
  return false;
};

// kminchelle
// 0lelplR
