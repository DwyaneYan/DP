import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'



@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {
  @Input() materialId
  constructor(
    private experimentalItem: ExperimentalItemService,


  ) { } 

  ngOnInit() {

}


}
