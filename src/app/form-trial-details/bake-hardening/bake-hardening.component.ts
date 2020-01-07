import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-bake-hardening',
  templateUrl: './bake-hardening.component.html',
  styleUrls: ['./bake-hardening.component.css']
})
export class BakeHardeningComponent implements OnInit {
public materialId
  constructor(private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
