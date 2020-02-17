import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../global.service';
import { FormsModule } from '@angular/forms';

import { FirstTimeGuard, FirstTimeService, I18nService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  @Input() guideEnabled: boolean;

  constructor(
    private router: Router,
    private authenticationService: FirstTimeGuard,
    private credentialsService: FirstTimeService,
    private i18nService: I18nService,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    if (!localStorage.noFirstVisit) {
      localStorage.guideEnabled = true;
    }
    this.guideEnabled = localStorage.guideEnabled;
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

  changeGuide() {
    localStorage.guideEnabled = this.guideEnabled;
  }

  updateGuide() {
    //this.guideEnabled = localStorage.guideEnabled;
    console.log(this.guideEnabled + ' = ' + localStorage.guideEnabled);
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

  isGuideEnabled() {
    return localStorage.guideEnabled;
  }
}
