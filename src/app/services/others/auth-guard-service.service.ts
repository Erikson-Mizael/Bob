import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LocalstorageService } from './localstorage.service';
import { RedirectService } from './redirect.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService implements CanActivate {

  constructor(
    private lstorage: LocalstorageService,
    private router: RedirectService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.lstorage.get('online')) {
      return true;
    }
    this.router.to('login')
    return false

  }

}
