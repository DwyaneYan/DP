import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-working-embrittlement-navigate',
  templateUrl: './secondary-working-embrittlement-navigate.component.html',
  styleUrls: ['./secondary-working-embrittlement-navigate.component.css']
})
export class SecondaryWorkingEmbrittlementNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
