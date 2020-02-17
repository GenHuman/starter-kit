import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {}

  ngOnInit() {}
}
