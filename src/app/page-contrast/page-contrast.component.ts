import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router ,ActivatedRoute} from '@angular/router';
import {MaterialsContrastService} from './materials-contrast.service';

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
  constructor( private router: Router,
    private routerinfo:ActivatedRoute,
    private MaterialsContrastService:MaterialsContrastService,
    ) { }
    contrastID
    array=[]
  ngOnInit() {  
      $('nz-table').addClass('vertical').find('th, td').wrapInner('<div>');
      //$('table').addClass('vertical');//数字会变垂直，不能用
      this.contrastID = this.routerinfo.snapshot.params['contrastID']
      // console.log(this.contrastID)
      this.array=this.contrastID.split(",");
      // console.log(this.array);
      this.getGetMaterialss()
      this.getGetMaterials();
      
  }

  public async getGetMaterials() {        
    await this.MaterialsContrastService.GetMaterials(this.array).then((res: any) => {
      this.listMaterials= res; 
      console.log(this.listMaterials)
    
})
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

del(i){
  this.listMaterials.splice(i,1); 
  this.name.splice(i,1);
  this.model.splice(i,1);
  this.manu.splice(i,1);
}

}
