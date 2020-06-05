import { Component, OnInit, Input } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-chemicalelement-navigate',
  templateUrl: './chemicalelement-navigate.component.html',
  styleUrls: ['./chemicalelement-navigate.component.css']
})
export class ChemicalelementNavigateComponent implements OnInit {
  @Input() materialId
  constructor(private FormExperimentalItemComponent: FormExperimentalItemComponent,) { }

  ngOnInit() {
  }

}
