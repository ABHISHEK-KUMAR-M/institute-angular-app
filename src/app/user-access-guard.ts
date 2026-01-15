import { CanActivateFn } from '@angular/router';

export const userAccessGuard: CanActivateFn = (route, state) => {
  let userName=sessionStorage.getItem('userName');
  if(userName){
    return true;
  }
  return false;
};
