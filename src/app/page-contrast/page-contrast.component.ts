import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { PagePlatformComponent } from "../page-platform/page-platform.component";
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MaterialsContrastService } from "./materials-contrast.service";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: "app-page-contrast",
  templateUrl: "./page-contrast.component.html",
  styleUrls: ["./page-contrast.component.css"]
})
export class PageContrastComponent implements OnInit {
  viewAdd = false //添加推荐材料弹框
  valuetj = []
  StaticTension=[]//静态拉伸
  LowCycleFatigue = [];//低周疲劳
  ChemicalElement=[];//化学成分
  listItem = { 
    StaticTension: true ,
    LowCycleFatigue: true ,
    ChemicalElement:true}; // true表示有数据可不被隐藏
  listItemBlank = { 
    StaticTension: true,
    LowCycleFatigue: true ,
    ChemicalElement:true };
  listItemOr = { 
    StaticTension: true ,
    LowCycleFatigue: true ,
    ChemicalElement:true};
  listArr = [
    ["StaticTension", "yieldStrength"],
    ["LowCycleFatigue", "totalStrainAmplitude"],
    ["ChemicalElement","contentRatioC"]];
  pageConfiguration = [
    {
      name: "静态拉伸",
      key: "StaticTension",
      itemDes: [
        "执行标准",
        "屈服强度RP0.2(MPa)",
        "抗拉强度Rm(MPa)",
        "断后伸长率A(％)",
        "应变硬化指数(n90)",
        "塑性应变比γ(%)",
        "弹性模量E(MPa)",
        "泊松比μ",
        "最大力Fm(kN)",
        "烘烤硬化值(BH)",
      ],
      item: [
        "standard",
        "yieldStrength",
        "tensileStrength",
        "strainHardening",
        "elongation",
        "plasticStrainRatio",
        "modulusOfElasticity",
        "poissonRatio",
        "maximumForce",
        "bhValue"
      ]
    },
    {
      name: "低周疲劳",
      key: "LowCycleFatigue",
      itemDes: [
        "总应变幅(Δεt/2，mm/mm)",
        "塑性应变幅(Δεp/2，mm/mm)",
        "弹性应变幅(Δεe/2，mm/mm)",
        "失效循环数(Nf，次)",
        "循环应力幅(Δσ/2，MPa)",
        "试验频率(Hz)",
      ],
      item: [
        "totalStrainAmplitude",
        "plasticStrainAmplitude",
        "elasticStrainAmplitude",
        "failureCycleTimes",
        "cycleStressAmplitude",
        "testFrequency",
      ]
    },
    {
      name: "化学成分",
      key: "ChemicalElement",
      itemDes: [
        "C",
        "Si",
        "Mn",
        "P",
        "S",
      ],
      item: [
        "contentRatioC",
        "contentRatioSi",
        "contentRatioMn",
        "contentRatioP",
        "contentRatioS"
      ]
    }
  ];


  fields = [
    { key: "hide", value: "隐藏空白项", checked: false, id: "hideItem" },
    { key: "show", value: "标示全部项", checked: true, id: "showItem" }
  ];
  name = []; //牌号
  model = []; //型号规格
  manu = []; //厂家
  reelNumber = []//卷号
  // checkbox = false;
  // values = [];
  listManufacturers = [];
  nzOptions = [];//可选项数据
  listMa = [];
  list = [];
  li = [];
  listmodel = [];
  limo = [];
  options;
  one = [];
  addlist = [];

  visible = false;
  isVisible =false;
  options2;

  constructor(
    private router: Router,
    private routerinfo: ActivatedRoute,
    private MaterialsContrastService: MaterialsContrastService,
    private PagePlatformComponent:PagePlatformComponent,
    private ApiService: ApiService,
    private message: NzMessageService
  ) {}
  contrastID = '';//查询参数
  array = []; //对比材料id数组
  ngOnInit() {
    $("nz-table")
      .addClass("vertical")
      .find("th, td")
      .wrapInner("<div>");
    //$('table').addClass('vertical');//数字会变垂直，不能用
    this.contrastID = this.routerinfo.snapshot.queryParams["materialids"];
    if(this.contrastID){
    this.array = this.contrastID.split(",");}
    else{this.array=[]}
    this.getGetMaterialss();
    this.getGetMaterials();
    // this.getGetManufacturers();
    // this.navScroll();
  }
// 请求对比数据
 getGetMaterials() {
    // if(this.array.length!=0) {
       this.MaterialsContrastService.GetMaterials(this.array).then((res: any) => {
      this.StaticTension = res; 
      console.log(this.array.length,this.StaticTension)
});
     this.MaterialsContrastService.LowCycleFatigue(this.array).then((res: any) => {
    this.LowCycleFatigue= res; 
});

 this.MaterialsContrastService.ChemicalElement(this.array).then((res: any) => {
  this.ChemicalElement= res;

})
    // this.changeStatus(this.listArr);

  // }
  // else{
  //   this.StaticTension=[]
  //   // console.log(this.array,this.StaticTension.length)
  // }

}
// reelNumber=[]
//表头数据，调了多次接口，很慢
  public  getGetMaterialss() {
    // for (var i = 0; i < this.array.length; i++) {
    //   let ob = {Id:this.array[i]}
       this.MaterialsContrastService.getMaterialsByIds(this.array).then(
        (res: any) => {
          // console.log(res.items)
          let comparisonMaterialList = res;
          comparisonMaterialList.map(val=>{
            this.name.push(val.name)
            this.manu.push(val.manufactoryName);         //暂时没有返回生产厂家名，只有厂家id
            this.model.push(val.model);
            this.reelNumber.push(val.reelNumber)
          })
          console.log(this.name,this.manu,this.model,this.reelNumber)
          // this.name[i] = res.items[0].name; 
          // this.manu[i] = res.items[0].manufactoryName;          
          // this.model[i] = res.items[0].model;
          // this.reelNumber[i]=res.items[0].reelNumber
        }
      );
    // }
  }
  two = [];
  th = [];
  listMath = [];
  lit = [];
  navScroll() {
    window.addEventListener("scroll", function() {
      // 封装类名函数集：判断、移除、增加、获取（简单粗暴版）；
      function removeClass(obj, cls) {
        if (obj.className.indexOf(cls) != -1) {
          obj.classList.remove(cls);
        }
      }
      function addClass(obj, cls) {
        if (obj.className.indexOf(cls) == -1) {
          obj.classList.add(cls);
        }
      }

      let pos = document.documentElement.scrollTop;
      // if (pos > 300) {
      //   document.querySelector(".navUl").style.display = "block";
      // } else {
      //   document.querySelector(".navUl").style.display = "none";
      // }
      var menus = document.getElementById("navList").getElementsByTagName("li");
      var items = document
        .getElementById("con")
        .querySelectorAll(".js-content") as NodeListOf<HTMLElement>;
      var currentId = "";

      for (var i = 0; i < items.length; i++) {
        var _item = items[i];
        var _itemTop = _item.offsetTop;
        if (pos > _itemTop - 400) {
          currentId = _item.id;
        } else {
          break;
        }
      }
      if (currentId) {
        for (var j = 0; j < menus.length; j++) {
          var _menu = menus[j];
          // href属性获取的是整个link，需以#为界截除获取最后一个元素；
          var _href = _menu.getAttribute("data-id");
          if (_href != currentId) {
            removeClass(_menu, "ant-menu-item-selected");
          } else {
            addClass(_menu, "ant-menu-item-selected");
          }
        }
      }
    });
  }
  clickNav(value) {
    var _id = document.getElementById(value);
    window.scrollTo(0, _id.offsetTop);
  }
  three
d =[]
e =[]
f =[]
g=[]

  showModal() {
    this.viewAdd = true
    this.valuetj = []
this.ops()

  }
  ops(){
    this.ApiService.GetManufacturers().then((res: any) => {
      let listManufacturers = res.items;
      let temp = [];//可选项数据列表
      listManufacturers.map(val=>{temp.push({value:val.id,label:val.name})})
      let lengthTemp = temp.length
        this.ApiService.GetMater({}).then((res:any)=>{
          let allMaterials = res.items
  for(let a= 0;a<lengthTemp;a++){
    temp[a].children = []
    let name = allMaterials.filter(item=>item.manufactoryId == temp[a].value) //牌号数组,牌号会重复
   console.log(name)
     let nameAfter = this.PagePlatformComponent.uniqueArr(name,'name') //牌号去重
   let lengthName = nameAfter.length
  //  if(lengthName){
   console.log(name,nameAfter)
   nameAfter.map(val=>temp[a].children.push({value:val.name,label:val.name}))
    console.log(temp[a].children)
  for(let b= 0;b<lengthName;b++){
    temp[a].children[b].children = []
    let model = allMaterials.filter(item=>item.manufactoryId == temp[a].value && item.name == nameAfter[b].name) //型号规格数组，重复
    let modelAfter = this.PagePlatformComponent.uniqueArr(model,'model') //型号规格去重
   console.log(model,modelAfter)
    let lengthModel = modelAfter.length
    modelAfter.map(val=>temp[a].children[b].children.push({value:val.model,label:val.model}))
   console.log(temp[a].children[b].children)
    for(let c = 0;c<lengthModel;c++){
      temp[a].children[b].children[c].children = []
      let reelNumber = allMaterials.filter(item=>item.manufactoryId == temp[a].value && item.name == nameAfter[b].name && item.model == modelAfter[c].model) //卷号数组，重复
      let reelNumberAfter = this.PagePlatformComponent.uniqueArr(reelNumber,'reelNumber') //卷号去重
   console.log(2111,reelNumber,reelNumberAfter)
   // let lengthreelNumber = reelNumberAfter.length
      reelNumberAfter.map(val=>temp[a].children[b].children[c].children.push({value:val.reelNumber,label:val.reelNumber,isLeaf: true}))
   console.log(temp[a].children[b].children[c])
  
    }
  
  }
// }
// else{
//   temp[a].children = undefined
// }
  }
  this.nzOptions = temp
  console.log(this.nzOptions)
        })
      
    })
  
  }
  refreshStatus(value, e): void {
    if (value == "hideItem" && e == true) {
      // 点击隐藏
      this.hideItem();
    } else if (value == "hideItem" && e == false) {
      // 点击取消隐藏
      //显示全部
      this.showItem();
    }
    if (value == "showItem" && e == true) {
      // 点击显示全部
      // 点击隐藏
      this.showItem();
    } else if (value == "showItem" && e == false) {
      // 再次点击，不做操作
    }
    this.fields.forEach(data => {
      if (data.id != value) {
        data.checked = false;
      }
    });

  }
  // cac() {
  //   this.checkbox = false;
  // }
  // showo(value) {

  // }
  hideItem() {
    this.listItemBlank = this.listItem;
  }
  showItem() {
    this.listItemBlank = this.listItemOr;
  }

  del(i) {
    for(let j=0;j<this.listArr.length;j++){
      this[this.listArr[j][0]].splice(i, 1);
    }  
    this.name.splice(i, 1);
    this.model.splice(i, 1);
    this.manu.splice(i, 1);
    this.reelNumber.splice(i, 1);
    this.array.splice(i, 1).toString();
    this.changeStatus(this.listArr);
    console.log(this.array);
    window.history.pushState(null, null, `/contrast?materialids=${this.array}`);
  }
  changeStatus(arr) {
    let length = this.StaticTension.length;
    for (const item of arr) {
      let temp = 0;
      for (let index = 0; index < length; index++) {
        if (this[item[0]][index][item[1]] != null) {
          temp++;
        }
        temp >= 2
          ? (this.listItem[item[0]] = true)
          : (this.listItem[item[0]] = false);
      }
    }
  }

  // 
  pat = {
    Name: "", //材料名称
    ManufactoryId: "", //生产厂家
    Model: "", //型号规格
    ReelNumber:'',//卷号,
    type:"",
    url:""
  };

  // 字符串数组去重
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


  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }
  fenge(arry,p){
    let arry1=arry.toString().split(p)
    return arry1
  }
  contrastStaticTension(param,des,trialType){
   
      let data = [];
      let xData = [];
      console.log(this[trialType])
      this[trialType].forEach((iterator,i,array) => {
        data.push(iterator[param]);
        xData.push(`${this.name[i]},
        ${this.model[i]},
        ${this.manu[i]},
        ${this.reelNumber[i]}
        `)
      })
    this.PlotPicture(data, xData, des);
  }
  contrastLowCycleFatigue(param,des){

      let data = [];
      let xData = [];
      this.LowCycleFatigue.forEach((iterator,i,array) => {
        data.push(iterator[param]);
        xData.push(this.name[i])
      })
    this.PlotPicture(data, xData, des);
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
            data: xData,
            "axisLabel":{
              interval: 0
            }
      
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: data,
              type: "line",
              // 显示数值
              itemStyle : { normal: {label : {show: true}}}
            }
          ]
        };
      }
    
  handleOk(): void {
  //     console.log("Button ok clicked!");
      this.isVisible = false;
    }
    
  handleCancel(): void {
  //     console.log("Button cancel clicked!");
      this.isVisible = false;
    }
  handleCanceltj(){
this.viewAdd = false;
this.valuetj = []
  }
  handleOkdb(){
    // this.pat.ManufactoryId = this.valuetj[0];
    // this.pat.Name = this.valuetj[1];
    // this.pat.Model = this.valuetj[2];
    // this.pat.ReelNumber =this.valuetj[3];
    if(this.valuetj[0]){
    this.pat.type = 'tszf'
    this.pat.url = `?manufactoryId=${this.valuetj[0]}&name=${encodeURIComponent(this.valuetj[1])}&model=${this.valuetj[2]}&reelNumber=${this.valuetj[3]}`
    // this.name =[];
    // this.model =[];
    // this.manu=[];
    // this.reelNumber= []
    // console.log(this.pat)
    this.ApiService.GetMater(this.pat).then((res: any) => {
      // console.log(res)
      if(res.items.length){
      this.addlist = res.items;
      this.array.push(this.addlist[0].id);
      // this.getGetMaterialss();
      this.name.push(this.addlist[0].name);
      this.model.push(this.addlist[0].model);
      this.manu.push(this.addlist[0].manufactoryName)
      this.reelNumber.push(this.addlist[0].reelNumber);
      this.getGetMaterials();
      this.array.toString();
      window.history.pushState(
        null,
        null,
        `/contrast?materialids=${this.array}`
      );
      }
      else{
        this.message.info('未找到材料');
      }
     this.viewAdd = false;
    });
    // this.valuetj = []
  }
  else{
    this.viewAdd = false;
    // this.valuetj = []
  }
  }
}
