import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-highcyclefatigue-navigate',
  templateUrl: './highcyclefatigue-navigate.component.html',
  styleUrls: ['./highcyclefatigue-navigate.component.css']
})
export class HighcyclefatigueNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
