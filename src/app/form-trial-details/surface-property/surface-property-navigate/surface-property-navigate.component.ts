import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-surface-property-navigate',
  templateUrl: './surface-property-navigate.component.html',
  styleUrls: ['./surface-property-navigate.component.css']
})
export class SurfacePropertyNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
