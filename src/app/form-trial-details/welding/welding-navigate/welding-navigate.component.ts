import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welding-navigate',
  templateUrl: './welding-navigate.component.html',
  styleUrls: ['./welding-navigate.component.css']
})
export class WeldingNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
