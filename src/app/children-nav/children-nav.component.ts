import { Component, OnInit, Input } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';


@Component({
  selector: 'app-children-nav',
  templateUrl: './children-nav.component.html',
  styleUrls: ['./children-nav.component.css']
})
export class ChildrenNavComponent implements OnInit {
  @Input() materialId
  @Input() name
  @Input() p1
  @Input() p2
  @Input() p3

  constructor(private FormExperimentalItemComponent: FormExperimentalItemComponent,) { }

  ngOnInit() {
  }
}
