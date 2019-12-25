import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-display-navigation',
  templateUrl: './form-display-navigation.component.html',
  styleUrls: ['./form-display-navigation.component.css']
})
export class FormDisplayNavigationComponent implements OnInit {

  @Input() materialId

  constructor() { }

  ngOnInit() {
  }

}
