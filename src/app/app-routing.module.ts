import { NgModule } from '@angular/core';
// import{ApiService} from './api.service'
import { RouterModule, Routes } from '@angular/router';
// import {initRouter,baseRouter,selfReloadRouter} from "./init-routers"
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePlatformComponent } from './page-platform/page-platform.component';
import { PageMaterialComponent } from './page-material/page-material.component';
import { PageDisplayComponent } from './page-display/page-display.component';
import { StaticTensionTableComponent } from './form-trial-details/static-tension-home/static-tension-table/static-tension-table.component'
import { StaticTensionPictureComponent } from './form-trial-details/static-tension-home/static-tension-picture/static-tension-picture.component'
import { BendingTableComponent } from './form-trial-details/bending/bending-table/bending-table.component';
import { BendingPictureComponent } from './form-trial-details/bending/bending-picture/bending-picture.component';
import { CompressionPictureComponent } from './form-trial-details/compression/compression-picture/compression-picture.component';
import { CompressionTableComponent } from './form-trial-details/compression/compression-table/compression-table.component';
import { HighspeedstrechPictureComponent } from './form-trial-details/highspeedstrech/highspeedstrech-picture/highspeedstrech-picture.component';
import { HighspeedstrechTableComponent } from './form-trial-details/highspeedstrech/highspeedstrech-table/highspeedstrech-table.component';
import { LowcyclefatigueTableComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-table/lowcyclefatigue-table.component';
import { HighcyclefatigueTableComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-table/highcyclefatigue-table.component';
import { MetallographicTableComponent } from './form-trial-details/metallographic/metallographic-table/metallographic-table.component';
import { PhysicalperformancePictureComponent } from './form-trial-details/physicalperformance/physicalperformance-picture/physicalperformance-picture.component';
import { PhysicalperformanceTableComponent } from './form-trial-details/physicalperformance/physicalperformance-table/physicalperformance-table.component'
import { ChemicalelementPictureComponent } from './form-trial-details/chemicalelement/chemicalelement-picture/chemicalelement-picture.component';
import { ChemicalelementTableComponent } from './form-trial-details/chemicalelement/chemicalelement-table/chemicalelement-table.component';
import { ProhibitedSubstancePictureComponent } from './form-trial-details/prohibited-substance/prohibited-substance-picture/prohibited-substance-picture.component';
import { ProhibitedSubstanceTableComponent } from './form-trial-details/prohibited-substance/prohibited-substance-table/prohibited-substance-table.component';
import { DentResistanceTableComponent } from './form-trial-details/dent-resistance/dent-resistance-table/dent-resistance-table.component';
import { SecondaryWorkingEmbrittlementTableComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-table/secondary-working-embrittlement-table.component';
import { FlangingClaspTableComponent } from './form-trial-details/flanging-clasp/flanging-clasp-table/flanging-clasp-table.component';
import { HydrogenInducedDelayedFracturePictureComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-picture/hydrogen-induced-delayed-fracture-picture.component';
import { HydrogenInducedDelayedFractureTableComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-table/hydrogen-induced-delayed-fracture-table.component';
import { WeldingTableComponent } from './form-trial-details/welding/welding-table/welding-table.component';
import { CementingTableComponent } from './form-trial-details/cementing/cementing-table/cementing-table.component';
import { PaintingTableComponent } from './form-trial-details/painting/painting-table/painting-table.component';
import { FldPictureComponent } from './form-trial-details/fld/fld-picture/fld-picture.component';
import { FldTableComponent } from './form-trial-details/fld/fld-table/fld-table.component';
import { ReboundPictureComponent } from './form-trial-details/rebound/rebound-picture/rebound-picture.component';
import { ReboundTableComponent } from './form-trial-details/rebound/rebound-table/rebound-table.component';
import { BakeHardeningPictureComponent } from './form-trial-details/bake-hardening/bake-hardening-picture/bake-hardening-picture.component';
import { BakeHardeningTableComponent } from './form-trial-details/bake-hardening/bake-hardening-table/bake-hardening-table.component';
import { SurfacePropertyTableComponent } from './form-trial-details/surface-property/surface-property-table/surface-property-table.component';
import { SurfacePropertyPictureComponent,} from './form-trial-details/surface-property/surface-property-picture/surface-property-picture.component';
import { PageContrastComponent } from './page-contrast/page-contrast.component'
import { ApplicationsComponent } from './form-trial-details/applications/applications.component';
import { SimulationCardComponent } from './simulation-card/simulation-card.component';
import { ReportComponent } from './report/report.component';
import { LoginGuardService } from './login-guard.service'
import { Page404Component } from './page404/page404.component'
import { TypicalPartComponent } from 'src/app/typical-part/typical-part.component';
import { button } from 'src/app/picture'
import { PictureComponent } from './picture/picture.component';
import { TrailnameComponent } from './trailname/trailname.component';



  let allRoutes:any =[
    { path: '', redirectTo: '/platform' ,pathMatch: 'full'},
    { path: 'login', component: PageLoginComponent},
    { path: 'platform', component: PagePlatformComponent,canActivate: [LoginGuardService]},
    { path: 'material', component: PageMaterialComponent,canActivate: [LoginGuardService]},
    { path: 'display/:materialId', component:PageDisplayComponent,
    canActivateChild: [LoginGuardService],
      children:[
        {
          path: 'static-tension-home', component: TrailnameComponent,
          children:[
            { path: 'table', component: StaticTensionTableComponent ,permissions:"jtls1"},
            { path: 'picture', component: StaticTensionPictureComponent,permissions:"jtls2"},
            { path: 'report', component:ReportComponent,permissions:"jtls3"},
            { path: 'typical-part', component:TypicalPartComponent,permissions:"jtls4"},
  
          ]  
        },
        { 
          path: 'bending', component: TrailnameComponent,
          children:[
            { path: 'table', component: BendingTableComponent ,permissions:"wq1"},
            { path: 'picture', component: BendingPictureComponent ,permissions:"wq2"},
            { path: 'report', component:ReportComponent ,permissions:"wq3" },
            { path: 'typical-part', component: TypicalPartComponent,permissions:"wq4" },
            
          ]  
        },
  
        { 
          path: 'compression', component:TrailnameComponent,
          children:[
            { path: 'table', component: CompressionTableComponent ,permissions:"ys1"},
            { path: 'picture', component: CompressionPictureComponent ,permissions:"ys2" },
            { path: 'report', component: ReportComponent , permissions:"ys3"},
            { path: 'typical-part', component: TypicalPartComponent, permissions:"ys4" },
           
          ]  
        },
        { 
          path: 'highspeedstrech', component:TrailnameComponent,
          children:[
            { path: 'table', component: HighspeedstrechTableComponent,permissions:"gsls1"},
            { path: 'picture', component: HighspeedstrechPictureComponent  ,permissions:"gsls2" },
            { path: 'report', component: ReportComponent  ,permissions:"gsls3" },
            { path: 'typical-part', component:TypicalPartComponent  ,permissions:"gsls4" },
            
          ]  
        }, 
         { 
          path: 'lowcyclefatigue', component:TrailnameComponent,
          children:[
            { path: 'table', component:  LowcyclefatigueTableComponent,permissions:"dzpl1"},
            { path: 'picture', component:  PictureComponent   ,permissions:"dzpl2" },
            { path: 'report', component:  ReportComponent    ,permissions:"dzpl3"},
            { path: 'typical-part', component: TypicalPartComponent  ,permissions:"dzpl4" },
             
          ]  
        },
        { 
          path: 'highcyclefatigue', component:TrailnameComponent,
          children:[
            { path: 'table', component:  HighcyclefatigueTableComponent,permissions:"gzpl1"},
            { path: 'picture', component:  PictureComponent  ,permissions:"gzpl2"   },
            { path: 'report', component:  ReportComponent   ,permissions:"gzpl3"  },
            { path: 'typical-part', component: TypicalPartComponent  ,permissions:"gzpl4"  },
            
          ]  
        },
        { 
          path: 'metallographic', component:TrailnameComponent,
          children:[
            { path: 'table', component:  MetallographicTableComponent,permissions:"jx1" },
            { path: 'picture', component:  PictureComponent ,permissions:"jx2"    },
            { path: 'report', component:  ReportComponent  ,permissions:"jx3"  },
            { path: 'typical-part', component: TypicalPartComponent  ,permissions:"jx4"  },
            
          ]  
        },
        { 
          path: 'physicalperformance', component: TrailnameComponent,
          children:[
            { path: 'table', component:  PhysicalperformanceTableComponent ,permissions:"wlxn1"},
            { path: 'picture', component:  PhysicalperformancePictureComponent   ,permissions:"wlxn2"  },
            { path: 'report', component:  ReportComponent    ,permissions:"wlxn3"  },
            { path: 'typical-part', component:  TypicalPartComponent   ,permissions:"wlxn4" },
             
          ]  
        },
        { 
          path: 'chemicalelement', component:TrailnameComponent,
          children:[
            { path: 'table', component: ChemicalelementTableComponent,permissions:"hxcf1"},
            { path: 'picture', component:  ChemicalelementPictureComponent  ,permissions:"hxcf2"  },
            { path: 'report', component:  ReportComponent ,permissions:"hxcf3"   },
            { path: 'typical-part', component:  TypicalPartComponent ,permissions:"hxcf4" },
            
          ]  
        },
        { 
          path: 'prohibited-substance', component:TrailnameComponent,
          children:[
            { path: 'table', component: ProhibitedSubstanceTableComponent,permissions:"jywz1"},
            { path: 'picture', component:  ProhibitedSubstancePictureComponent  ,permissions:"jywz2" },
            { path: 'report', component:  ReportComponent,permissions:"jywz3"   },
            { path: 'typical-part', component:  TypicalPartComponent ,permissions:"jywz4" },
             
          ]  
        }, 
        { 
          path: 'dent-resistance', component:TrailnameComponent,
          children:[
            { path: 'table', component: DentResistanceTableComponent ,permissions:"kaxn1"},
            { path: 'picture', component:  PictureComponent ,permissions:"kaxn2" },
            { path: 'report', component:  ReportComponent  ,permissions:"kaxn3"},
            { path: 'typical-part', component: TypicalPartComponent ,permissions:"kaxn4"},
            
          ]  
        },
        { 
          path: 'secondary-working-embrittlement', component:TrailnameComponent,
          children:[
            { path: 'table', component: SecondaryWorkingEmbrittlementTableComponent,permissions:"ecjgcx1"},
            { path: 'picture', component:  PictureComponent  ,permissions:"ecjgcx2" },
            { path: 'report', component:   ReportComponent  ,permissions:"ecjgcx3" },
            { path: 'typical-part', component: TypicalPartComponent  ,permissions:"ecjgcx4" },
            
          ]  
        },
        { 
          path: 'flanging-clasp', component:TrailnameComponent,
          children:[
            { path: 'table', component: FlangingClaspTableComponent,permissions:"fbkh1"},
            { path: 'picture', component:  PictureComponent  ,permissions:"fbkh2" },
            { path: 'report', component:  ReportComponent   ,permissions:"fbkh3"},
            { path: 'typical-part', component:  TypicalPartComponent   ,permissions:"fbkh4"},
             
          ]  
        },
        { 
          path: 'hydrogen-induced-delayed-fracture', component:TrailnameComponent,
          children:[
            { path: 'table', component: HydrogenInducedDelayedFractureTableComponent,permissions:"qzyckl1" },
            { path: 'picture', component: HydrogenInducedDelayedFracturePictureComponent ,permissions:"qzyckl2"  },
            { path: 'report', component: ReportComponent ,permissions:"qzyckl3"  },
            { path: 'typical-part', component:TypicalPartComponent ,permissions:"qzyckl4"},
            
          ]  
        },
        { 
          path: 'welding', component:TrailnameComponent,
          children:[
            { path: 'table', component: WeldingTableComponent,permissions:"hjxn1"  },
            { path: 'picture', component:  PictureComponent   ,permissions:"hjxn2" },
            { path: 'report', component:  ReportComponent  ,permissions:"hjxn3"  },
            { path: 'typical-part', component:  TypicalPartComponent ,permissions:"hjxn4"  },
           
          ]  
        },
        { 
          path: 'cementing', component:TrailnameComponent ,
          children:[
            { path: 'table', component:CementingTableComponent ,permissions:"jjxn1" },
            { path: 'picture', component:  PictureComponent  ,permissions:"jjxn2"    },
            { path: 'report', component:  ReportComponent   ,permissions:"jjxn3" },
            { path: 'typical-part', component: TypicalPartComponent  ,permissions:"jjxn4" },
             
          ]  
        },
        { 
          path: 'painting', component:TrailnameComponent ,
          children:[
            { path: 'table', component:PaintingTableComponent,permissions:"tzxn1" },
            { path: 'picture', component:  PictureComponent  ,permissions:"tzxn2"  },
            { path: 'report', component:  ReportComponent  ,permissions:"tzxn3"  },
            { path: 'typical-part', component:  TypicalPartComponent ,permissions:"tzxn4"  },
            
          ]  
        },
        { 
          path: 'fld', component:TrailnameComponent ,
          children:[
            { path: 'table', component:FldTableComponent ,permissions:"fld1" },
            { path: 'picture', component:  FldPictureComponent ,permissions:"fld2"     },
            { path: 'report', component:  ReportComponent  ,permissions:"fld3"  },
            { path: 'typical-part', component:  TypicalPartComponent ,permissions:"fld4" },
            
          ]  
        },
        { 
          path: 'rebound', 
          component:TrailnameComponent ,
          children:[
            { path: 'table', component:ReboundTableComponent,permissions:"htxn1"  },
            { path: 'picture', component:  PictureComponent    ,permissions:"htxn2"  },
            { path: 'report', component:  ReportComponent   ,permissions:"htxn3" },
            { path: 'typical-part', component: TypicalPartComponent ,permissions:"htxn4"}
          ]  
        },
        { 
          path: 'bake-hardening', component:TrailnameComponent ,
          children:[
            { path: 'table', component: BakeHardeningTableComponent  ,permissions:"hkyh1" },
            { path: 'picture', component:  BakeHardeningPictureComponent ,permissions:"hkyh2"  },
            { path: 'report', component:  ReportComponent ,permissions:"hkyh3"   },
            { path: 'typical-part', component: TypicalPartComponent  ,permissions:"hkyh4" },
            
          ]  
        },
        { 
          path: 'surface-property', component:TrailnameComponent   ,
          children:[
            { path: 'table', component: SurfacePropertyTableComponent,permissions:"bmxn1"  },
            { path: 'picture', component:  SurfacePropertyPictureComponent  ,permissions:"bmxn2" },
            { path: 'report', component:  ReportComponent  ,permissions:"bmxn3" },
            { path: 'typical-part', component: TypicalPartComponent,permissions:"bmxn4" },
           
          ]  
        },
        { 
          path: 'applications/:car', component:ApplicationsComponent   ,
          
        },
        { 
          path: 'simulationCard', component:SimulationCardComponent   , 
        }
    ]},
    { path: 'contrast', component: PageContrastComponent,canActivate: [LoginGuardService]},
    { path: '404', component: Page404Component ,canActivate: [LoginGuardService]},
    { path: '**', redirectTo: '/404' ,pathMatch: 'full',},
  
  ]
  // let baseRouter:any =[
  //   { path: '', redirectTo: '/platform' ,pathMatch: 'full'},
  //   { path: 'login', component: PageLoginComponent},
  //   { path: 'platform', component: PagePlatformComponent,canActivate: [LoginGuardService]},
  //   { path: 'material', component: PageMaterialComponent,canActivate: [LoginGuardService]},
  //   { path: 'contrast', component: PageContrastComponent,canActivate: [LoginGuardService]},
  //   { path: '404', component: Page404Component ,canActivate: [LoginGuardService]},
  //   { path: '**', redirectTo: '/404' ,pathMatch: 'full',},
  
  // ]
  let permissions = JSON.parse(window.sessionStorage.getItem("permissions"))
  // let allRoutes:any = permissions ? initRouter : baseRouter 
  let length = allRoutes[4].children.length-2; 
  if(permissions){
  for(let a=0;a<length;a++){
    if(!button(allRoutes[4].children[a].path)){
      delete allRoutes[4].children[a];
    }
    else{
        let array =[]  //删除子路由数组中的元素
        allRoutes[4].children[a].children.forEach((item,index,arr)=>{
          if(!button(item.permissions)){
            array.push(index)}
         else{
        delete item.permissions}
      })
      for(let i =0;i<array.length;i++){
        allRoutes[4].children[a].children.splice(array[i]-i,1)
      }
      //设置默认展示图表
        let onePath = allRoutes[4].children[a].children[0]
        if(onePath){
          let defaultPath = {
            path: '',
            redirectTo: onePath.path,
            pathMatch: 'full'
          }
          //待优化
          allRoutes[4].children[a].children.push(defaultPath)
      }

  
    }
  
  }  
  allRoutes[4].children = allRoutes[4].children.filter(function(item) {
    return item != undefined
     });//删除路由中的空元素
  if(!button("viewCar")){
   allRoutes[4].children.splice(length,1)
  }   
  }

let currentRoutes: Routes = allRoutes



@NgModule({
  imports: [ RouterModule.forRoot(currentRoutes,{scrollPositionRestoration: 'enabled' }) ],  //初始化路由器,并让它开始监听浏览器中的地址变化,导航后页面滚动条滚动到顶部
  exports: [ RouterModule ],  //导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
})
export class AppRoutingModule {



 }
