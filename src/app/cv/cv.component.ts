import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}

  over() {
    console.log('madafaka');
  }
  out() {
    console.log('indastreet');
  }
}
