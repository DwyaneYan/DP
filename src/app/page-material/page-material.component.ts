import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MaterialServiceService } from './material-service.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
          name: '冷烘烤硬化钢'
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
      children:[
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
      children:[
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
      children:[
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
      value: '6.0',
    },
  ]

  //屈服强度
  public listStrength = [
    {
      value: '120~180MPa',
    },
    {
      value: '180~340MPa',
    },
    {
      value: '340~500MPa',
    },
    {
      value: '500~1200MPa',
    },
  ]
  //#endregion

  //查询条件表单
  public params = {
    materialType: '',  //材料分类
    manufacturer: '',  //生产厂家
    model: "",  //型号规格
    strength: "",  //屈服强度
  }  


  constructor(
    private materialService: MaterialServiceService, 
    public http: HttpClient
    ) { }  //实例化材料服务
  ngOnInit() {
    // let res = this.materialService.GetManufacturers();
    // console.log(res)
    // this.listManufacturers = res.items;
    // let res = this.materialService.GetManufactories();
    this.getGetManufacturers();
  }

//!!!!怎么写到service里边去
  public getGetManufacturers(){
    let api = "http://localhost:60001/api/hangang/manufactory/manufactories";
    let res;
    this.http.get(api).subscribe((response) => {
      res = response;
      console.log(res)
      this.listManufacturers = res.items;
      console.log(this.listManufacturers)
    });

  }


//#region 获取筛选条件
  //材料分类
  filtrationMaterialType(childItem){
    this.params.materialType = childItem.enum;
    this.materialService.Getmaterial(this.params);
    console.log(this.params)
  }

  //生产厂家
  filtrationManufacturers(item) {
    this.params.manufacturer = item.id
    console.log(this.params)
  }

  //型号规格
  filtrationModel(item) {
    this.params.model = item.value
    console.log(this.params)
  }

  //屈服强度
  filtrationStrength(item) {
    this.params.strength = item.value
    console.log(this.params)
  }

  //清楚筛选条件
  clear() {
    this.params.materialType = '',
      this.params.manufacturer = '',
      this.params.model = '',
      this.params.strength = ''
    console.log(this.params)
  }
  //#endregion

























}
