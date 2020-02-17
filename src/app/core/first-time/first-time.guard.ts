import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '../logger.service';
import { GlobalService, Config } from './global.service';
import { config } from 'rxjs';

const log = new Logger('FirstTimeGuard');

@Injectable({
  providedIn: 'root'
})
export class FirstTimeGuard implements CanActivate {
  constructor(private router: Router, private dataService: GlobalService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.dataService.isFirstTime()) {
      return true;
    }

    log.debug('First time visit, redirecting and adding redirect url...');
    this.dataService.setConfigFirst(true);
    this.router.navigate(['/welcome'], { queryParams: { redirect: state.url }, replaceUrl: true });
    return false;
  }
}
