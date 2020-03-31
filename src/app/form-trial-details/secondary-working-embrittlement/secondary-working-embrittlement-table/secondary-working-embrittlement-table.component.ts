import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-secondary-working-embrittlement-table',
  templateUrl: './secondary-working-embrittlement-table.component.html',
  styleUrls: ['./secondary-working-embrittlement-table.component.css']
})
export class SecondaryWorkingEmbrittlementTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  trialDataDetails
  serial=[]
  serials=[]
  serialss=[]
  table=[{
    one:["执行标准","试验设备"],
    key:["standard","equipment",]
},
{
  one:["试验温度℃"],
  key:["temperature"]
,
},
]
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/bendingDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/secondaryWorkingEmbrittlementDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
      for(let a=0;a<this.trialDataDetails.length;a++){
        this.serial.push(this.trialDataDetails[a].serialNumber)
      }
      this.serials=this.unique1(this.serial)
      for(let b=0;b<this.trialDataDetails.length/this.serials.length;b++){      
        for(let c=b*this.serials.length;c<(b+1)*this.serials.length;c++){
          this.serialss[b].push(this.trialDataDetails[c].expansionType);
        }
      }
    })    
  }
  unique1(array) {
    var n = []; //一个新的临时数组
    //遍历当前数组
    for (var i = 0; i < array.length; i++) {
      //如果当前数组的第i已经保存进了临时数组，那么跳过，
      //否则把当前项push到临时数组里面
      if (n.indexOf(array[i]) == -1) n.push(array[i]);
    }
    return n;
  }
}
