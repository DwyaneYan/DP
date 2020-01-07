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
import { PageConstractComponent } from './page-constract/page-constract.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent},
  { path: 'platform', component: PagePlatformComponent},
  { path: 'material', component: PageMaterialComponent},
  { path: 'display/:materialId', component:PageDisplayComponent},

  { 
    path: 'display/:materialId/static-tension-home', component: StaticTensionHomeComponent,
    children:[
      { path: 'table', component: StaticTensionTableComponent },
      { path: 'picture', component: StaticTensionPictureComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },

  { 
    path: 'display/:materialId/bending', component: BendingComponent,
    children:[
      { path: 'table', component: BendingTableComponent },
      { path: 'picture', component: BendingPictureComponent },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/compression', component:CompressionComponent,
    children:[
      { path: 'table', component: CompressionTableComponent },
      { path: 'picture', component: CompressionPictureComponent  },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/highspeedstrech', component:HighspeedstrechComponent,
    children:[
      { path: 'table', component: HighspeedstrechTableComponent},
      { path: 'picture', component: HighspeedstrechPictureComponent   },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/lowcyclefatigue', component:LowcyclefatigueComponent,
    children:[
      { path: 'table', component:  LowcyclefatigueTableComponent},
      { path: 'picture', component:  LowcyclefatiguePictureComponent    },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/highcyclefatigue', component:HighcyclefatigueComponent,
    children:[
      { path: 'table', component:  HighcyclefatigueTableComponent},
      { path: 'picture', component:  HighcyclefatiguePictureComponent     },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/metallographic', component:MetallographicComponent,
    children:[
      { path: 'table', component:  MetallographicTableComponent },
      { path: 'picture', component:  MetallographicPictureComponent     },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/physicalperformance', component: PhysicalperformanceComponent,
    children:[
      { path: 'table', component:  PhysicalperformanceTableComponent },
      { path: 'picture', component:  PhysicalperformancePictureComponent     },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/chemicalelement', component:ChemicalelementComponent,
    children:[
      { path: 'table', component: ChemicalelementTableComponent},
      { path: 'picture', component:  ChemicalelementPictureComponent    },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/prohibited-substance', component:ProhibitedSubstanceComponent,
    children:[
      { path: 'table', component: ProhibitedSubstanceTableComponent},
      { path: 'picture', component:  ProhibitedSubstancePictureComponent   },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  }, { 
    path: 'display/:materialId/dent-resistance', component:DentResistanceComponent,
    children:[
      { path: 'table', component: DentResistanceTableComponent },
      { path: 'picture', component:  DentResistancePictureComponent  },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  }, { 
    path: 'display/:materialId/secondary-working-embrittlement', component:SecondaryWorkingEmbrittlementComponent,
    children:[
      { path: 'table', component: SecondaryWorkingEmbrittlementTableComponent},
      { path: 'picture', component:  SecondaryWorkingEmbrittlementPictureComponent    },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  }, { 
    path: 'display/:materialId/flanging-clasp', component:FlangingClaspComponent,
    children:[
      { path: 'table', component: FlangingClaspTableComponent},
      { path: 'picture', component:  FlangingClaspPictureComponent   },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },{ 
    path: 'display/:materialId/hydrogen-induced-delayed-fracture', component:HydrogenInducedDelayedFractureComponent,
    children:[
      { path: 'table', component: HydrogenInducedDelayedFractureTableComponent },
      { path: 'picture', component: HydrogenInducedDelayedFracturePictureComponent  },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },{ 
    path: 'display/:materialId/welding', component:WeldingComponent,
    children:[
      { path: 'table', component: WeldingTableComponent },
      { path: 'picture', component:  WeldingPictureComponent   },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },{ 
    path: 'display/:materialId/cementing', component:CementingComponent ,
    children:[
      { path: 'table', component:CementingTableComponent },
      { path: 'picture', component:  CementingPictureComponent     },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },{ 
    path: 'display/:materialId/painting', component:PaintingComponent ,
    children:[
      { path: 'table', component:PaintingTableComponent},
      { path: 'picture', component:  PaintingPictureComponent   },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },{ 
    path: 'display/:materialId/fld', component:FLDComponent ,
    children:[
      { path: 'table', component:FldTableComponent },
      { path: 'picture', component:  FldPictureComponent     },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },{ 
    path: 'display/:materialId/cementing', component:ReboundComponent ,
    children:[
      { path: 'table', component:ReboundTableComponent },
      { path: 'picture', component:  ReboundPictureComponent     },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },{ 
    path: 'display/:materialId/bake-hardening', component:BakeHardeningComponent  ,
    children:[
      { path: 'table', component: BakeHardeningTableComponent  },
      { path: 'picture', component:  BakeHardeningPictureComponent  },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },
  { 
    path: 'display/:materialId/surface-property', component:SurfacePropertyComponent   ,
    children:[
      { path: 'table', component: SurfacePropertyTableComponent },
      { path: 'picture', component:  SurfacePropertyPictureComponent  },
      { path: '', redirectTo: 'table', pathMatch: 'full'}
    ]  
  },

  { path: 'report-fullscreen', component:PageDisplayReportFsComponent},
  { path: 'contrast', component:PageConstractComponent},
  { path: 'attribute-constract', component:PageAttributeConstractComponent},
  { path: 'material-fake', component:PageMaterialFakeComponent},
  { path: 'material-floating-box', component:PageMaterialFloatingBoxComponent},
  { path: 'system-manage', component:PageSystemManageComponent },
  { path: 'factory', component: FormFactoryListComponent },
  { path: 'typicalpart', component: FormTypicpartListComponent },
  { path: 'material-trial', component: PageMaterialTrialComponent },
  { path: 'materialss', component: FormMateriaListComponent },

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  //初始化路由器,并让它开始监听浏览器中的地址变化
  exports: [ RouterModule ],  //导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
})
export class AppRoutingModule { }
