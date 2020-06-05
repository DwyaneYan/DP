import { Component, OnInit , Input} from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-metallographic-navigate',
  templateUrl: './metallographic-navigate.component.html',
  styleUrls: ['./metallographic-navigate.component.css']
})
export class MetallographicNavigateComponent implements OnInit {
  @Input() materialId
  constructor(
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    ) { }

  ngOnInit() {
  }

}
