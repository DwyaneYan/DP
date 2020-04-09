import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  @Input() materialId;

  public params = {
    Id: '', 
  }

  //存放
  public baseInfo
  mater = []

  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit() {
    // console.log(this.materialId)
    this.GetBaseInfo()
    
  }

  public async GetBaseInfo(){
    let params= {
      Id: '', 
    }
    params.Id = this.materialId
    let api = "http://localhost:60001/api/hangang/material/materials";
    await this.http.get(api,{params})
    .toPromise()
    .then((res:any)=>{
      this.baseInfo = res.items;
      console.log(this.baseInfo)
    })
    if(this.baseInfo[0].maxModel!=null){
      this.mater.push({
        name:this.baseInfo[0].name,
        manufacture:this.baseInfo[0].manufactoryName,
        thickness:this.baseInfo[0].minModel+"-"+this.baseInfo[0].maxModel,
        date:this.baseInfo[0].date,
      })

    }else{
      this.mater.push({
        name:this.baseInfo[0].name,
        manufacture:this.baseInfo[0].manufactoryName,
        thickness:this.baseInfo[0].minModel,
        date:this.baseInfo[0].date,
      })
    }
    // console.log(this.baseInfo)
    
    this.checkvalue.emit(this.mater[0].name);
  }
  @Output()//与@input相反
  checkvalue = new EventEmitter<any>();
}
