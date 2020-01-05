import { Component, OnInit, Input } from '@angular/core';
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
      this.baseInfo = res.items
    })
    console.log(this.baseInfo)
    this.mater.push({
      name:this.baseInfo[0].name,
      manufacture:this.baseInfo[0].manufactoryName,
      thickness:this.baseInfo[0].model,
      date:this.baseInfo[0].date,
    })
  }

}
