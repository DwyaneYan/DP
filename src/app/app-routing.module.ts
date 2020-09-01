import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePlatformComponent } from './page-platform/page-platform.component';
import { PageMaterialComponent } from './page-material/page-material.component';
import { PageDisplayTableComponent } from './page-display-table/page-display-table.component';
import { PageDisplayPictureComponent } from './page-display-picture/page-display-picture.component';
import { PageDisplayReportComponent } from './page-display-report/page-display-report.component';
import { PageDisplayReportFsComponent } from './page-display-report-fs/page-display-report-fs.component';
import { PageDisplayTypicalPartComponent } from './page-display-typical-part/page-display-typical-part.component';
import { PageAttributeConstractComponent } from './page-attribute-constract/page-attribute-constract.component';
import { PageMaterialFakeComponent } from './page-material-fake/page-material-fake.component';
import { PageMaterialFloatingBoxComponent } from './page-material-floating-box/page-material-floating-box.component';
import { PageSystemManageComponent } from './page-system-manage/page-system-manage.component';
import { PageDisplayhomeComponent } from './page-displayhome/page-displayhome.component';
import { FormFactoryListComponent } from './form-factory-list/form-factory-list.component';
import { FormTypicpartListComponent } from './form-typicpart-list/form-typicpart-list.component';
import { PageMaterialTrialComponent } from './page-material-trial/page-material-trial.component';
import { FormMateriaListComponent } from './form-materia-list/form-materia-list.component';
import { PageDisplayComponent } from './page-display/page-display.component';
import { StaticTensionHomeComponent } from './form-trial-details/static-tension-home/static-tension-home.component'
import { StaticTensionTableComponent } from './form-trial-details/static-tension-home/static-tension-table/static-tension-table.component'
import { StaticTensionPictureComponent } from './form-trial-details/static-tension-home/static-tension-picture/static-tension-picture.component'
import { BendingComponent } from './form-trial-details/bending/bending.component';
import { BendingTableComponent } from './form-trial-details/bending/bending-table/bending-table.component';
import { BendingPictureComponent } from './form-trial-details/bending/bending-picture/bending-picture.component';
import { CompressionPictureComponent } from './form-trial-details/compression/compression-picture/compression-picture.component';
import { CompressionTableComponent } from './form-trial-details/compression/compression-table/compression-table.component';
import { CompressionComponent } from './form-trial-details/compression/compression.component';
import { HighspeedstrechPictureComponent } from './form-trial-details/highspeedstrech/highspeedstrech-picture/highspeedstrech-picture.component';
import { HighspeedstrechTableComponent } from './form-trial-details/highspeedstrech/highspeedstrech-table/highspeedstrech-table.component';
import { HighspeedstrechComponent } from './form-trial-details/highspeedstrech/highspeedstrech.component';
import { LowcyclefatigueComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue.component';
import { LowcyclefatiguePictureComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-picture/lowcyclefatigue-picture.component';
import { LowcyclefatigueTableComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-table/lowcyclefatigue-table.component';
import { HighcyclefatigueComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue.component';
import { HighcyclefatiguePictureComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-picture/highcyclefatigue-picture.component';
import { HighcyclefatigueTableComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-table/highcyclefatigue-table.component';
import { MetallographicComponent } from './form-trial-details/metallographic/metallographic.component';
import { MetallographicPictureComponent } from './form-trial-details/metallographic/metallographic-picture/metallographic-picture.component';
import { MetallographicTableComponent } from './form-trial-details/metallographic/metallographic-table/metallographic-table.component';
import { PhysicalperformanceComponent } from './form-trial-details/physicalperformance/physicalperformance.component';
import { PhysicalperformancePictureComponent } from './form-trial-details/physicalperformance/physicalperformance-picture/physicalperformance-picture.component';
import { PhysicalperformanceTableComponent } from './form-trial-details/physicalperformance/physicalperformance-table/physicalperformance-table.component';
import { ChemicalelementComponent } from './form-trial-details/chemicalelement/chemicalelement.component';
import { ChemicalelementPictureComponent } from './form-trial-details/chemicalelement/chemicalelement-picture/chemicalelement-picture.component';
import { ChemicalelementTableComponent } from './form-trial-details/chemicalelement/chemicalelement-table/chemicalelement-table.component';
import { ProhibitedSubstanceComponent } from './form-trial-details/prohibited-substance/prohibited-substance.component';
import { ProhibitedSubstancePictureComponent } from './form-trial-details/prohibited-substance/prohibited-substance-picture/prohibited-substance-picture.component';
import { ProhibitedSubstanceTableComponent } from './form-trial-details/prohibited-substance/prohibited-substance-table/prohibited-substance-table.component';
import { DentResistanceComponent } from './form-trial-details/dent-resistance/dent-resistance.component';
import { DentResistancePictureComponent } from './form-trial-details/dent-resistance/dent-resistance-picture/dent-resistance-picture.component';
import { DentResistanceTableComponent } from './form-trial-details/dent-resistance/dent-resistance-table/dent-resistance-table.component';
import { SecondaryWorkingEmbrittlementComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement.component';
import { SecondaryWorkingEmbrittlementPictureComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-picture/secondary-working-embrittlement-picture.component';
import { SecondaryWorkingEmbrittlementTableComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-table/secondary-working-embrittlement-table.component';
import { FlangingClaspComponent } from './form-trial-details/flanging-clasp/flanging-clasp.component';
import { FlangingClaspPictureComponent } from './form-trial-details/flanging-clasp/flanging-clasp-picture/flanging-clasp-picture.component';
import { FlangingClaspTableComponent } from './form-trial-details/flanging-clasp/flanging-clasp-table/flanging-clasp-table.component';
import { HydrogenInducedDelayedFractureComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture.component';
import { HydrogenInducedDelayedFracturePictureComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-picture/hydrogen-induced-delayed-fracture-picture.component';
import { HydrogenInducedDelayedFractureTableComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-table/hydrogen-induced-delayed-fracture-table.component';
import { WeldingComponent } from './form-trial-details/welding/welding.component';
import { WeldingPictureComponent } from './form-trial-details/welding/welding-picture/welding-picture.component';
import { WeldingTableComponent } from './form-trial-details/welding/welding-table/welding-table.component';
import { CementingComponent } from './form-trial-details/cementing/cementing.component';
import { CementingPictureComponent } from './form-trial-details/cementing/cementing-picture/cementing-picture.component';
import { CementingTableComponent } from './form-trial-details/cementing/cementing-table/cementing-table.component';
import { PaintingComponent } from './form-trial-details/painting/painting.component';
import { PaintingPictureComponent } from './form-trial-details/painting/painting-picture/painting-picture.component';
import { PaintingTableComponent } from './form-trial-details/painting/painting-table/painting-table.component';
import { FLDComponent } from './form-trial-details/fld/fld.component';
import { FldPictureComponent } from './form-trial-details/fld/fld-picture/fld-picture.component';
import { FldTableComponent } from './form-trial-details/fld/fld-table/fld-table.component';
import { ReboundComponent } from './form-trial-details/rebound/rebound.component';
import { ReboundPictureComponent } from './form-trial-details/rebound/rebound-picture/rebound-picture.component';
import { ReboundTableComponent } from './form-trial-details/rebound/rebound-table/rebound-table.component';
import { BakeHardeningComponent } from './form-trial-details/bake-hardening/bake-hardening.component';
import { BakeHardeningPictureComponent } from './form-trial-details/bake-hardening/bake-hardening-picture/bake-hardening-picture.component';
import { BakeHardeningTableComponent } from './form-trial-details/bake-hardening/bake-hardening-table/bake-hardening-table.component';
import { SurfacePropertyComponent } from './form-trial-details/surface-property/surface-property.component';
import { SurfacePropertyTableComponent } from './form-trial-details/surface-property/surface-property-table/surface-property-table.component';
import { SurfacePropertyPictureComponent,} from './form-trial-details/surface-property/surface-property-picture/surface-property-picture.component';
import { StaticTensionTypicalPartComponent } from './form-trial-details/static-tension-home/static-tension-typical-part/static-tension-typical-part.component';
import { BendingReportComponent } from './form-trial-details/bending/bending-report/bending-report.component';
import { BendingTypicalPartComponent } from './form-trial-details/bending/bending-typical-part/bending-typical-part.component';
import { CompressionReportComponent } from './form-trial-details/compression/compression-report/compression-report.component';
import { CompressionTypicalPartComponent } from './form-trial-details/compression/compression-typical-part/compression-typical-part.component';
import { HighspeedstrechReportComponent } from './form-trial-details/highspeedstrech/highspeedstrech-report/highspeedstrech-report.component';
import { HighspeedstrechTypicalPartComponent } from './form-trial-details/highspeedstrech/highspeedstrech-typical-part/highspeedstrech-typical-part.component';
import { LowcyclefatigueReportComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-report/lowcyclefatigue-report.component';
import { LowcyclefatigueTypicalPartComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-typical-part/lowcyclefatigue-typical-part.component';
import { HighcyclefatigueReportComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-report/highcyclefatigue-report.component';
import { HighcyclefatigueTypicalPartComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-typical-part/highcyclefatigue-typical-part.component';
import { MetallographicReportComponent } from './form-trial-details/metallographic/metallographic-report/metallographic-report.component';
import { MetallographicTypicalPartComponent } from './form-trial-details/metallographic/metallographic-typical-part/metallographic-typical-part.component';
import { PhysicalperformanceReportComponent } from './form-trial-details/physicalperformance/physicalperformance-report/physicalperformance-report.component';
import { PhysicalperformanceTypicalPartComponent } from './form-trial-details/physicalperformance/physicalperformance-typical-part/physicalperformance-typical-part.component';
import { ChemicalelementReportComponent } from './form-trial-details/chemicalelement/chemicalelement-report/chemicalelement-report.component';
import { ChemicalelementTypicalPartComponent } from './form-trial-details/chemicalelement/chemicalelement-typical-part/chemicalelement-typical-part.component';
import { ProhibitedSubstanceReportComponent } from './form-trial-details/prohibited-substance/prohibited-substance-report/prohibited-substance-report.component';
import { ProhibitedSubstanceTypicalPartComponent } from './form-trial-details/prohibited-substance/prohibited-substance-typical-part/prohibited-substance-typical-part.component';
import { SurfacePropertyReportComponent } from './form-trial-details/surface-property/surface-property-report/surface-property-report.component';
import { SurfacePropertyTypicalPartComponent } from './form-trial-details/surface-property/surface-property-typical-part/surface-property-typical-part.component';
import { DentResistanceReportComponent } from './form-trial-details/dent-resistance/dent-resistance-report/dent-resistance-report.component';
import { DentResistanceTypicalPartComponent } from './form-trial-details/dent-resistance/dent-resistance-typical-part/dent-resistance-typical-part.component';
import { SecondaryWorkingEmbrittlementReportComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-report/secondary-working-embrittlement-report.component';
import { SecondaryWorkingEmbrittlementTypicalPartComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-typical-part/secondary-working-embrittlement-typical-part.component';
import { FlangingClaspReportComponent } from './form-trial-details/flanging-clasp/flanging-clasp-report/flanging-clasp-report.component';
import { FlangingClaspTypicalPartComponent } from './form-trial-details/flanging-clasp/flanging-clasp-typical-part/flanging-clasp-typical-part.component';
import { HydrogenInducedDelayedFractureReportComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-report/hydrogen-induced-delayed-fracture-report.component';
import { HydrogenInducedDelayedFractureTypicalPartComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-typical-part/hydrogen-induced-delayed-fracture-typical-part.component';
import { WeldingReportComponent } from './form-trial-details/welding/welding-report/welding-report.component';
import { WeldingTypicalPartComponent } from './form-trial-details/welding/welding-typical-part/welding-typical-part.component';
import { CementingReportComponent } from './form-trial-details/cementing/cementing-report/cementing-report.component';
import { CementingTypicalPartComponent } from './form-trial-details/cementing/cementing-typical-part/cementing-typical-part.component';
import { PaintingReportComponent } from './form-trial-details/painting/painting-report/painting-report.component';
import { PaintingTypicalPartComponent } from './form-trial-details/painting/painting-typical-part/painting-typical-part.component';
import { FldReportComponent } from './form-trial-details/fld/fld-report/fld-report.component';
import { FldTypicalPartComponent } from './form-trial-details/fld/fld-typical-part/fld-typical-part.component';
import { ReboundReportComponent } from './form-trial-details/rebound/rebound-report/rebound-report.component';
import { ReboundTypicalPartComponent } from './form-trial-details/rebound/rebound-typical-part/rebound-typical-part.component';
import { BakeHardeningReportComponent } from './form-trial-details/bake-hardening/bake-hardening-report/bake-hardening-report.component';
import { BakeHardeningTypicalPartComponent } from './form-trial-details/bake-hardening/bake-hardening-typical-part/bake-hardening-typical-part.component';
import { PageContrastComponent } from './page-contrast/page-contrast.component'
import { ApplicationsComponent } from './form-trial-details/applications/applications.component';
import { SimulationCardComponent } from './simulation-card/simulation-card.component';
import { ReportComponent } from './report/report.component';
import { LoginGuardService } from './login-guard.service'
import { Page404Component } from './page404/page404.component'
import { TypicalPartComponent } from 'src/app/typical-part/typical-part.component';
// import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';


let allRoutes =[
  { path: '', redirectTo: '/platform' ,pathMatch: 'full'},
  { path: 'login', component: PageLoginComponent},
  { path: 'platform', component: PagePlatformComponent,canActivate: [LoginGuardService]},
  { path: 'material', component: PageMaterialComponent,canActivate: [LoginGuardService]},
  //用于按材料名称搜索，点击搜索按钮，带着材料名称跳转
  // { path: 'material/:materialName', component: PageMaterialComponent,canActivate: [LoginGuardService]},
  { path: 'display/:materialId', component:PageDisplayComponent,
  canActivateChild: [LoginGuardService],
    children:[
      {
        path: 'static-tension-home', component: StaticTensionHomeComponent,
        children:[
          { path: 'table', component: StaticTensionTableComponent ,permissions:"jtls1"},
          { path: 'picture', component: StaticTensionPictureComponent,permissions:"jtls2"},
          { path: 'report', component:ReportComponent,permissions:"jtls3"},
          { path: 'typical-part', component:TypicalPartComponent,permissions:"jtls4"},

        ]  
      },
      { 
        path: 'bending', component: BendingComponent,
        children:[
          { path: 'table', component: BendingTableComponent ,permissions:"wq1"},
          { path: 'picture', component: BendingPictureComponent ,permissions:"wq2"},
          { path: 'report', component:ReportComponent ,permissions:"wq3" },
          { path: 'typical-part', component: TypicalPartComponent,permissions:"wq4" },
          
        ]  
      },

      { 
        path: 'compression', component:CompressionComponent,
        children:[
          { path: 'table', component: CompressionTableComponent ,permissions:"ys1"},
          { path: 'picture', component: CompressionPictureComponent ,permissions:"ys2" },
          { path: 'report', component: ReportComponent , permissions:"ys3"},
          { path: 'typical-part', component: TypicalPartComponent, permissions:"ys4" },
         
        ]  
      },
      { 
        path: 'highspeedstrech', component:HighspeedstrechComponent,
        children:[
          { path: 'table', component: HighspeedstrechTableComponent,permissions:"gsls1"},
          { path: 'picture', component: HighspeedstrechPictureComponent  ,permissions:"gsls2" },
          { path: 'report', component: ReportComponent  ,permissions:"gsls3" },
          { path: 'typical-part', component:TypicalPartComponent  ,permissions:"gsls4" },
          
        ]  
      }, 
       { 
        path: 'lowcyclefatigue', component:LowcyclefatigueComponent,
        children:[
          { path: 'table', component:  LowcyclefatigueTableComponent,permissions:"dzpl1"},
          { path: 'picture', component:  LowcyclefatiguePictureComponent   ,permissions:"dzpl2" },
          { path: 'report', component:  ReportComponent    ,permissions:"dzpl3"},
          { path: 'typical-part', component: TypicalPartComponent  ,permissions:"dzpl4" },
           
        ]  
      },
      { 
        path: 'highcyclefatigue', component:HighcyclefatigueComponent,
        children:[
          { path: 'table', component:  HighcyclefatigueTableComponent,permissions:"gzpl1"},
          { path: 'picture', component:  HighcyclefatiguePictureComponent  ,permissions:"gzpl2"   },
          { path: 'report', component:  ReportComponent   ,permissions:"gzpl3"  },
          { path: 'typical-part', component: TypicalPartComponent  ,permissions:"gzpl4"  },
          
        ]  
      },
      { 
        path: 'metallographic', component:MetallographicComponent,
        children:[
          { path: 'table', component:  MetallographicTableComponent,permissions:"jx1" },
          { path: 'picture', component:  MetallographicPictureComponent ,permissions:"jx2"    },
          { path: 'report', component:  ReportComponent  ,permissions:"jx3"  },
          { path: 'typical-part', component: TypicalPartComponent  ,permissions:"jx4"  },
          
        ]  
      },
      { 
        path: 'physicalperformance', component: PhysicalperformanceComponent,
        children:[
          { path: 'table', component:  PhysicalperformanceTableComponent ,permissions:"wlxn1"},
          { path: 'picture', component:  PhysicalperformancePictureComponent   ,permissions:"wlxn2"  },
          { path: 'report', component:  ReportComponent    ,permissions:"wlxn3"  },
          { path: 'typical-part', component:  TypicalPartComponent   ,permissions:"wlxn4" },
           
        ]  
      },
      { 
        path: 'chemicalelement', component:ChemicalelementComponent,
        children:[
          { path: 'table', component: ChemicalelementTableComponent,permissions:"hxcf1"},
          { path: 'picture', component:  ChemicalelementPictureComponent  ,permissions:"hxcf2"  },
          { path: 'report', component:  ReportComponent ,permissions:"hxcf3"   },
          { path: 'typical-part', component:  TypicalPartComponent ,permissions:"hxcf4" },
          
        ]  
      },
      { 
        path: 'prohibited-substance', component:ProhibitedSubstanceComponent,
        children:[
          { path: 'table', component: ProhibitedSubstanceTableComponent,permissions:"jywz1"},
          { path: 'picture', component:  ProhibitedSubstancePictureComponent  ,permissions:"jywz2" },
          { path: 'report', component:  ReportComponent,permissions:"jywz3"   },
          { path: 'typical-part', component:  TypicalPartComponent ,permissions:"jywz4" },
           
        ]  
      }, 
      { 
        path: 'dent-resistance', component:DentResistanceComponent,
        children:[
          { path: 'table', component: DentResistanceTableComponent ,permissions:"kaxn1"},
          { path: 'picture', component:  DentResistancePictureComponent ,permissions:"kaxn2" },
          { path: 'report', component:  ReportComponent  ,permissions:"kaxn3"},
          { path: 'typical-part', component: TypicalPartComponent ,permissions:"kaxn4"},
          
        ]  
      },
      { 
        path: 'secondary-working-embrittlement', component:SecondaryWorkingEmbrittlementComponent,
        children:[
          { path: 'table', component: SecondaryWorkingEmbrittlementTableComponent,permissions:"ecjgcx1"},
          { path: 'picture', component:  SecondaryWorkingEmbrittlementPictureComponent  ,permissions:"ecjgcx2" },
          { path: 'report', component:   ReportComponent  ,permissions:"ecjgcx3" },
          { path: 'typical-part', component: TypicalPartComponent  ,permissions:"ecjgcx4" },
          
        ]  
      },
      { 
        path: 'flanging-clasp', component:FlangingClaspComponent,
        children:[
          { path: 'table', component: FlangingClaspTableComponent,permissions:"fbkh1"},
          { path: 'picture', component:  FlangingClaspPictureComponent  ,permissions:"fbkh2" },
          { path: 'report', component:  ReportComponent   ,permissions:"fbkh3"},
          { path: 'typical-part', component:  TypicalPartComponent   ,permissions:"fbkh4"},
           
        ]  
      },
      { 
        path: 'hydrogen-induced-delayed-fracture', component:HydrogenInducedDelayedFractureComponent,
        children:[
          { path: 'table', component: HydrogenInducedDelayedFractureTableComponent,permissions:"qzyckl1" },
          { path: 'picture', component: HydrogenInducedDelayedFracturePictureComponent ,permissions:"qzyckl2"  },
          { path: 'report', component: ReportComponent ,permissions:"qzyckl3"  },
          { path: 'typical-part', component:TypicalPartComponent ,permissions:"qzyckl4"},
          
        ]  
      },
      { 
        path: 'welding', component:WeldingComponent,
        children:[
          { path: 'table', component: WeldingTableComponent,permissions:"hjxn1"  },
          { path: 'picture', component:  WeldingPictureComponent   ,permissions:"hjxn2" },
          { path: 'report', component:  ReportComponent  ,permissions:"hjxn3"  },
          { path: 'typical-part', component:  TypicalPartComponent ,permissions:"hjxn4"  },
         
        ]  
      },
      { 
        path: 'cementing', component:CementingComponent ,
        children:[
          { path: 'table', component:CementingTableComponent ,permissions:"jjxn1" },
          { path: 'picture', component:  CementingPictureComponent  ,permissions:"jjxn2"    },
          { path: 'report', component:  ReportComponent   ,permissions:"jjxn3" },
          { path: 'typical-part', component: TypicalPartComponent  ,permissions:"jjxn4" },
           
        ]  
      },
      { 
        path: 'painting', component:PaintingComponent ,
        children:[
          { path: 'table', component:PaintingTableComponent,permissions:"tzxn1" },
          { path: 'picture', component:  PaintingPictureComponent  ,permissions:"tzxn2"  },
          { path: 'report', component:  ReportComponent  ,permissions:"tzxn3"  },
          { path: 'typical-part', component:  TypicalPartComponent ,permissions:"tzxn4"  },
          
        ]  
      },
      { 
        path: 'fld', component:FLDComponent ,
        children:[
          { path: 'table', component:FldTableComponent ,permissions:"fld1" },
          { path: 'picture', component:  FldPictureComponent ,permissions:"fld2"     },
          { path: 'report', component:  ReportComponent  ,permissions:"fld3"  },
          { path: 'typical-part', component:  TypicalPartComponent ,permissions:"fld4" },
          
        ]  
      },
      { 
        path: 'rebound', component:ReboundComponent ,
        children:[
          { path: 'table', component:ReboundTableComponent,permissions:"htxn1"  },
          { path: 'picture', component:  ReboundPictureComponent    ,permissions:"htxn2"  },
          { path: 'report', component:  ReportComponent   ,permissions:"htxn3" },
          { path: 'typical-part', component: TypicalPartComponent ,permissions:"htxn4"},
         
        ]  
      },
      { 
        path: 'bake-hardening', component:BakeHardeningComponent  ,
        children:[
          { path: 'table', component: BakeHardeningTableComponent  ,permissions:"hkyh1" },
          { path: 'picture', component:  BakeHardeningPictureComponent ,permissions:"hkyh2"  },
          { path: 'report', component:  ReportComponent ,permissions:"hkyh3"   },
          { path: 'typical-part', component: TypicalPartComponent  ,permissions:"hkyh4" },
          
        ]  
      },
      { 
        path: 'surface-property', component:SurfacePropertyComponent   ,
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

console.log(allRoutes[4].children)

let length = allRoutes[4].children.length-2;
let permissions =JSON.parse(window.sessionStorage.getItem("permissions"))

//登陆后才能确定路由数组,这个文件只有刷新页面会再次执行但点击导航或者前进后退不会执行
if(permissions){
function button(p):Boolean{
  if(permissions.permissions.indexOf(`${p}`)==-1 && permissions.roles.indexOf("admin")==-1){
    return false
  }
  else{
    return true
  }

}
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

  }

}


console.log(allRoutes[4].children)

allRoutes[4].children = allRoutes[4].children.filter(function(item) {
  return item != undefined
   });//删除路由中的空元素
if(!button("viewCar")){
 allRoutes[4].children.splice(length,1)
}
console.log(allRoutes[4].children)


}

let currentRoutes: Routes = allRoutes


//遍历allRoutes ,找getInfo中的permissions权限字段permissions.indexof(item.permissions)

// const routes: Routes = [
//   { path: '', redirectTo: '/platform' ,pathMatch: 'full'},
//   { path: 'login', component: PageLoginComponent},
//   { path: 'platform', component: PagePlatformComponent,canActivate: [LoginGuardService]},
//   { path: 'material', component: PageMaterialComponent,canActivate: [LoginGuardService]},

//   //用于按材料名称搜索，点击搜索按钮，带着材料名称跳转
//   { path: 'material/:materialName', component: PageMaterialComponent,canActivate: [LoginGuardService]},

//   { path: 'display/:materialId', component:PageDisplayComponent,
//   canActivateChild: [LoginGuardService],
//     children:[
//       {
//         path: 'static-tension-home', component: StaticTensionHomeComponent,
//         children:[
//           { path: 'table', component: StaticTensionTableComponent },
//           { path: 'picture', component: StaticTensionPictureComponent },
//           { path: 'report', component:ReportComponent},
//           { path: 'typical-part', component:TypicalPartComponent},

//         ]  
//       },
//       { 
//         path: 'bending', component: BendingComponent,
//         children:[
//           { path: 'table', component: BendingTableComponent },
//           { path: 'picture', component: BendingPictureComponent },
//           { path: 'report', component:ReportComponent  },
//           { path: 'typical-part', component: TypicalPartComponent },
          
//         ]  
//       },

//       { 
//         path: 'compression', component:CompressionComponent,
//         children:[
//           { path: 'table', component: CompressionTableComponent },
//           { path: 'picture', component: CompressionPictureComponent  },
//           { path: 'report', component: ReportComponent  },
//           { path: 'typical-part', component: TypicalPartComponent },
         
//         ]  
//       },
//       { 
//         path: 'highspeedstrech', component:HighspeedstrechComponent,
//         children:[
//           { path: 'table', component: HighspeedstrechTableComponent},
//           { path: 'picture', component: HighspeedstrechPictureComponent   },
//           { path: 'report', component: ReportComponent   },
//           { path: 'typical-part', component:TypicalPartComponent   },
          
//         ]  
//       }, 
//        { 
//         path: 'lowcyclefatigue', component:LowcyclefatigueComponent,
//         children:[
//           { path: 'table', component:  LowcyclefatigueTableComponent},
//           { path: 'picture', component:  LowcyclefatiguePictureComponent    },
//           { path: 'report', component:  ReportComponent    },
//           { path: 'typical-part', component: TypicalPartComponent  },
           
//         ]  
//       },
//       { 
//         path: 'highcyclefatigue', component:HighcyclefatigueComponent,
//         children:[
//           { path: 'table', component:  HighcyclefatigueTableComponent},
//           { path: 'picture', component:  HighcyclefatiguePictureComponent     },
//           { path: 'report', component:  ReportComponent     },
//           { path: 'typical-part', component: TypicalPartComponent    },
          
//         ]  
//       },
//       { 
//         path: 'metallographic', component:MetallographicComponent,
//         children:[
//           { path: 'table', component:  MetallographicTableComponent },
//           { path: 'picture', component:  MetallographicPictureComponent     },
//           { path: 'report', component:  ReportComponent    },
//           { path: 'typical-part', component: TypicalPartComponent   },
          
//         ]  
//       },
//       { 
//         path: 'physicalperformance', component: PhysicalperformanceComponent,
//         children:[
//           { path: 'table', component:  PhysicalperformanceTableComponent },
//           { path: 'picture', component:  PhysicalperformancePictureComponent     },
//           { path: 'report', component:  ReportComponent      },
//           { path: 'typical-part', component:  TypicalPartComponent   },
           
//         ]  
//       },
//       { 
//         path: 'chemicalelement', component:ChemicalelementComponent,
//         children:[
//           { path: 'table', component: ChemicalelementTableComponent},
//           { path: 'picture', component:  ChemicalelementPictureComponent    },
//           { path: 'report', component:  ReportComponent    },
//           { path: 'typical-part', component:  TypicalPartComponent  },
          
//         ]  
//       },
//       { 
//         path: 'prohibited-substance', component:ProhibitedSubstanceComponent,
//         children:[
//           { path: 'table', component: ProhibitedSubstanceTableComponent},
//           { path: 'picture', component:  ProhibitedSubstancePictureComponent   },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component:  TypicalPartComponent  },
           
//         ]  
//       }, 
//       { 
//         path: 'dent-resistance', component:DentResistanceComponent,
//         children:[
//           { path: 'table', component: DentResistanceTableComponent },
//           { path: 'picture', component:  DentResistancePictureComponent  },
//           { path: 'report', component:  ReportComponent  },
//           { path: 'typical-part', component: TypicalPartComponent },
          
//         ]  
//       },
//       { 
//         path: 'secondary-working-embrittlement', component:SecondaryWorkingEmbrittlementComponent,
//         children:[
//           { path: 'table', component: SecondaryWorkingEmbrittlementTableComponent},
//           { path: 'picture', component:  SecondaryWorkingEmbrittlementPictureComponent    },
//           { path: 'report', component:   ReportComponent   },
//           { path: 'typical-part', component: TypicalPartComponent   },
          
//         ]  
//       },
//       { 
//         path: 'flanging-clasp', component:FlangingClaspComponent,
//         children:[
//           { path: 'table', component: FlangingClaspTableComponent},
//           { path: 'picture', component:  FlangingClaspPictureComponent   },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component:  TypicalPartComponent  },
           
//         ]  
//       },
//       { 
//         path: 'hydrogen-induced-delayed-fracture', component:HydrogenInducedDelayedFractureComponent,
//         children:[
//           { path: 'table', component: HydrogenInducedDelayedFractureTableComponent },
//           { path: 'picture', component: HydrogenInducedDelayedFracturePictureComponent  },
//           { path: 'report', component: ReportComponent  },
//           { path: 'typical-part', component:TypicalPartComponent },
          
//         ]  
//       },
//       { 
//         path: 'welding', component:WeldingComponent,
//         children:[
//           { path: 'table', component: WeldingTableComponent },
//           { path: 'picture', component:  WeldingPictureComponent   },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component:  TypicalPartComponent  },
         
//         ]  
//       },
//       { 
//         path: 'cementing', component:CementingComponent ,
//         children:[
//           { path: 'table', component:CementingTableComponent },
//           { path: 'picture', component:  CementingPictureComponent     },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component: TypicalPartComponent  },
           
//         ]  
//       },
//       { 
//         path: 'painting', component:PaintingComponent ,
//         children:[
//           { path: 'table', component:PaintingTableComponent},
//           { path: 'picture', component:  PaintingPictureComponent   },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component:  TypicalPartComponent   },
          
//         ]  
//       },
//       { 
//         path: 'fld', component:FLDComponent ,
//         children:[
//           { path: 'table', component:FldTableComponent },
//           { path: 'picture', component:  FldPictureComponent     },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component:  TypicalPartComponent  },
          
//         ]  
//       },
//       { 
//         path: 'rebound', component:ReboundComponent ,
//         children:[
//           { path: 'table', component:ReboundTableComponent },
//           { path: 'picture', component:  ReboundPictureComponent     },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component: TypicalPartComponent },
         
//         ]  
//       },
//       { 
//         path: 'bake-hardening', component:BakeHardeningComponent  ,
//         children:[
//           { path: 'table', component: BakeHardeningTableComponent  },
//           { path: 'picture', component:  BakeHardeningPictureComponent  },
//           { path: 'report', component:  ReportComponent   },
//           { path: 'typical-part', component: TypicalPartComponent  },
          
//         ]  
//       },
//       { 
//         path: 'surface-property', component:SurfacePropertyComponent   ,
//         children:[
//           { path: 'table', component: SurfacePropertyTableComponent },
//           { path: 'picture', component:  SurfacePropertyPictureComponent  },
//           { path: 'report', component:  ReportComponent  },
//           { path: 'typical-part', component: TypicalPartComponent },
         
//         ]  
//       },
//       { 
//         path: 'applications/:car', component:ApplicationsComponent   ,
        
//       },
//       { 
//         path: 'simulationCard', component:SimulationCardComponent   ,
        
//       },
  

//   ]},

//   // { path: 'report-fullscreen', component:PageDisplayReportFsComponent},
//   // { path: 'attribute-constract', component:PageAttributeConstractComponent},
//   // { path: 'material-fake', component:PageMaterialFakeComponent},
//   // { path: 'material-floating-box', component:PageMaterialFloatingBoxComponent},
//   // { path: 'system-manage', component:PageSystemManageComponent },
//   // { path: 'factory', component: FormFactoryListComponent },
//   // { path: 'typicalpart', component: FormTypicpartListComponent },
//   // { path: 'material-trial', component: PageMaterialTrialComponent },
//   // { path: 'materialss', component: FormMateriaListComponent },
//   { path: 'contrast', component: PageContrastComponent,canActivate: [LoginGuardService]},
//   { path: '404', component: Page404Component ,canActivate: [LoginGuardService]},
//   { path: '**', redirectTo: '/404' ,pathMatch: 'full',},


// ]

// routes.push


@NgModule({
  imports: [ RouterModule.forRoot(currentRoutes,{scrollPositionRestoration: 'enabled' }) ],  //初始化路由器,并让它开始监听浏览器中的地址变化,导航后页面滚动条滚动到顶部
  exports: [ RouterModule ],  //导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
})
export class AppRoutingModule {



 }
