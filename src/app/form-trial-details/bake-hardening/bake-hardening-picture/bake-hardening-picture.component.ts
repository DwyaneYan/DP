import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'app-bake-hardening-picture',
  templateUrl: './bake-hardening-picture.component.html',
  styleUrls: ['./bake-hardening-picture.component.css']
})
export class BakeHardeningPictureComponent implements OnInit {
   materialId = ''
  constructor(private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
