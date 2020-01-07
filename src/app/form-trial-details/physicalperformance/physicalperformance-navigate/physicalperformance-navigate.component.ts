import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-physicalperformance-navigate',
  templateUrl: './physicalperformance-navigate.component.html',
  styleUrls: ['./physicalperformance-navigate.component.css']
})
export class PhysicalperformanceNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
