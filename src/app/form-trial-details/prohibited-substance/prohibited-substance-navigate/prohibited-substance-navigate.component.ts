import { Component, OnInit, Input } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-prohibited-substance-navigate',
  templateUrl: './prohibited-substance-navigate.component.html',
  styleUrls: ['./prohibited-substance-navigate.component.css']
})
export class ProhibitedSubstanceNavigateComponent implements OnInit {
  @Input() materialId
  constructor(private FormExperimentalItemComponent: FormExperimentalItemComponent,) { }

  ngOnInit() {
  }

}
