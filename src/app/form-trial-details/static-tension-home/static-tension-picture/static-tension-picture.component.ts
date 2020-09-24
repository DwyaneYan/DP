import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-static-tension-picture',
  templateUrl: './static-tension-picture.component.html',
  styleUrls: ['./static-tension-picture.component.css']
})
export class StaticTensionPictureComponent implements OnInit {
  materialId = ''
  one = []
  trialDataDetail = [] //应力应变数据对
  trialDataDetails = [] //静态拉伸数据对
  public dataList1 = []
  public dataList2 = []
  public dataList3 = []
  //echarts绘图
  engineering = {}      //工程应力应变实例
  trueStressStrain = {}    //真应力应变实例
  constructor(
    public http: HttpClient,
    private router: Router,
    private ApiService: ApiService,
  ) { }
  ngOnInit() {
    this.materialId = this.router
      .routerState.root.firstChild
      .snapshot.paramMap.get('materialId');
    this.ApiService.getStaticTensionDataDetails(this.materialId)
      .then((res: any) => {
        this.trialDataDetails = res
      })
    this.GetTrialDataDetails();
  }

  public async GetTrialDataDetails() {
    let xData = [];
    await this.ApiService.getStaticTensionDataDetailStressStrains(this.materialId)
      .then((res: any) => {
        this.trialDataDetail = res
      })
      console.log( this.trialDataDetail)
      console.log( this.trialDataDetails)
    let arry = []
    let xData2 = []
    this.trialDataDetail.map(mapItem => {
      xData.push((mapItem.strain * 10000).toFixed(7));
      xData2.push((mapItem.realStrain * 10000).toFixed(7));
      if (arry.length == 0) {
        arry.push({ staticTensionDataDetailId: mapItem.staticTensionDataDetailId, List: [mapItem] })
      } else {
        let res = arry.some(item => {//判断相同staticTensionDataDetailId，有就添加到当前项
          if (item.staticTensionDataDetailId == mapItem.staticTensionDataDetailId) {
            item.List.push(mapItem)
            return true
          }
        })
        if (!res) {//如果没找相同staticTensionDataDetailId添加一个新对象
          arry.push({ staticTensionDataDetailId: mapItem.staticTensionDataDetailId, List: [mapItem] })
        }
      }
    })
    console.log(arry)

//静态拉伸批量数据必须确保25个,带头带中带尾可以数量任意
    for (let a = 25; a < this.trialDataDetails.length;a++) {
      this.one.push(this.trialDataDetails[a])
    }
    let ids = [];
    this.one.map(val=>ids.push(val.id))
    arry.sort((prev, next) => {
      return ids.indexOf(prev.staticTensionDataDetailId) - ids.indexOf(next.staticTensionDataDetailId)
    })

    for (let a = 0; a < this.one.length; a++) {
      arry[a].sampleCode = this.one[a].sampleCode;
      arry[a].direction = this.one[a].direction
    }
    xData = [...new Set(xData)];
    xData2 = [...new Set(xData2)];
    xData.sort((a, b) => {
      return Number(a) - Number(b);
    });
    xData2.sort((a, b) => {
      return Number(a) - Number(b);
    });
    this.engineering = this.classdata("工程应力应变数据对", "应变", "应力", xData, arry, "strain", "stress")
    this.trueStressStrain = this.classdata("真应力应变数据对", "真应变", "真应力", xData2, arry, "realStrain", "realStress")
  }

  classdata(name, p1, p2, da, datas, p3, p4) {
    let option = {
      // width: '550',
      title: {
        text: name
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: "white",
        formatter: function (params) { //在此处直接用 formatter 属性
          console.log(params)  // 打印数据
          let b = []
          let index = [];
          let colorList = [];
          params.forEach(val => { b.push((val.data)[1]); index.push(val['seriesName']); colorList.push(val['color']) })
          let text = ""
          for (let c = 0; c < b.length; c++) {
            text += index[c] + ' ' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;' +
              'border: solid 1px;border-color:' + colorList[c] + '"></span>' + " : " + b[c] + "<br/>"
          }
          return `  <div style="color: black;">${p1}：${((params[0].axisValueLabel) / 10000).toFixed(7)}</div>   
        <div style="color: black;">${p2}：<br/><a style="color: black;">${text}</a></div>  
           `
        }
      },
      xAxis: {
        data: da,
        type: "category",
        axisLabel: {
          formatter: function (val) {
            return (val / 10000).toFixed(7);
          }
        }
      },
      yAxis: {},
      series: [],
      grid: {
        top:'120px',
        // height:''
        bottom: '50px'
      },
      legend: {
        data: [],
        orient: 'horizontal',
        left: '30px',
       top: '40px',

      }
    };
    let temp2 = [];
    datas.map(item => {
      temp2 = [];
      item.List.map(i => {
        temp2.push([(i[p3] * 10000).toFixed(7), i[p4]]);
      });
      temp2.sort((a, b) => { return Number(a[0]) - Number(b[0]) });
      if (name == "真塑性应变真应力延伸到1" || name == "真塑性应变真应力") {
        option.series.push({
          symbolSize: 5,
          data: temp2,
          type: "line",
          name: item.highSpeedStrechDataDetailId,
        })
        option.legend.data.push(item.highSpeedStrechDataDetailId)
      } else {
        option.series.push({
          symbolSize: 5,
          data: temp2,
          type: "line",
          name: item.sampleCode + "-" + item.direction,
        })
        option.legend.data.push(item.sampleCode + "-" + item.direction);
      }

    })
    return option;
  }

}

