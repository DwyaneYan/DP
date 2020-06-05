import { Component, OnInit, Input } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-surface-property-navigate',
  templateUrl: './surface-property-navigate.component.html',
  styleUrls: ['./surface-property-navigate.component.css']
})
export class SurfacePropertyNavigateComponent implements OnInit {
  @Input() materialId
  constructor(private FormExperimentalItemComponent: FormExperimentalItemComponent,) { }

  ngOnInit() {
  }

}
