import { Component, OnInit , Input} from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-physicalperformance-navigate',
  templateUrl: './physicalperformance-navigate.component.html',
  styleUrls: ['./physicalperformance-navigate.component.css']
})
export class PhysicalperformanceNavigateComponent implements OnInit {
  @Input() materialId
  constructor(private FormExperimentalItemComponent: FormExperimentalItemComponent,) { }

  ngOnInit() {
  }

}
