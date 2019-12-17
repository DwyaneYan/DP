import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {

  listOfData = [
    {
      key: '1',
      trademark: 'DC01',
      thickness: '1.2mm',
      manufacturer: '邯钢',
      standard:'GB/288-2010',
      date:'2018.5.12'

    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
