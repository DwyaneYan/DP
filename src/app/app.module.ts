import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);


import { PageLoginComponent } from './page-login/page-login.component';
import { PagePlatformComponent } from './page-platform/page-platform.component';
import { PageMaterialComponent } from './page-material/page-material.component';
import { FormNavigationComponent } from './form-navigation/form-navigation.component';
import { FormMaterialDbBackgroundComponent } from './form-material-db-background/form-material-db-background.component';
import { FormExperimentalItemComponent } from './form-experimental-item/form-experimental-item.component';
import { FormMaterialListComponent } from './form-material-list/form-material-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormLoginDialogComponent } from './form-login-dialog/form-login-dialog.component';
import { PageDisplayComponent } from './page-display/page-display.component';
import { FormTrialDetailsComponent } from './form-trial-details/form-trial-details.component';
import { BendingComponent } from './form-trial-details/bending/bending.component';
import { CompressionComponent } from './form-trial-details/compression/compression.component';
import { HighspeedstrechComponent } from './form-trial-details/highspeedstrech/highspeedstrech.component';
import { LowcyclefatigueComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue.component';
import { HighcyclefatigueComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue.component';
import { MetallographicComponent } from './form-trial-details/metallographic/metallographic.component';
import { PhysicalperformanceComponent } from './form-trial-details/physicalperformance/physicalperformance.component';
import { ChemicalelementComponent } from './form-trial-details/chemicalelement/chemicalelement.component';
import { ProhibitedSubstanceComponent } from './form-trial-details/prohibited-substance/prohibited-substance.component';
import { SurfacePropertyComponent } from './form-trial-details/surface-property/surface-property.component';
import { DentResistanceComponent } from './form-trial-details/dent-resistance/dent-resistance.component';
import { SecondaryWorkingEmbrittlementComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement.component';
import { FlangingClaspComponent } from './form-trial-details/flanging-clasp/flanging-clasp.component';
import { WeldingComponent } from './form-trial-details/welding/welding.component';
import { CementingComponent } from './form-trial-details/cementing/cementing.component';
import { HydrogenInducedDelayedFractureComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture.component';
import { FLDComponent } from './form-trial-details/fld/fld.component';
import { ReboundComponent } from './form-trial-details/rebound/rebound.component';
import { BakeHardeningComponent } from './form-trial-details/bake-hardening/bake-hardening.component';
import { PaintingComponent } from './form-trial-details/painting/painting.component';
import { StaticTensionHomeComponent } from './form-trial-details/static-tension-home/static-tension-home.component';
import { StaticTensionTableComponent } from './form-trial-details/static-tension-home/static-tension-table/static-tension-table.component';
import { StaticTensionPictureComponent } from './form-trial-details/static-tension-home/static-tension-picture/static-tension-picture.component';
import { BendingTableComponent } from './form-trial-details/bending/bending-table/bending-table.component';
import { BendingPictureComponent } from './form-trial-details/bending/bending-picture/bending-picture.component';
import { BaseInfoComponent } from './form-trial-details/base-info/base-info.component';
import { CompressionPictureComponent } from './form-trial-details/compression/compression-picture/compression-picture.component';
import { CompressionTableComponent } from './form-trial-details/compression/compression-table/compression-table.component';
import { HighspeedstrechPictureComponent } from './form-trial-details/highspeedstrech/highspeedstrech-picture/highspeedstrech-picture.component';
import { HighspeedstrechTableComponent } from './form-trial-details/highspeedstrech/highspeedstrech-table/highspeedstrech-table.component';
import { LowcyclefatiguePictureComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-picture/lowcyclefatigue-picture.component';
import { LowcyclefatigueTableComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-table/lowcyclefatigue-table.component';
import { HighcyclefatiguePictureComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-picture/highcyclefatigue-picture.component';
import { HighcyclefatigueTableComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-table/highcyclefatigue-table.component';
import { MetallographicPictureComponent } from './form-trial-details/metallographic/metallographic-picture/metallographic-picture.component';
import { MetallographicTableComponent } from './form-trial-details/metallographic/metallographic-table/metallographic-table.component';
import { PhysicalperformancePictureComponent } from './form-trial-details/physicalperformance/physicalperformance-picture/physicalperformance-picture.component';
import { PhysicalperformanceTableComponent } from './form-trial-details/physicalperformance/physicalperformance-table/physicalperformance-table.component';
import { ChemicalelementPictureComponent } from './form-trial-details/chemicalelement/chemicalelement-picture/chemicalelement-picture.component';
import { ChemicalelementTableComponent } from './form-trial-details/chemicalelement/chemicalelement-table/chemicalelement-table.component';
import { ProhibitedSubstancePictureComponent } from './form-trial-details/prohibited-substance/prohibited-substance-picture/prohibited-substance-picture.component';
import { ProhibitedSubstanceTableComponent } from './form-trial-details/prohibited-substance/prohibited-substance-table/prohibited-substance-table.component';
import { DentResistancePictureComponent } from './form-trial-details/dent-resistance/dent-resistance-picture/dent-resistance-picture.component';
import { DentResistanceTableComponent } from './form-trial-details/dent-resistance/dent-resistance-table/dent-resistance-table.component';
import { SecondaryWorkingEmbrittlementPictureComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-picture/secondary-working-embrittlement-picture.component';
import { SecondaryWorkingEmbrittlementTableComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-table/secondary-working-embrittlement-table.component';
import { FlangingClaspPictureComponent } from './form-trial-details/flanging-clasp/flanging-clasp-picture/flanging-clasp-picture.component';
import { FlangingClaspTableComponent } from './form-trial-details/flanging-clasp/flanging-clasp-table/flanging-clasp-table.component';
import { HydrogenInducedDelayedFracturePictureComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-picture/hydrogen-induced-delayed-fracture-picture.component';
import { HydrogenInducedDelayedFractureTableComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-table/hydrogen-induced-delayed-fracture-table.component';
import { WeldingPictureComponent } from './form-trial-details/welding/welding-picture/welding-picture.component';
import { WeldingTableComponent } from './form-trial-details/welding/welding-table/welding-table.component';
import { CementingPictureComponent } from './form-trial-details/cementing/cementing-picture/cementing-picture.component';
import { CementingTableComponent } from './form-trial-details/cementing/cementing-table/cementing-table.component';
import { PaintingPictureComponent } from './form-trial-details/painting/painting-picture/painting-picture.component';
import { PaintingTableComponent } from './form-trial-details/painting/painting-table/painting-table.component';
import { FldPictureComponent } from './form-trial-details/fld/fld-picture/fld-picture.component';
import { FldTableComponent } from './form-trial-details/fld/fld-table/fld-table.component';
import { ReboundPictureComponent } from './form-trial-details/rebound/rebound-picture/rebound-picture.component';
import { ReboundTableComponent } from './form-trial-details/rebound/rebound-table/rebound-table.component';
import { BakeHardeningPictureComponent } from './form-trial-details/bake-hardening/bake-hardening-picture/bake-hardening-picture.component';
import { BakeHardeningTableComponent } from './form-trial-details/bake-hardening/bake-hardening-table/bake-hardening-table.component';
import { SurfacePropertyPictureComponent,} from './form-trial-details/surface-property/surface-property-picture/surface-property-picture.component';
import { SurfacePropertyTableComponent } from './form-trial-details/surface-property/surface-property-table/surface-property-table.component';
import { PageContrastComponent } from './page-contrast/page-contrast.component';

import { ApplicationsComponent } from './form-trial-details/applications/applications.component';
import { FormAddCarComponent } from './form-add-car/form-add-car.component';
import { FormModifyCarComponent } from './form-modify-car/form-modify-car.component';
import { SimulationCardComponent } from './simulation-card/simulation-card.component';
import { ChildrenNavComponent } from './children-nav/children-nav.component';
import { ReportComponent } from './report/report.component';
import { CookieService } from 'ngx-cookie-service';
import { Page404Component } from './page404/page404.component';
import { TypicalPartComponent } from './typical-part/typical-part.component';
import { PictureComponent } from './picture/picture.component';
import { TrailnameComponent } from './trailname/trailname.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { httpInterceptorProviders} from './http-interceptors/index'

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PagePlatformComponent,
    PageMaterialComponent,
    FormNavigationComponent,
    FormMaterialDbBackgroundComponent,
    FormExperimentalItemComponent,
    FormMaterialListComponent,
    FormLoginDialogComponent,
    PageDisplayComponent,
    FormTrialDetailsComponent,
    BendingComponent,
    CompressionComponent,
    HighspeedstrechComponent,
    LowcyclefatigueComponent,
    HighcyclefatigueComponent,
    MetallographicComponent,
    PhysicalperformanceComponent,
    ChemicalelementComponent,
    ProhibitedSubstanceComponent,
    SurfacePropertyComponent,
    DentResistanceComponent,
    SecondaryWorkingEmbrittlementComponent,
    FlangingClaspComponent,
    WeldingComponent,
    CementingComponent,
    HydrogenInducedDelayedFractureComponent,
    FLDComponent,
    ReboundComponent,
    BakeHardeningComponent,
    PaintingComponent,
    StaticTensionHomeComponent,
    StaticTensionTableComponent,
    StaticTensionPictureComponent,
    BendingTableComponent,
    BendingPictureComponent,
    BaseInfoComponent,
    CompressionPictureComponent,
    CompressionTableComponent,
    HighspeedstrechPictureComponent,
    HighspeedstrechTableComponent,
    LowcyclefatiguePictureComponent,
    LowcyclefatigueTableComponent,
    HighcyclefatiguePictureComponent,
    HighcyclefatigueTableComponent,
    MetallographicPictureComponent,
    MetallographicTableComponent,
    PhysicalperformancePictureComponent,
    PhysicalperformanceTableComponent,
    ChemicalelementPictureComponent,
    ChemicalelementTableComponent,
    ProhibitedSubstancePictureComponent,
    ProhibitedSubstanceTableComponent,
    DentResistancePictureComponent,
    DentResistanceTableComponent,
    SecondaryWorkingEmbrittlementPictureComponent,
    SecondaryWorkingEmbrittlementTableComponent,
    FlangingClaspPictureComponent,
    FlangingClaspTableComponent,
    HydrogenInducedDelayedFracturePictureComponent,
    HydrogenInducedDelayedFractureTableComponent,
    WeldingPictureComponent,
    WeldingTableComponent,
    CementingPictureComponent,
    CementingTableComponent,
    PaintingPictureComponent,
    PaintingTableComponent,
    FldPictureComponent,
    FldTableComponent,
    ReboundPictureComponent,
    ReboundTableComponent,
    BakeHardeningPictureComponent,
    BakeHardeningTableComponent,
    SurfacePropertyPictureComponent,
    SurfacePropertyTableComponent,
    PageContrastComponent,
    ApplicationsComponent,
    FormAddCarComponent,
    FormModifyCarComponent,
    SimulationCardComponent,
    ChildrenNavComponent,
    ReportComponent,
    Page404Component,
    TypicalPartComponent,
    PictureComponent,
    TrailnameComponent,
    LineChartComponent,
  ],
  imports: [
    
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    AppRoutingModule,
    NgxEchartsModule,

   
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, CookieService ,httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
