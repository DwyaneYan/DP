import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'



@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {
  @Input() materialId
  open={
    sub1:true,
    sub2:false
  }
  constructor(
    private experimentalItem: ExperimentalItemService,


  ) { } 
  openHandler(value) {
    for (const key in this.open) {
      if (key !== value) {
        this.open[key] = false;
      }
    }
  }
  ngOnInit() {

}


}
