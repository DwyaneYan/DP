import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-static-tension-home',
  templateUrl: './static-tension-home.component.html',
  styleUrls: ['./static-tension-home.component.css'],
})
export class StaticTensionHomeComponent implements OnInit {
  name="static-tension-home"
  p1='jtls1'
  p2='jtls2'
  p3='jtls3'
  p4='jtls4'

  public materialId:string
  constructor(
    private route: ActivatedRoute,
  ) { 
    //从父路由参数中获取材料id，暂时不能从display组件传进来
    this.route.parent.params.subscribe(params => {
      this.materialId = params['materialId'];
      })
  }

  ngOnInit() {
    console.log(this.route)
  }

}
