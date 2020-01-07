import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-highspeedstrech-navigate',
  templateUrl: './highspeedstrech-navigate.component.html',
  styleUrls: ['./highspeedstrech-navigate.component.css']
})
export class HighspeedstrechNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
