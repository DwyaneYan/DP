import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-painting-navigate',
  templateUrl: './painting-navigate.component.html',
  styleUrls: ['./painting-navigate.component.css']
})
export class PaintingNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
