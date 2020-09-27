import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-metallographic',
  templateUrl: './metallographic.component.html',
  styleUrls: ['./metallographic.component.css']
})
export class MetallographicComponent implements OnInit {
  public materialId
  p1='jx1'
  p2='jx2'
  p3='jx3'
  p4='jx4'

  constructor( 
    private route: ActivatedRoute,
    public ApiService: ApiService,
    ) {
    this.route.parent.params.subscribe(params => {
      this.materialId = params['materialId'];
      })
   }

  ngOnInit() {   
  }
  deleteTrial(){
    this.ApiService.deleteTrial(this.materialId,'金相')
  }
}
