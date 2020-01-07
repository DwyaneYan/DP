import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chemicalelement-navigate',
  templateUrl: './chemicalelement-navigate.component.html',
  styleUrls: ['./chemicalelement-navigate.component.css']
})
export class ChemicalelementNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
