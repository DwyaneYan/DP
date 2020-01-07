import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hydrogen-induced-delayed-fracture-navigate',
  templateUrl: './hydrogen-induced-delayed-fracture-navigate.component.html',
  styleUrls: ['./hydrogen-induced-delayed-fracture-navigate.component.css']
})
export class HydrogenInducedDelayedFractureNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
