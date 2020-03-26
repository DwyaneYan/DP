import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router ,ActivatedRoute,ParamMap} from '@angular/router';
import { switchMap,map } from 'rxjs/operators';
import { of, } from 'rxjs';
import {MaterialsContrastService} from './materials-contrast.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

listManufacturers = [];
nzOptions=[]
listMa=[]
list=[]
li=[]
listmodel=[]
limo=[]
options
one=[]
addlist=[]
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
      this.getGetManufacturers()

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
two=[]
th=[]
listMath=[]
lit=[]
  showModal(){
    this.checkbox=true
        for(let j=0;j<this.listManufacturers.length;j++) {    
          this.nzOptions[j]=
          {
            value: this.listManufacturers[j].id,
            label: this.listManufacturers[j].name, 
      }
      this.listMa[j]=[]
      this.list[j]=[]
      this.li[j]=[]
    this.pa[j]={manufactoryId:''}
 
      this.pa[j].manufactoryId=this.listManufacturers[j].id
      this.MaterialsContrastService.GetMater(this.pa[j])
      .then((res: any) => {
        this.listMa[j]= res.items;
      console.log(this.listMa[j])
      this.listMa[j].forEach(val=>this.list[j].push(val.name))
      this.li[j]=this.unique1(this.list[j])
      console.log(this.li[j])   
      this.th[j]=[]
      this.listMath[j]=[]
      this.lit[j]=[]
      this.pas[j]=[]
      this.limo[j]=[]
      for(let a=0;a<this.li[j].length;a++){
      this. two[j]=[]
      this.listMath[j][a]=[]
      this.lit[j][a]=[]
      this.limo[j][a]=[]
      this.pas[j][a]={manufactoryId:'',
      Name:''}
      this.pas[j][a].manufactoryId=this.listManufacturers[j].id
      this.pas[j][a].Name=this.li[j][a]
      this.MaterialsContrastService.GetMater(this.pas[j][a])
      .then((res: any) => {
        this.listMath[j][a] = res.items;
        this.listMath[j][a].forEach(val=>this.lit[j][a].push(val.model))
        this.limo[j][a]=this.unique1(this.lit[j][a])
        this.th[j][a]=[]
        for(let b=0;b<this.limo[j][a].length;b++){
          this.th[j][a][b]={
            value: this.limo[j][a][b],
          label: this.limo[j][a][b],
          isLeaf: true
          }
          
        }
        this. two[j][a]={
          value: this.li[j][a],
          label: this.li[j][a],
          children:this.th[j][a]
        }
        this.nzOptions[j].children=this.two[j]
      })     
      }    
       }) 
      }
  console.log(this.nzOptions);
  this.values=[]
}
  cac(){
    this.checkbox=false
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
public async getGetManufacturers() {
  await this.MaterialsContrastService.GetManufacturers().then((res: any) => {
    // console.log(res);
    this.listManufacturers = res.items;
    // console.log(this.listManufacturers)
  });
}
pa=[{manufactoryId: '', }]

pas=[]
pat={
  Name:'',  //材料名称
  materialType: '',  //材料分类
  manufactoryId: '',  //生产厂家
  model: "",  //型号规格
  maxModel: "", //最大型号规格
  minModel: "", //最小型号规格
  Strength:"",
  MaxStrenth: "", //最大屈服强度
  MinStrenth: "", //最小屈服强度
}
public async getGetMa() {
  await this.MaterialsContrastService.GetMater(this.pa).then((res: any) => {
    // console.log(res);
    this.listMa = res.items;
    this.listMa.forEach(val=>this.list.push(val.name))
    this.listMa.forEach(val=>this.listmodel.push(val.model))
    this.li=this.unique1(this.list)
    this.limo=this.unique1(this.listmodel)
    console.log(this.li)
    console.log(this.limo)
    // console.log(this.listManufacturers)
  });
}
// 数组去重
unique1(array){
  var n = []; //一个新的临时数组
  //遍历当前数组
  for(var i = 0; i < array.length; i++){
   //如果当前数组的第i已经保存进了临时数组，那么跳过，
   //否则把当前项push到临时数组里面
   if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
 }
 onChanges(values: string[]){
    console.log(values)
    // console.log(this.listManufacturers)
    this.pat.manufactoryId=values[0]
      this.pat.Name=values[1]
      this.pat.model=values[2]
    this.MaterialsContrastService.GetMater(this.pat)
      .then((res: any) => {
        this.addlist = res.items;   
        console.log(this.addlist)   
        this.array.push(this.addlist[0].id)
        console.log(this.array)
        this.getGetMaterialss()
      this.getGetMaterials();
      this.array.toString()
      console.log(this.array)
      window.history.pushState(null,null,`/contrast?materialids=${this.array}`);
      })
      this.checkbox=false
      
  }
}
