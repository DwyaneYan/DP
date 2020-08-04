import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-typical-part',
  templateUrl: './typical-part.component.html',
  styleUrls: ['./typical-part.component.css']
})
export class TypicalPartComponent implements OnInit {

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
    window.open('http://localhost:4280/car-model?carModelId=1e9d1d3d-d9ad-4e77-b330-f014ce033cad&type=hangang&directoryId=b740fdc0-5724-4916-b494-de14d3800170&filterName=%E5%89%8D%E4%BF%9D%E9%99%A9%E6%9D%A0%E5%8F%B3%E6%B3%95%E5%85%B0%E7%9B%98')
  }

}
