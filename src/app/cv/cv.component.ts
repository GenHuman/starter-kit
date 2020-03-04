import { Component, OnInit } from '@angular/core';
import { FirstTimeGuard, FirstTimeService, I18nService } from '@app/core';
import { environment } from '@env/environment';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  version: string | null = environment.version;

  constructor(private i18nService: I18nService) {}

  ngOnInit() {}

  get currentLanguage(): string {
    return this.i18nService.language;
  }
}
