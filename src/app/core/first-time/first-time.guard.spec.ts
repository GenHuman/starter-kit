import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

import { CredentialsService } from './first.service';
import { MockCredentialsService } from './global.service.mock';
import { FirstTimeGuard } from './first-time.guard';

describe('FirstTimeGuard', () => {
  let firstTimeGuard: FirstTimeGuard;
  let credentialsService: MockCredentialsService;
  let mockRouter: any;
  let mockSnapshot: any;

  beforeEach(() => {
    mockRouter = {
      navigate: jest.fn()
    };
    mockSnapshot = jest.fn(() => ({
      toString: jest.fn()
    }));

    TestBed.configureTestingModule({
      providers: [
        firstTimeGuard,
        { provide: CredentialsService, useClass: MockCredentialsService },
        { provide: Router, useValue: mockRouter }
      ]
    });

    firstTimeGuard = TestBed.get(firstTimeGuard);
    credentialsService = TestBed.get(CredentialsService);
  });

  it('should have a canActivate method', () => {
    expect(typeof firstTimeGuard.canActivate).toBe('function');
  });

  it('should return true if user is authenticated', () => {
    expect(firstTimeGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(true);
  });

  it('should return false and redirect to login if user is not authenticated', () => {
    // Arrange
    credentialsService.credentials = null;

    // Act
    const result = firstTimeGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

    // Assert
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: undefined },
      replaceUrl: true
    });
    expect(result).toBe(false);
  });

  it('should save url as queryParam if user is not authenticated', () => {
    credentialsService.credentials = null;
    mockRouter.url = '/about';
    mockSnapshot.url = '/about';

    firstTimeGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
      queryParams: { redirect: mockRouter.url },
      replaceUrl: true
    });
  });
});
