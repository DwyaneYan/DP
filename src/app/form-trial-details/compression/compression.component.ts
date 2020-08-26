import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compression',
  templateUrl: './compression.component.html',
  styleUrls: ['./compression.component.css']
})
export class CompressionComponent implements OnInit {
  name="compression"
  p1='ys1'
  p2='ys2'
  p3='ys3'
  p4='ys4'

  public materialId
  constructor(
    private router: Router,

  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
