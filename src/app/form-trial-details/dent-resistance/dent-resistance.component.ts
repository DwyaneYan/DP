import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dent-resistance',
  templateUrl: './dent-resistance.component.html',
  styleUrls: ['./dent-resistance.component.css']
})
export class DentResistanceComponent implements OnInit {
  public materialId
  name="dent-resistance"
  p1='kaxn1'
  p2='kaxn2'
  p3='kaxn3'
  constructor(private router: Router,) { }

  ngOnInit() {    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
