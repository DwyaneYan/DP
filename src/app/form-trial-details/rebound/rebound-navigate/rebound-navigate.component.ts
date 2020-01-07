import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-rebound-navigate',
  templateUrl: './rebound-navigate.component.html',
  styleUrls: ['./rebound-navigate.component.css']
})
export class ReboundNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
