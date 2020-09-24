import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap} from 'rxjs/operators';
import { of } from "rxjs"
@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.css']
})
export class PageDisplayComponent implements OnInit {
  //材料id, 通过获取路由参数得到,并传给子组件,注意路由出口组件不过是子组件
  public materialId:string = ''
  constructor(    
    private route: ActivatedRoute,
    ) { 
      //从路由参数中获取材料id
      this.route.params.subscribe(params => {
        this.materialId = params['materialId'];
        })
    }

  ngOnInit() {
    console.log(this.materialId)
  }

}
