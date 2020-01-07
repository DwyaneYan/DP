import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-lowcyclefatigue-navigate',
  templateUrl: './lowcyclefatigue-navigate.component.html',
  styleUrls: ['./lowcyclefatigue-navigate.component.css']
})
export class LowcyclefatigueNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
