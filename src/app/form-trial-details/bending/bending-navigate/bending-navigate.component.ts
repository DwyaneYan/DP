import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bending-navigate',
  templateUrl: './bending-navigate.component.html',
  styleUrls: ['./bending-navigate.component.css']
})
export class BendingNavigateComponent implements OnInit {

  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
