import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-welding-picture',
  templateUrl: './welding-picture.component.html',
  styleUrls: ['./welding-picture.component.css']
})
export class WeldingPictureComponent implements OnInit {
  public materialId
  trialDataDetails
  option
  xData1 = []
  xData2 = []
  xData = []
  constructor(private router: Router,
    public http: HttpClient,
    private ApiService: ApiService,
  ) { }

  ngOnInit() {
    this.materialId = this.router
      .routerState.root.firstChild
      .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetailss()
  }
  public async GetTrialDataDetailss() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/weldingDataDetailItems/${materialId}`;
    await this.ApiService.getWeldingDataDetailItems(this.materialId)
      .then((res: any) => {
        this.trialDataDetails = res
        // console.log(this.trialDataDetail)
      })
    this.trialDataDetails.map(val => {
      this.xData.push(val.leftBoundaryElectric);
      this.xData.push(val.rightBoundaryElectric)
    })
    this.xData = [...new Set(this.xData)];
    // this.xData2 = [...new Set(this.xData2)];
    this.xData.sort((a, b) => {
      return Number(a) - Number(b);
    });
    // this.xData2.sort((a, b) => {
    //   return Number(a) - Number(b);
    // });

    // console.log(this.xData)
    this.PlotPicture(this.trialDataDetails, this.xData);
  }
  public PlotPicture(data, xData) {
    // data.map(item => {
    //   item.List.sort((a, b) => a.strain - b.strain);
    // });
    this.option = {
      title: {
        text: '可焊电流窗口'
      },

      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        data: xData,
        name: "焊接电流(kA)",
        type: "category",
        splitLine: {
          show: true,
        }
      },
      yAxis: { name: "焊接时间(ms)" },
      series: [],
      legend: {
        data: ["左边界", "右边界"],
        x: 'center',
      },
      grid: {
        x: 60,
        bottom: 20
      }
    };
    let temp1 = [];
    let temp2 = [];
    for (let a = 0; a < data.length; a++) {
      temp1.push([data[a].leftBoundaryElectric.toString(), data[a].weldingTimes]);
      temp2.push([data[a].rightBoundaryElectric.toString(), data[a].weldingTimes]);
    }
    temp1.sort((a, b) => { return Number(a[0]) - Number(b[0]) });
    temp2.sort((a, b) => { return Number(a[0]) - Number(b[0]) });
    console.log(temp1)
    this.option.series.push({
      symbolSize: 5,
      data: temp1,
      type: "line",
      name: "左边界"
    });
    console.log(temp2)
    this.option.series.push({
      symbolSize: 5,
      data: temp2,
      type: "line",
      name: "右边界"
    })


    // data.map(item => {
    //   temp = [];
    //   item.List.map(i => {
    //     temp.push( [(i.leftBoundaryElectric*1000).toFixed(4),i.stress]);
    //   });
    //   temp.sort((a,b)=>{return Number(a[0])-Number(b[0])});

  }
}
