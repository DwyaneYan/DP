import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-trial-details',
  templateUrl: './form-trial-details.component.html',
  styleUrls: ['./form-trial-details.component.css']
})
export class FormTrialDetailsComponent implements OnInit {

  @Input() materialId
  @Input() trialType

  constructor() { }

  ngOnInit() {
    // console.log(this.materialId,this.trialType)
  }

}
