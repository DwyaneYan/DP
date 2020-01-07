import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prohibited-substance-navigate',
  templateUrl: './prohibited-substance-navigate.component.html',
  styleUrls: ['./prohibited-substance-navigate.component.css']
})
export class ProhibitedSubstanceNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
