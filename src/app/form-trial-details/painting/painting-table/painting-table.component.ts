import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-painting-table',
  templateUrl: './painting-table.component.html',
  styleUrls: ['./painting-table.component.css']
})
export class PaintingTableComponent implements OnInit {
  public materialId
  table=[{
    name:"trialDataDetailsssssssss",
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"],
    nzScroll :{x: '1200px' },
    method:"getPaintingDataDetails",
    loading:true
    },
    {
      name:"trialDataDetail",
      loading:true,
      one:["磷化膜结晶尺寸","磷化膜覆盖率"],
      key:["sizeText","coverRatio"],
      nzScroll :{x: '400px' },
      method:"getPaintingDataDetailPhosphatingItems"
    },
    {
      loading:true,
      name:"trialDataDetails",
      one:["面积（m2）","初始重量（g）","试验后重量（g）","膜重（g/m2）"],
      key:["area","originalWeight","afterWeight","membraneWeight"],
      nzScroll :{x: '800px' },
      method:"getPaintingDataDetailMembraneWeightItems"

    },
    {
      loading:true,
      name:"trialDataDetailss",
      one:["Ip（s-1）","IH（s-1）","P比"],
      key:["ip","ih","ratio"],
      nzScroll :{x: '600px' },
      method:"getPaintingDataDetailPRatioItems"

    },
    {
      loading:true,
      name:"trialDataDetailsssss",
      title:"电泳漆膜粗糙度",
      one:["Ra（μm）","Rz（μm）"],
      key:["raOne","raTwo","raThree","rzOne","rzTwo","rzThree"],
      width:['120px', '120px','120px','120px','120px','120px'],
      method:"getPaintingDataDetailRoughnessItems"

    },
    {
      loading:true,
      name:"trialDataDetailsss",
      title:"电泳漆膜厚度（μm）",
      key:["pointThickOne","pointThickTwo","pointThickThree"],
      width:['120px', '120px','120px'],
      method:"getPaintingDataDetailElectrophoreticItems"
      },
      {
      loading:true,
      name:"trialDataDetailsssssss",
      title:"附着力",
      key:["pointAdhesionOne","pointAdhesionTwo","pointAdhesionThree"],
      width:['120px', '120px','120px'],
      method:"getPaintingDataDetailAdhesionItems"
      },
      {
      loading:true,
      name:"trialDataDetailssssssss",
      title:"耐湿热性能",
      key:["pointOne","pointTwo","pointThree"],
      width:['120px', '120px','120px'],
      method:"getPaintingDataDetailDampHeatItems"
      },
      {
        loading:true,
        name:"trialDataDetailssss",
        title:"电泳漆膜铅笔硬度",
        key:"pointHardness",
        method:"getPaintingDataDetailHardnessItems"
        },
        {
        loading:true,
        name:"trialDataDetailssssss",
        title:"抗石击性能",
        key:"pointStrength",
        method:"getPaintingDataDetailHitResistanceItems"
        }
  ]
  trialDataDetail = []  // 磷化膜
  trialDataDetails = []  // 膜重
  trialDataDetailss = [] // P比
  trialDataDetailsss = [] // 电泳漆膜厚度
  trialDataDetailssss = []// 电泳漆膜硬度
  trialDataDetailsssss = [] // 电泳漆膜粗糙度
  trialDataDetailssssss = [] // 抗石击性能
  trialDataDetailsssssss = [] // 附着力
  trialDataDetailssssssss = [] // 耐湿热
  trialDataDetailsssssssss = [] // detail表
  constructor( private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService,
    ) { 
      this.route.pathFromRoot[1].params.subscribe(params => {
        this.materialId = params['materialId'];
        })
    }

  ngOnInit() {
    // this.GetTrialDataDetails();
    // this.GetTrialDataDetailss();
    // this.GetTrialDataDetailsss();
    // this.GetTrialDataDetailssss();
    // this.GetTrialDataDetailsssss();
    // this.GetTrialDataDetailssssss();
    // this.GetTrialDataDetailsssssss();
    // this.GetTrialDataDetailssssssss();
    // this.GetTrialDataDetailsssssssss();
    // this.GetTrialDataDetailssssssssss();
    let length = this.table.length
    for(let i = 0; i<length;i++){
      this.ApiService[this.table[i].method](this.materialId).then((res: any) => {
        this[this.table[i].name] = res;
        this.table[i].loading = false
        if(i == 0 && res.length){
          this[this.table[i].name][0].dates =  this.ApiService.handleTime(this[this.table[i].name][0].dates);
          this[this.table[i].name][0].dateEnds = this.ApiService.handleTime(this[this.table[i].name][0].dateEnds);
      }
      })    
    }
  }
  // 磷化膜
  // public async GetTrialDataDetails() {
  //   await this.ApiService.getPaintingDataDetailPhosphatingItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetail = res
  //   })    
  // }
  // // 膜重
  // public async GetTrialDataDetailss() {
  //   await this.ApiService.getPaintingDataDetailMembraneWeightItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetails = res
  //   })    
  // }
  // // P比
  // public async GetTrialDataDetailsss() {
  //   await this.ApiService.getPaintingDataDetailPRatioItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailss = res
  //     console.log(this.trialDataDetailss)
  //   })    
  // }
  // // 电泳漆膜厚度
  // public async GetTrialDataDetailssss() {
  //   await this.ApiService.getPaintingDataDetailElectrophoreticItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailsss = res
  //   })    
  // }
  // // 电泳漆膜硬度
  // public async GetTrialDataDetailsssss() {
  //   await this.ApiService.getPaintingDataDetailHardnessItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailssss = res
  //   })    
  // }
  // // 电泳漆膜粗糙度
  // public async GetTrialDataDetailssssss() {
  //   await this.ApiService.getPaintingDataDetailRoughnessItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailsssss = res
  //   })    
  // }
  // // 抗石击性能
  // public async GetTrialDataDetailsssssss() {
  //   await this.ApiService.getPaintingDataDetailHitResistanceItems( this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailssssss = res
  //   })    
  // }
  // // 附着力
  // public async GetTrialDataDetailssssssss() {
  //   await this.ApiService.getPaintingDataDetailAdhesionItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailsssssss = res
  //   })    
  // }
  // // 耐湿热
  // public async GetTrialDataDetailsssssssss() {
  //   await this.ApiService.getPaintingDataDetailDampHeatItems(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailssssssss = res
  //   })    
  // }
  // // detail表
  // public async GetTrialDataDetailssssssssss() {
  //   await this.ApiService.getPaintingDataDetails(this.materialId)
  //   .then((res: any) => {
  //     this.trialDataDetailsssssssss = res
  //     if(this.trialDataDetailsssssssss.length){
  //         this.trialDataDetailsssssssss[0].dates =  this.ApiService.handleTime(this.trialDataDetailsssssssss[0].dates);
  //         this.trialDataDetailsssssssss[0].dateEnds = this.ApiService.handleTime(this.trialDataDetailsssssssss[0].dateEnds);
  //     }
  //   })    
  // }
}
