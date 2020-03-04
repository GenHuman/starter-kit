import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  guideEnabled = true;
  constructor() {}

  isGuideEnabled(): Observable<boolean> {
    return of(this.guideEnabled);
  }

  toggleGuide() {
    this.guideEnabled = !this.guideEnabled;
  }

  changeGuide(a: boolean) {
    this.guideEnabled = a;
  }
}
