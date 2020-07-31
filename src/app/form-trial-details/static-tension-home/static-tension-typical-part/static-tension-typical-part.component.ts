import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-tension-typical-part',
  templateUrl: './static-tension-typical-part.component.html',
  styleUrls: ['./static-tension-typical-part.component.css']
})
export class StaticTensionTypicalPartComponent implements OnInit {

  constructor(
    private router: Router,

  ) { }
  materialId
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }
  goVim(){
    window.open('http://car.spddemo.com:88/view/car-model?carModelId=1e9d1d3d-d9ad-4e77-b330-f014ce033cad')
  }
}
