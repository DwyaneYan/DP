import { Component, OnInit, Input } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-static-tension-navigate',
  templateUrl: './static-tension-navigate.component.html',
  styleUrls: ['./static-tension-navigate.component.css']
})
export class StaticTensionNavigateComponent implements OnInit {

  @Input() materialId;
  constructor(private FormExperimentalItemComponent: FormExperimentalItemComponent,) { }

  ngOnInit() {
  }

}
