import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FirstTimeService } from './first-time.service';
import { CredentialsService, Credentials } from './first.service';
import { MockCredentialsService } from './global.service.mock';

describe('AuthenticationService', () => {
  let FirstTimeService: FirstTimeService;
  let credentialsService: MockCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: CredentialsService, useClass: MockCredentialsService }, FirstTimeService]
    });

    FirstTimeService = TestBed.get(FirstTimeService);
    credentialsService = TestBed.get(CredentialsService);
    credentialsService.credentials = null;
    spyOn(credentialsService, 'setCredentials').and.callThrough();
  });

  describe('login', () => {
    it('should return credentials', fakeAsync(() => {
      // Act
      const request = FirstTimeService.login({
        username: 'toto',
        password: '123'
      });
      tick();

      // Assert
      request.subscribe(credentials => {
        expect(credentials).toBeDefined();
        expect(credentials.token).toBeDefined();
      });
    }));

    it('should authenticate user', fakeAsync(() => {
      expect(credentialsService.isAuthenticated()).toBe(false);

      // Act
      const request = FirstTimeService.login({
        username: 'toto',
        password: '123'
      });
      tick();

      // Assert
      request.subscribe(() => {
        expect(credentialsService.isAuthenticated()).toBe(true);
        expect(credentialsService.credentials).not.toBeNull();
        expect((credentialsService.credentials as Credentials).token).toBeDefined();
        expect((credentialsService.credentials as Credentials).token).not.toBeNull();
      });
    }));

    it('should persist credentials for the session', fakeAsync(() => {
      // Act
      const request = FirstTimeService.login({
        username: 'toto',
        password: '123'
      });
      tick();

      // Assert
      request.subscribe(() => {
        expect(credentialsService.setCredentials).toHaveBeenCalled();
        expect((credentialsService.setCredentials as jasmine.Spy).calls.mostRecent().args[1]).toBe(undefined);
      });
    }));

    it('should persist credentials across sessions', fakeAsync(() => {
      // Act
      const request = FirstTimeService.login({
        username: 'toto',
        password: '123',
        remember: true
      });
      tick();

      // Assert
      request.subscribe(() => {
        expect(credentialsService.setCredentials).toHaveBeenCalled();
        expect((credentialsService.setCredentials as jasmine.Spy).calls.mostRecent().args[1]).toBe(true);
      });
    }));
  });

  describe('logout', () => {
    it('should clear user authentication', fakeAsync(() => {
      // Arrange
      const loginRequest = FirstTimeService.login({
        username: 'toto',
        password: '123'
      });
      tick();

      // Assert
      loginRequest.subscribe(() => {
        expect(credentialsService.isAuthenticated()).toBe(true);

        const request = FirstTimeService.logout();
        tick();

        request.subscribe(() => {
          expect(credentialsService.isAuthenticated()).toBe(false);
          expect(credentialsService.credentials).toBeNull();
        });
      });
    }));
  });
});