import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-static-tension-navigate',
  templateUrl: './static-tension-navigate.component.html',
  styleUrls: ['./static-tension-navigate.component.css']
})
export class StaticTensionNavigateComponent implements OnInit {

  @Input() materialId;
  constructor() { }

  ngOnInit() {
  }

}
