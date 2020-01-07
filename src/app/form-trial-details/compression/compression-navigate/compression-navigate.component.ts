import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-compression-navigate',
  templateUrl: './compression-navigate.component.html',
  styleUrls: ['./compression-navigate.component.css']
})
export class CompressionNavigateComponent implements OnInit {

  @Input() materialId
  
  constructor() { }

  ngOnInit() {
  }

}
