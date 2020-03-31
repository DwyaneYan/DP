import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dent-resistance-table',
  templateUrl: './dent-resistance-table.component.html',
  styleUrls: ['./dent-resistance-table.component.css']
})
export class DentResistanceTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  table=[{
    one:["执行标准","试验设备"],
    key:["standard","equipment",]
},
{
  one:["初始刚度(N/mm)","0.1mm可见凹痕载荷(N)"],
  key:["originalRigidity","visibleDentLoad"]
,
},
]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/dentResistanceDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }

}
