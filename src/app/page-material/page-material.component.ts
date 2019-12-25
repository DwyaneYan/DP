import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MaterialServiceService } from './material-service.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormMaterialListComponent } from '../form-material-list/form-material-list.component';

@Component({
  selector: 'app-page-material',
  templateUrl: './page-material.component.html',
  styleUrls: ['./page-material.component.css']
})

export class PageMaterialComponent implements OnInit {

  materialType =
    [
      //冷轧
      {
        value: "10",
        name: "冷轧",
        children: [
          {
            enum: '20',
            name: '烘烤硬化钢'
          },
          {
            enum: '30',
            name: '高强IF钢'
          },
          {
            enum: '40',
            name: '低碳铝镇静钢'
          },
          {
            enum: '50',
            name: '低合金高强度钢'
          },
          {
            enum: '60',
            name: '双相钢'
          },
          {
            enum: '70',
            name: '淬火延性钢'
          },
          {
            enum: '80',
            name: '马氏体钢'
          },
          {
            enum: '90',
            name: '增强成形性双相钢'
          },
          {
            enum: '100',
            name: 'IF钢'
          }
        ]
      },

      //镀锌
      {
        enum: "110",
        name: "镀锌",
        children: [
          {
            enum: '120',
            name: '烘烤硬化钢'
          },
          {
            enum: '130',
            name: '高强IF钢'
          },
          {
            enum: '140',
            name: '低碳铝镇静钢'
          },
          {
            enum: '150',
            name: '低合金高强度钢'
          },
          {
            enum: '160',
            name: '双相钢'
          },
          {
            enum: '170',
            name: 'IF钢'
          },
          {
            enum: '175',
            name: '增强成形性双相钢'
          }
        ]
      },

      //热轧
      {
        enum: "180",
        name: "热轧",
        children: [
          {
            enum: '190',
            name: '低碳钢'
          },
          {
            enum: '200',
            name: 'SAPH系列'
          },
          {
            enum: '210',
            name: 'QStE结构钢系列'
          },
          {
            enum: '220',
            name: '大梁钢'
          },
          {
            enum: '230',
            name: '车轮钢轧'
          },
          {
            enum: '240',
            name: '双相钢'
          },
          {
            enum: '250',
            name: '箱体钢'
          },
          {
            enum: '260',
            name: '制动鼓用钢'
          },
        ]
      },

      //中板
      {
        enum: "270",
        name: "中板",
        children: [
          {
            enum: '275',
            name: '大梁钢'
          },
          {
            enum: '280',
            name: '车轮钢'
          },
          {
            enum: '290',
            name: '车桥钢'
          },
          {
            enum: '300',
            name: '自卸车厢体用耐磨钢'
          },
        ]
      }

    ]

  //#region 限制条件字段

  //厂家
  public listManufacturers = []

  //型号规格
  public listModel = [
    {
      value: '0.7',
    },
    {
      value: '1.2',
    },
    {
      value: '1.5',
    },
    {
      value: '2.0',
    },
  ]

  //屈服强度
  public listStrength = 
  [
    //120~180MPa
    {
      children: 
      [
        {
          min: '120',
          max: '180'
        },
      ]      
    },

    //180~340MPa
    {      
      children: 
      [
        {
          min: '180',
          max: '340'
        },
      ] 
    },

    //340~500MPa
    {
      children: 
      [
        {
          min: '340',
          max: '500'
        },
      ] 
    },

    //500~1200MPa
    {
      children: 
      [
        {
          min: '500',
          max: '1200'
        },
      ] 
    }
  ]
  //#endregion

  //查询条件表单
  public params = {
    materialType: '',  //材料分类
    manufactoryId: '',  //生产厂家
    model: "",  //型号规格
    maxModel: "", //最大型号规格
    minModel: "", //最小型号规格
    Strength:"",
    MaxStrenth: "", //最大屈服强度
    MinStrenth: "", //最小屈服强度
  }

  constructor(
    private materialService: MaterialServiceService,    //实例化材料服务
    public http: HttpClient,
  ) { }
  ngOnInit() {
    this.getGetManufacturers();
  }


  //在加载材料首页的时候查询生产厂家表,获取所有厂家并显示在筛选条件上
  public async getGetManufacturers() {
    await this.materialService.GetManufacturers().then((res: any) => {
      // console.log(res);
      this.listManufacturers = res.items;
      // console.log(this.listManufacturers)
    });

  }
  //#region 获取筛选条件并 发送查询请求
  //材料分类  
  public material = []  //存放查询的数据并传给材料列表
  public async filtrationMaterialType(childItem) {
    this.params.materialType = childItem.enum;
    console.log(this.params)
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items
      console.log(this.material)
    })    
  }

  //生产厂家
  public async filtrationManufacturers(item) {
    this.params.manufactoryId = item.id
    console.log(this.params);
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items;
      console.log(this.material);
 })
 }
  
  //型号规格
  public async  filtrationModel(item) {
    this.params.model = item.value
    // console.log(this.params);
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items;
      // console.log(this.material);
 })
  }

  public async filtrationMinModel(e: any) {
    this.params.model = "";
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items;
    })
  }

  public async filtrationMaxModel(e: any) {
    this.params.model = "";
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items;
    })
  }

  //屈服强度
  public async filtrationStrength(item) {
    this.params.MinStrenth = item.min;
    this.params.MaxStrenth = item.max;
    console.log(this.params);
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items;
      console.log(this.material);
  })
  }

  public async filtrationMinStrength(e: any) {
    this.params.Strength = "";
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items;
    })
  }

  public async filtrationMaxStrength(e: any) {
    this.params.Strength = "";
    await this.materialService.GetMaterials(this.params).then((res: any) => {
      this.material = res.items;
    })
  }

  //清楚筛选条件
  clear() {
    this.params.materialType = '',
      this.params.manufactoryId = '',
      this.params.model = '',
      this.params.minModel = ''
      this.params.maxModel = ''
      this.params.MaxStrenth = ''
      this.params.MinStrenth = ''

    console.log(this.params)
  }
  //#endregion


}
