import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';
import { User } from './Models/master.model';

export const authguardGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('userDetails');


  if (user!=null) {
    return true; // user is logged in, allow access
  } else {

    const router = inject(Router); // Angular 16+ functional guard injects
    router.navigate(['/login']);
    return false;
  }
};
