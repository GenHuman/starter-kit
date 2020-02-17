import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
