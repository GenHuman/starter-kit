import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Config, GlobalService } from './global.service';

export interface Data {
  noFirstTime: boolean;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class FirstTimeService {
  constructor(private credentialsService: GlobalService) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  /*login(context: LoginContext): Observable<GlobalService> {
    // Replace by proper authentication call
    const data = {
      username: context.username,
      token: '123456'
    };
    this.credentialsService.setConfig(data, context.remember);
    return of(data);
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  /* logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }*/
}
