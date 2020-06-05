import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { MaterialsContrastService } from "./materials-contrast.service";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";
@Component({
  selector: "app-page-contrast",
  templateUrl: "./page-contrast.component.html",
  styleUrls: ["./page-contrast.component.css"]
})
export class PageContrastComponent implements OnInit {
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
  name = [];
  model = [];
  manu = [];
  checkbox = false;
  values = [];
  listManufacturers = [];
  nzOptions = [];
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
    private MaterialsContrastService: MaterialsContrastService
  ) {}
  contrastID;
  array = [];
  ngOnInit() {
    $("nz-table")
      .addClass("vertical")
      .find("th, td")
      .wrapInner("<div>");
    //$('table').addClass('vertical');//数字会变垂直，不能用
    this.contrastID = this.routerinfo.snapshot.queryParams["materialids"];
    if(this.contrastID.length>0){
    this.array = this.contrastID.split(",");}
    else{this.array=[]}
    this.getGetMaterialss();
    this.getGetMaterials();
    this.getGetManufacturers();
    this.navScroll();
  }
// 请求对比数据
  public async getGetMaterials() {
    if(this.array.length!=0) {
      await this.MaterialsContrastService.GetMaterials(this.array).then((res: any) => {
      this.StaticTension= res; 
      console.log(this.array.length,this.StaticTension)
});
    await this.MaterialsContrastService.LowCycleFatigue(this.array).then((res: any) => {
    this.LowCycleFatigue= res; 
});

await this.MaterialsContrastService.ChemicalElement(this.array).then((res: any) => {
  this.ChemicalElement= res;

})
    this.changeStatus(this.listArr);

  }
  else{
    this.StaticTension=[]
    console.log(this.array,this.StaticTension.length)
  }

}
reelNumber=[]
  public async getGetMaterialss() {
    for (var i = 0; i < this.array.length; i++) {
      await this.MaterialsContrastService.GetMaterialss(this.array[i]).then(
        (res: any) => {
          console.log(res.items)
          this.name[i] = res.items[0].name; 
          this.manu[i] = res.items[0].manufactoryName;          
          this.model[i] = res.items[0].model;
          this.reelNumber[i]=res.items[0].reelNumber
        }
      );
    }
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
    this.checkbox = true;
    for (let j = 0; j < this.listManufacturers.length; j++) {
      this.nzOptions[j] = {
        value: this.listManufacturers[j].id,
        label: this.listManufacturers[j].name
      };
      this.listMa[j] = [];
      this.list[j] = [];
      this.li[j] = [];//每个厂家的牌号
      this.pa[j] = { manufactoryId: "" };
      this.pa[j].manufactoryId = this.listManufacturers[j].id;
      this.MaterialsContrastService.GetMater(this.pa[j]).then((res: any) => {
        this.listMa[j] = res.items;
        this.listMa[j].forEach(val => this.list[j].push(val.name));
        this.li[j] = this.unique1(this.list[j]);//每个厂家的牌号
        this.th[j] = [];
        this.listMath[j] = [];
        this.lit[j] = [];
        this.pas[j] = [];
        this.limo[j] = [];//每个牌号的型号规格
        this.d[j]=[]
        this.e[j]=[]
        this.f[j]=[]
        this.g[j]=[] 
        for (let a = 0; a < this.li[j].length; a++) {
          this.two[j] = [];
          this.listMath[j][a] = [];
          this.lit[j][a] = [];
          this.limo[j][a] = [];//每个牌号的型号规格
          this.d[j][a]=[]
        this.e[j][a]=[]
        this.f[j][a]=[]
        this.g[j][a]=[]
          this.pas[j][a] = { manufactoryId: "", Name: "" };
          this.pas[j][a].manufactoryId = this.listManufacturers[j].id;
          this.pas[j][a].Name = this.li[j][a];
          this.MaterialsContrastService.GetMater(this.pas[j][a]).then(
            (res: any) => {
              this.listMath[j][a] = res.items;             
              this.listMath[j][a].forEach(val =>{
               this.lit[j][a].push(val.model)}
              );
              this.limo[j][a] = this.unique1(this.lit[j][a]);   //每个牌号的型号规格         
             this.th[j][a] = [];
              for (let b = 0; b < this.limo[j][a].length; b++) {
                this.f[j][a][b]=[]
                this.e[j][a][b]=[]
                this.g[j][a][b]=[]
                this.d[j][a][b]={ manufactoryId: "", Name: "" ,model:2};
                this.d[j][a][b].manufactoryId = this.listManufacturers[j].id;
                this.d[j][a][b].Name = this.li[j][a];
                this.d[j][a][b].model = this.limo[j][a][b];
              this.MaterialsContrastService.GetMater(this.d[j][a][b]).then((res: any) => {
                this.e[j][a][b] = res.items;
                this.e[j][a][b].forEach(val =>{
                  this.f[j][a][b].push(val.reelNumber)}
                 );
                 this.f[j][a][b]=this.unique1(this.f[j][a][b])
for(let x=0;x<this.f[j][a][b].length;x++){
  this.g[j][a][b][x]={
    value: this.f[j][a][b][x],
    label: this.f[j][a][b][x],
    isLeaf: true
  };
}
this.th[j][a][b] = {
  value: this.limo[j][a][b],
  label: this.limo[j][a][b],
  children:this.g[j][a][b] ,
};

              this.two[j][a] = {
                value: this.li[j][a],
                label: this.li[j][a],
                children: this.th[j][a]
              };
              this.nzOptions[j].children = this.two[j];
            })
            }
            }
          );
        }
      });
    }
    console.log(this.nzOptions);
    this.values = [];
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
  cac() {
    this.checkbox = false;
  }
  showo(value) {

  }
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
  public async getGetManufacturers() {
    await this.MaterialsContrastService.GetManufacturers().then((res: any) => {
      // console.log(res);
      this.listManufacturers = res.items;
      // console.log(this.listManufacturers)
    });
  }
  pa = [{ manufactoryId: "" }];

  pas = [];
  pat = {
    Name: "", //材料名称
    materialType: "", //材料分类
    manufactoryId: "", //生产厂家
    model: "", //型号规格
    maxModel: "", //最大型号规格
    minModel: "", //最小型号规格
    Strength: "",
    MaxStrenth: "", //最大屈服强度
    MinStrenth: "" ,//最小屈服强度
    ReelNumber:''
  };
  public async getGetMa() {
    await this.MaterialsContrastService.GetMater(this.pa).then((res: any) => {
      // console.log(res);
      this.listMa = res.items;
      this.listMa.forEach(val => this.list.push(val.name));
      this.listMa.forEach(val => this.listmodel.push(val.model));
      this.li = this.unique1(this.list);
      this.limo = this.unique1(this.listmodel);
      
      // console.log(this.listManufacturers)
    });
  }
  // 数组去重
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
  onChanges(values: string[]) {
    console.log(values);
    this.pat.manufactoryId = values[0];
    this.pat.Name = values[1];
    this.pat.model = values[2];
    this.pat.ReelNumber =values[3];
    this.MaterialsContrastService.GetMater(this.pat).then((res: any) => {
      this.addlist = res.items;
      this.array.push(this.addlist[0].id);
      this.getGetMaterialss();
      this.getGetMaterials();
      this.array.toString();
      window.history.pushState(
        null,
        null,
        `/contrast?materialids=${this.array}`
      );
    });
    this.checkbox = false;
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
      this[trialType].forEach((iterator,i,array) => {
        data.push(iterator[param]);
        xData.push(this.name[i])
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
    
  handleOk(): void {
      console.log("Button ok clicked!");
      this.isVisible = false;
    }
    
  handleCancel(): void {
      console.log("Button cancel clicked!");
      this.isVisible = false;
    }
}
