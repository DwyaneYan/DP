import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router ,ActivatedRoute,ParamMap} from '@angular/router';
import { switchMap,map } from 'rxjs/operators';
import { of, } from 'rxjs';
import {MaterialsContrastService} from './materials-contrast.service';
const options=[
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  }
]
@Component({
  selector: 'app-page-contrast',
  templateUrl: './page-contrast.component.html',
  styleUrls: ['./page-contrast.component.css']
})

export class PageContrastComponent implements OnInit {
  listMaterials=[]
  name= [];
  model=[];
  manu=[]
  checkbox=false
  values=[]
  constructor( private router: Router,
    private routerinfo:ActivatedRoute,
    private MaterialsContrastService:MaterialsContrastService,
    ) { }
    contrastID
    array=[]
  ngOnInit() {  
      $('nz-table').addClass('vertical').find('th, td').wrapInner('<div>');
      //$('table').addClass('vertical');//数字会变垂直，不能用

      this.contrastID = this.routerinfo.snapshot.queryParams['materialids']
      this.array=this.contrastID.split(",");
      // console.log(this.array);
      this.getGetMaterialss()
      this.getGetMaterials();
      
  }

  public async getGetMaterials() {        
  if(this.array.length>0) {await this.MaterialsContrastService.GetMaterials(this.array).then((res: any) => {
      this.listMaterials= res; 
      console.log(this.listMaterials)
    
})}

}
  public async getGetMaterialss() {     
    for(var i=0;i<this.array.length;i++){
    await this.MaterialsContrastService.GetMaterialss(this.array[i]).then((res: any) => {
      this.name[i] = res.items[0].name; 
      this.model[i] = res.items[0].model;
      this.manu[i] = res.items[0].manufactoryName;
      
    });
}
  }
  showModal(){
    this.checkbox=true
  }
del(i){
  this.listMaterials.splice(i,1); 
  this.name.splice(i,1);
  this.model.splice(i,1);
  this.manu.splice(i,1);

  this.array.splice(i,1).toString()
console.log( this.array)
  window.history.pushState(null,null,`/contrast?materialids=${this.array}`);
}

}
