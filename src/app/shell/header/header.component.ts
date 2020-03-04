import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
//import { GlobalService } from '../../global.service';
import { FormsModule } from '@angular/forms';

import { FirstTimeGuard, FirstTimeService, I18nService, GlobalService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  localguide: boolean;

  constructor(
    private router: Router,
    private authenticationService: FirstTimeGuard,
    private credentialsService: FirstTimeService,
    private i18nService: I18nService,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    /*if (this.globalService.isFirstTime()) {
      localStorage.guideEnabled = true;
    }
    this.globalService.changeGuide(localStorage.guideEnabled);*/
    this.localguide = this.globalService.isGuideEnabled();
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  /*logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }*/

  /*changeGuide() {
    localStorage.guideEnabled = this.guideEnabled;
  }*/

  updateGuide() {
    console.log(this.localguide + ' = ' + this.globalService.isGuideEnabled());
    this.localguide = this.globalService.isGuideEnabled();
  }
  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  /*get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }*/

  get guideEnabled() {
    return this.globalService.isGuideEnabled();
  }

  changeGuide() {
    this.globalService.setGuideActive(this.localguide);
  }
}
