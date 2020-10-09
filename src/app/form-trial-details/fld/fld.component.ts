import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-fld',
  templateUrl: './fld.component.html',
  styleUrls: ['./fld.component.css']
})
export class FLDComponent implements OnInit {
  public materialId
  p1='fld1'
  p2='fld2'
  p3='fld3'
  p4='fld4'

  constructor(      private route: ActivatedRoute,
    public ApiService: ApiService,) {
    this.route.parent.params.subscribe(params => {
      this.materialId = params['materialId'];
      });
   }

  ngOnInit() {    
  }
  deleteTrial(){
    this.ApiService.deleteTrial(this.materialId,'成型极限')
  }
}
