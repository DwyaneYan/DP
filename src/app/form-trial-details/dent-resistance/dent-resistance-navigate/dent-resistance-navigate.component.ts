import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dent-resistance-navigate',
  templateUrl: './dent-resistance-navigate.component.html',
  styleUrls: ['./dent-resistance-navigate.component.css']
})
export class DentResistanceNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
