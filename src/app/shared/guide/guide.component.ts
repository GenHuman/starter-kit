import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  @Input() enabled = true;
  constructor() {}

  ngOnInit() {}
}