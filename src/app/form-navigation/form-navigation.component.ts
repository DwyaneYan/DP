import { Component, OnInit } from '@angular/core';
import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrls: ['./form-navigation.component.css']
})
export class FormNavigationComponent implements OnInit {

  constructor(
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
  ) { }

  ngOnInit() {
  }

}
