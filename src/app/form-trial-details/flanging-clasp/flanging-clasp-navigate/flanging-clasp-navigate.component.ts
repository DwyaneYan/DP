import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-flanging-clasp-navigate',
  templateUrl: './flanging-clasp-navigate.component.html',
  styleUrls: ['./flanging-clasp-navigate.component.css']
})
export class FlangingClaspNavigateComponent implements OnInit {

  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
