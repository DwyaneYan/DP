import { Component, OnInit,ViewChildren,QueryList } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";
import { MaterialServiceService } from "./material-service.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FormMaterialDbBackgroundComponent } from "../form-material-db-background/form-material-db-background.component";
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  ActivationEnd,
} from "@angular/router";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-page-material",
  templateUrl: "./page-material.component.html",
  styleUrls: ["./page-material.component.css"],
})
export class PageMaterialComponent implements OnInit {
  @ViewChildren(FormMaterialDbBackgroundComponent) enterData: QueryList<FormMaterialDbBackgroundComponent>;//访问整个子组件实例
  materialType = [
    //冷轧
    {
      class: "material-class",
      enum: "100",
      name: "冷轧板",
      children: [
        {
          enum: "100200",
          name: "普通用",
        },
        {
          enum: "100300",
          name: "深冲用",
        },
        {
          enum: "100100",
          name: "高强IF钢",
        },
        {
          enum: "40",
          name: "低合金钢",
        },
        {
          enum: "50",
          name: "双相钢",
        },
        {
          enum: "60",
          name: "复相钢",
        },
        {
          enum: "70",
          name: "马氏体钢",
        },
      ],
    },

    //镀锌
    {
      class: "material-class",
      enum: "110",
      name: "镀锌板",
      children: [
        {
          enum: "120",
          name: "普通用",
        },
        {
          enum: "130",
          name: "深冲用",
        },
        {
          enum: "170",
          name: "高强IF钢",
        },
        {
          enum: "140",
          name: "低合金钢",
        },
        {
          enum: "150",
          name: "双相钢",
        },
        {
          enum: "160",
          name: "烘烤硬化钢",
        },
      ],
    },

    // //热轧
    // {
    //   class: "material-class",
    //   enum: "180",
    //   name: "热轧",
    //   children: [
    //     {
    //       enum: "190",
    //       name: "低碳钢",
    //     },
    //     {
    //       enum: "200",
    //       name: "SAPH系列",
    //     },
    //     {
    //       enum: "220",
    //       name: "大梁钢",
    //     },
    //     {
    //       enum: "210",
    //       name: "QStE结构钢系列",
    //     },

    //     {
    //       enum: "230",
    //       name: "车轮钢轧",
    //     },
    //     {
    //       enum: "240",
    //       name: "双相钢",
    //     },
    //     {
    //       enum: "250",
    //       name: "箱体钢",
    //     },
    //     {
    //       enum: "260",
    //       name: "制动鼓用钢",
    //     },
    //   ],
    // },

    // //中板
    // {
    //   class: "material-class1",
    //   enum: "270",
    //   name: "中板",
    //   children: [
    //     {
    //       enum: "275",
    //       name: "大梁钢",
    //     },
    //     {
    //       enum: "300",
    //       name: "自卸车厢体用耐磨钢",
    //     },
    //     {
    //       enum: "280",
    //       name: "车轮钢",
    //     },
    //     {
    //       enum: "290",
    //       name: "车桥钢",
    //     },
    //   ],
    // },
  ];

  //#region 限制条件字段
  //厂家
  public listManufacturers = [];
  //型号规格
  public listModel = [
    {
      Model: "0.7",
    },
    {
      Model: "1.2",
    },
    {
      Model: "1.5",
    },
    {
      Model: "6.0",
    },
  ];
  //屈服强度
  public listStrength = [
    //120~180MPa
    {
      children: [
        {
          MinStrenth: "120",
          MaxStrenth: "180",
        },
      ],
    },

    //180~340MPa
    {
      children: [
        {
          MinStrenth: "180",
          MaxStrenth: "340",
        },
      ],
    },

    //340~500MPa
    {
      children: [
        {
          MinStrenth: "340",
          MaxStrenth: "500",
        },
      ],
    },

    //500~1200MPa
    {
      children: [
        {
          MinStrenth: "500",
          MaxStrenth: "1200",
        },
      ],
    },
  ];
  //#endregion

  public material = []; //存放查询的所有材料数据并传给材料列表

  //查询条件表单
  public params = {
    Name: "", //材料名称
    MaterialType: "", //材料分类
    ManufactoryId: "", //生产厂家
    Model: "", //型号规格
    MaxModel: "", //最大型号规格
    MinModel: "", //最小型号规格
    // Strength: "",
    MaxStrenth: "", //最大屈服强度
    MinStrenth: "", //最小屈服强度
    url:'',
    type:""
  };
  public materialTypeChildren = []; //存放当前选中材料分类的子分类
  public parentType = ""; //选中材料分类的子分类的父级
  constructor(
    private materialService: MaterialServiceService, //实例化材料服务
    public http: HttpClient,
    private route: ActivatedRoute,
    private ApiService: ApiService
  ) {}
  ngOnInit() {
    this.getGetManufacturers();
    this.filtrationMaterial({})
  }

  //在加载材料首页的时候查询生产厂家表,获取所有厂家并显示在筛选条件上
  public async getGetManufacturers() {
    await this.ApiService.GetManufacturers().then((res: any) => {
      this.listManufacturers = res.items;
      // console.log(this.listManufacturers)
    });
  }

  //#region 获取筛选条件并 发送查询请求
  //筛选材料
  filtrationMaterial(obj, isAll?){
    this.params.MaterialType = (obj.enum || obj.enum == '')? obj.enum:this.params.MaterialType
    this.params.ManufactoryId = (obj.id || obj.id == '')? obj.id:this.params.ManufactoryId
    this.params.Model = (obj.Model || obj.Model == '')? obj.Model:this.params.Model
    this.params.MinModel = (obj.MinModel || obj.MinModel == '')? obj.MinModel:this.params.MinModel
    this.params.MaxModel = (obj.MaxModel || obj.MaxModel == '')? obj.MaxModel:this.params.MaxModel
    this.params.MinStrenth = (obj.MinStrenth || obj.MinStrenth == '')? obj.MinStrenth:this.params.MinStrenth
    this.params.MaxStrenth = (obj.MaxStrenth || obj.MaxStrenth == '')? obj.MaxStrenth:this.params.MaxStrenth
    if (isAll) {
      this.parentType = "";
    }
    if (obj.children) {
      this.materialTypeChildren = obj.children;
      this.parentType = obj.enum;
    }
    this.ApiService.GetMater(this.params).then((res: any) => {
          this.material = res.items;})

  }

 

  //清除筛选条件
  public  clear() {
    this.params.Name = "",
      this.params.MaterialType = "",
    this.params.ManufactoryId = "",
      this.params.Model = "",
      this.params.MinModel = "";
    this.params.MaxModel = "";
    this.params.MaxStrenth = "";
    this.params.MinStrenth = "";
    this.params.type = "";
    this.params.url = "";
    this.enterData.first.data = ''//直接访问子组件实例修改子组件状态值
    this.filtrationMaterial({enum:''},true)
  }
  //#endregion
  //根据材料牌号搜索材料
  public async doEvent(data) {
    this.params.Name = data;
    this.params.type = "tszf"
    this.params.url = `?manufactoryId=${this.params.ManufactoryId}&name=${encodeURIComponent(this.params.Name)}&model=${this.params.Model}&materialType=${this.params.MaterialType}
    &minModel=${this.params.MinModel}&maxModel=${this.params.MaxModel}&maxStrenth=${this.params.MaxStrenth}&minStrenth=${this.params.MinStrenth}`
    this.filtrationMaterial({})
  }
  reGet(){
    this.filtrationMaterial({})
  }
}
