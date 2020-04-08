import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-tension-table',
  templateUrl: './static-tension-table.component.html',
  styleUrls: ['./static-tension-table.component.css']
})
export class StaticTensionTableComponent implements OnInit {

  public materialId

  //存放查到的试验数据详情
  public trialDataDetail = [{}] 
  visible = false;

  //添加数据表单
  public postParams = {
    materialTrialDataId:'',
    standard:'',
    serialNumber:0,
    sampleCode:'',
    length:0,
    width:0,
    thickness:0,
    diameter:0,
    gaugeDistance:0,
    nonProportionalExtendRatio:0,
    yieldStrength:0,
    tensileStrength:0,
    strainHardening:0,
    elongation:0,
    plasticStrainRatio:0,
    modulusOfElasticity:0,
    poissonRatio:0,
    maximumForce:0,
  }
table1=['执行标准','试验设备','标距(mm)']
table2=['样件编号','方向','试样厚度a(mm)','屈服强度Rp(MPa)','抗拉强度Rm(MPa)','应变硬化指数(n)','断后伸长率A(％)','塑性应变比γ(%)','弹性模量E(MPa)','泊松比μ','最大力Fm(kN)','烘烤硬化值(BH)','180°弯曲试验(弯曲压头直径D)','V型冲击试验温度(℃)','V型冲击试验吸收能量(KV2/J)']
table3=['130px','130px','130px','180px','180px','180px','180px','180px','180px','100px','180px','180px','180px','180px','180px']
table4=['sampleCode','direction','thickness','yieldStrength','tensileStrength','strainHardening','elongation','plasticStrainRatio','modulusOfElasticity','poissonRatio','maximumForce','BHValue','indenterDiameter','VImpactTemperature','VImpactEnergy']
table5=["standard","equipment","gaugeDistance"]
isVisible =false;
options;
  //抽屉
  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }
  contrastTable(params, des) {
        let data = [];
        let xData = [];
        for (const iterator of this.trialDataDetail) {
          data.push(iterator[params]);
          xData.push(iterator['sampleCode']);    
        }
        this.PlotPicture(data, xData,des);
      }
      handleOk(): void {
        console.log("Button ok clicked!");
        this.isVisible = false;
      }
    
    handleCancel(): void {
        console.log("Button cancel clicked!");
        this.isVisible = false;
      }
      public PlotPicture(data, xData, des) {
        this.isVisible = true;
        this.options = {
          title: {
            text: des,
            x: "center",
            y: "top"
          },
          xAxis: {
            type: "category",
            data: xData
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: data,
              type: "line"
            }
          ]
        };
      }
  
  constructor(
    public http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
      // console.log(this.materialId)

    this.GetTrialDataDetails()
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {    
    this.trialDataDetail = res
    console.log(this.trialDataDetail)
    }) 
  }

}
