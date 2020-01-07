import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-bake-hardening-navigate',
  templateUrl: './bake-hardening-navigate.component.html',
  styleUrls: ['./bake-hardening-navigate.component.css']
})
export class BakeHardeningNavigateComponent implements OnInit {
@Input()  materialId

  constructor() { }

  ngOnInit() {
  }

}
