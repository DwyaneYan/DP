import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cementing-navigate',
  templateUrl: './cementing-navigate.component.html',
  styleUrls: ['./cementing-navigate.component.css']
})
export class CementingNavigateComponent implements OnInit {
@Input()materialId
  constructor() { }

  ngOnInit() {
  }

}
