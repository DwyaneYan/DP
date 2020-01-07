import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welding-picture',
  templateUrl: './welding-picture.component.html',
  styleUrls: ['./welding-picture.component.css']
})
export class WeldingPictureComponent implements OnInit {
  public materialId
  constructor(private router: Router,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');

  }

}
