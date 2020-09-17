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

import { AtestComponent } from './atest/atest.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PagePlatformComponent } from './page-platform/page-platform.component';
import { PageMaterialComponent } from './page-material/page-material.component';
import { PageDisplayTableComponent } from './page-display-table/page-display-table.component';
import { PageDisplayPictureComponent } from './page-display-picture/page-display-picture.component';
import { PageDisplayReportComponent } from './page-display-report/page-display-report.component';
import { PageDisplayReportFsComponent } from './page-display-report-fs/page-display-report-fs.component';
import { PageDisplayTypicalPartComponent } from './page-display-typical-part/page-display-typical-part.component';
import { PageAttributeConstractComponent } from './page-attribute-constract/page-attribute-constract.component';
import { FormNavigationComponent } from './form-navigation/form-navigation.component';
import { FormMaterialDbBackgroundComponent } from './form-material-db-background/form-material-db-background.component';
import { FormExperimentalItemComponent } from './form-experimental-item/form-experimental-item.component';
import { FormMaterialListComponent } from './form-material-list/form-material-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormLoginDialogComponent } from './form-login-dialog/form-login-dialog.component';
import { FormCascaderOptionComponent } from './form-cascader-option/form-cascader-option.component';
import { FormMaterialListFakeComponent } from './form-material-list-fake/form-material-list-fake.component';
import { PageMaterialFakeComponent } from './page-material-fake/page-material-fake.component';
import { FormFloatingBoxComponent } from './form-floating-box/form-floating-box.component';
import { PageMaterialFloatingBoxComponent } from './page-material-floating-box/page-material-floating-box.component';
import { PageSystemManageComponent } from './page-system-manage/page-system-manage.component';
import { PageDisplayhomeComponent } from './page-displayhome/page-displayhome.component';
import { FormFactoryListComponent } from './form-factory-list/form-factory-list.component';
import { FormTypicpartListComponent } from './form-typicpart-list/form-typicpart-list.component';
import { PageMaterialTrialComponent } from './page-material-trial/page-material-trial.component';
import { FormMateriaListComponent } from './form-materia-list/form-materia-list.component';
import { PageDisplayComponent } from './page-display/page-display.component';
import { FormTrialDetailsComponent } from './form-trial-details/form-trial-details.component';
import { DetailsDataComponent } from './form-trial-details/details-data/details-data.component';
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
import { StaticTensionNavigateComponent } from './form-trial-details/static-tension-home/static-tension-navigate/static-tension-navigate.component';
import { BaseInfoComponent } from './form-trial-details/base-info/base-info.component';
import { BendingNavigateComponent } from './form-trial-details/bending/bending-navigate/bending-navigate.component';
import { CompressionNavigateComponent } from './form-trial-details/compression/compression-navigate/compression-navigate.component';
import { CompressionPictureComponent } from './form-trial-details/compression/compression-picture/compression-picture.component';
import { CompressionTableComponent } from './form-trial-details/compression/compression-table/compression-table.component';
import { HighspeedstrechNavigateComponent } from './form-trial-details/highspeedstrech/highspeedstrech-navigate/highspeedstrech-navigate.component';
import { HighspeedstrechPictureComponent } from './form-trial-details/highspeedstrech/highspeedstrech-picture/highspeedstrech-picture.component';
import { HighspeedstrechTableComponent } from './form-trial-details/highspeedstrech/highspeedstrech-table/highspeedstrech-table.component';
import { LowcyclefatigueNavigateComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-navigate/lowcyclefatigue-navigate.component';
import { LowcyclefatiguePictureComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-picture/lowcyclefatigue-picture.component';
import { LowcyclefatigueTableComponent } from './form-trial-details/lowcyclefatigue/lowcyclefatigue-table/lowcyclefatigue-table.component';
import { HighcyclefatigueNavigateComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-navigate/highcyclefatigue-navigate.component';
import { HighcyclefatiguePictureComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-picture/highcyclefatigue-picture.component';
import { HighcyclefatigueTableComponent } from './form-trial-details/highcyclefatigue/highcyclefatigue-table/highcyclefatigue-table.component';
import { MetallographicNavigateComponent } from './form-trial-details/metallographic/metallographic-navigate/metallographic-navigate.component';
import { MetallographicPictureComponent } from './form-trial-details/metallographic/metallographic-picture/metallographic-picture.component';
import { MetallographicTableComponent } from './form-trial-details/metallographic/metallographic-table/metallographic-table.component';
import { PhysicalperformanceNavigateComponent } from './form-trial-details/physicalperformance/physicalperformance-navigate/physicalperformance-navigate.component';
import { PhysicalperformancePictureComponent } from './form-trial-details/physicalperformance/physicalperformance-picture/physicalperformance-picture.component';
import { PhysicalperformanceTableComponent } from './form-trial-details/physicalperformance/physicalperformance-table/physicalperformance-table.component';
import { ChemicalelementNavigateComponent } from './form-trial-details/chemicalelement/chemicalelement-navigate/chemicalelement-navigate.component';
import { ChemicalelementPictureComponent } from './form-trial-details/chemicalelement/chemicalelement-picture/chemicalelement-picture.component';
import { ChemicalelementTableComponent } from './form-trial-details/chemicalelement/chemicalelement-table/chemicalelement-table.component';

import { ProhibitedSubstanceNavigateComponent } from './form-trial-details/prohibited-substance/prohibited-substance-navigate/prohibited-substance-navigate.component';
import { ProhibitedSubstancePictureComponent } from './form-trial-details/prohibited-substance/prohibited-substance-picture/prohibited-substance-picture.component';
import { ProhibitedSubstanceTableComponent } from './form-trial-details/prohibited-substance/prohibited-substance-table/prohibited-substance-table.component';
import { DentResistanceNavigateComponent } from './form-trial-details/dent-resistance/dent-resistance-navigate/dent-resistance-navigate.component';
import { DentResistancePictureComponent } from './form-trial-details/dent-resistance/dent-resistance-picture/dent-resistance-picture.component';
import { DentResistanceTableComponent } from './form-trial-details/dent-resistance/dent-resistance-table/dent-resistance-table.component';
import { SecondaryWorkingEmbrittlementNavigateComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-navigate/secondary-working-embrittlement-navigate.component';
import { SecondaryWorkingEmbrittlementPictureComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-picture/secondary-working-embrittlement-picture.component';
import { SecondaryWorkingEmbrittlementTableComponent } from './form-trial-details/secondary-working-embrittlement/secondary-working-embrittlement-table/secondary-working-embrittlement-table.component';
import { FlangingClaspNavigateComponent } from './form-trial-details/flanging-clasp/flanging-clasp-navigate/flanging-clasp-navigate.component';
import { FlangingClaspPictureComponent } from './form-trial-details/flanging-clasp/flanging-clasp-picture/flanging-clasp-picture.component';
import { FlangingClaspTableComponent } from './form-trial-details/flanging-clasp/flanging-clasp-table/flanging-clasp-table.component';
import { HydrogenInducedDelayedFractureNavigateComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-navigate/hydrogen-induced-delayed-fracture-navigate.component';
import { HydrogenInducedDelayedFracturePictureComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-picture/hydrogen-induced-delayed-fracture-picture.component';
import { HydrogenInducedDelayedFractureTableComponent } from './form-trial-details/hydrogen-induced-delayed-fracture/hydrogen-induced-delayed-fracture-table/hydrogen-induced-delayed-fracture-table.component';
import { WeldingNavigateComponent } from './form-trial-details/welding/welding-navigate/welding-navigate.component';
import { WeldingPictureComponent } from './form-trial-details/welding/welding-picture/welding-picture.component';
import { WeldingTableComponent } from './form-trial-details/welding/welding-table/welding-table.component';
import { CementingNavigateComponent } from './form-trial-details/cementing/cementing-navigate/cementing-navigate.component';
import { CementingPictureComponent } from './form-trial-details/cementing/cementing-picture/cementing-picture.component';
import { CementingTableComponent } from './form-trial-details/cementing/cementing-table/cementing-table.component';
import { PaintingNavigateComponent } from './form-trial-details/painting/painting-navigate/painting-navigate.component';
import { PaintingPictureComponent } from './form-trial-details/painting/painting-picture/painting-picture.component';
import { PaintingTableComponent } from './form-trial-details/painting/painting-table/painting-table.component';
import { FldNavigateComponent } from './form-trial-details/fld/fld-navigate/fld-navigate.component';
import { FldPictureComponent } from './form-trial-details/fld/fld-picture/fld-picture.component';
import { FldTableComponent } from './form-trial-details/fld/fld-table/fld-table.component';
import { ReboundNavigateComponent } from './form-trial-details/rebound/rebound-navigate/rebound-navigate.component';
import { ReboundPictureComponent } from './form-trial-details/rebound/rebound-picture/rebound-picture.component';
import { ReboundTableComponent } from './form-trial-details/rebound/rebound-table/rebound-table.component';
import { BakeHardeningNavigateComponent } from './form-trial-details/bake-hardening/bake-hardening-navigate/bake-hardening-navigate.component';
import { BakeHardeningPictureComponent } from './form-trial-details/bake-hardening/bake-hardening-picture/bake-hardening-picture.component';
import { BakeHardeningTableComponent } from './form-trial-details/bake-hardening/bake-hardening-table/bake-hardening-table.component';
import { SurfacePropertyPictureComponent,} from './form-trial-details/surface-property/surface-property-picture/surface-property-picture.component';
import { SurfacePropertyNavigateComponent} from './form-trial-details/surface-property/surface-property-navigate/surface-property-navigate.component';
import { SurfacePropertyTableComponent } from './form-trial-details/surface-property/surface-property-table/surface-property-table.component';
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
import { PageContrastComponent } from './page-contrast/page-contrast.component';
import { AppFormPictureComponent } from './app-form-picture/app-form-picture.component';
import { ApplicationsComponent } from './form-trial-details/applications/applications.component';
import { FormAddCarComponent } from './form-add-car/form-add-car.component';
import { FormModifyCarComponent } from './form-modify-car/form-modify-car.component';
import { SimulationCardComponent } from './simulation-card/simulation-card.component';
import { ChildrenNavComponent } from './children-nav/children-nav.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { Page404Component } from './page404/page404.component';
import { TypicalPartComponent } from './typical-part/typical-part.component';
import { initRouter } from './init-routers';
// import { PageUsermanualComponent } from './page-usermanual/page-usermanual.component';
// import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AtestComponent,
    PageLoginComponent,
    PagePlatformComponent,
    PageMaterialComponent,
    PageDisplayTableComponent,
    PageDisplayPictureComponent,
    PageDisplayReportComponent,
    PageDisplayReportFsComponent,
    PageDisplayTypicalPartComponent,
    PageAttributeConstractComponent,
    FormNavigationComponent,
    FormMaterialDbBackgroundComponent,
    FormExperimentalItemComponent,
    FormMaterialListComponent,
    FormLoginDialogComponent,
    FormCascaderOptionComponent,
    FormMaterialListFakeComponent,
    PageMaterialFakeComponent,
    FormFloatingBoxComponent,
    PageMaterialFloatingBoxComponent,
    PageSystemManageComponent,
    PageDisplayhomeComponent,
    FormFactoryListComponent,
    FormTypicpartListComponent,
    PageMaterialTrialComponent,
    FormMateriaListComponent,
    PageDisplayComponent,
    FormTrialDetailsComponent,
    DetailsDataComponent,
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
    StaticTensionNavigateComponent,
    BaseInfoComponent,
    BendingNavigateComponent,
    CompressionNavigateComponent,
    CompressionPictureComponent,
    CompressionTableComponent,
    HighspeedstrechNavigateComponent,
    HighspeedstrechPictureComponent,
    HighspeedstrechTableComponent,
    LowcyclefatigueNavigateComponent,
    LowcyclefatiguePictureComponent,
    LowcyclefatigueTableComponent,
    HighcyclefatigueNavigateComponent,
    HighcyclefatiguePictureComponent,
    HighcyclefatigueTableComponent,
    MetallographicNavigateComponent,
    MetallographicPictureComponent,
    MetallographicTableComponent,
    PhysicalperformanceNavigateComponent,
    PhysicalperformancePictureComponent,
    PhysicalperformanceTableComponent,
    ChemicalelementNavigateComponent,
    ChemicalelementPictureComponent,
    ChemicalelementTableComponent,

    ProhibitedSubstanceNavigateComponent,

    ProhibitedSubstancePictureComponent,

    ProhibitedSubstanceTableComponent,

    DentResistanceNavigateComponent,

    DentResistancePictureComponent,

    DentResistanceTableComponent,

    SecondaryWorkingEmbrittlementNavigateComponent,

    SecondaryWorkingEmbrittlementPictureComponent,

    SecondaryWorkingEmbrittlementTableComponent,

    FlangingClaspNavigateComponent,

    FlangingClaspPictureComponent,

    FlangingClaspTableComponent,

    HydrogenInducedDelayedFractureNavigateComponent,

    HydrogenInducedDelayedFracturePictureComponent,

    HydrogenInducedDelayedFractureTableComponent,

    WeldingNavigateComponent,

    WeldingPictureComponent,

    WeldingTableComponent,

    CementingNavigateComponent,

    CementingPictureComponent,

    CementingTableComponent,

    PaintingNavigateComponent,

    PaintingPictureComponent,

    PaintingTableComponent,

    FldNavigateComponent,

    FldPictureComponent,

    FldTableComponent,

    ReboundNavigateComponent,

    ReboundPictureComponent,

    ReboundTableComponent,

    BakeHardeningNavigateComponent,

    BakeHardeningPictureComponent,

    BakeHardeningTableComponent,


    SurfacePropertyPictureComponent,
    SurfacePropertyTableComponent,
    SurfacePropertyNavigateComponent,
    StaticTensionTypicalPartComponent,
    BendingReportComponent,
    BendingTypicalPartComponent,
    CompressionReportComponent,
    CompressionTypicalPartComponent,
    HighspeedstrechReportComponent,
    HighspeedstrechTypicalPartComponent,
    LowcyclefatigueReportComponent,
    LowcyclefatigueTypicalPartComponent,
    HighcyclefatigueReportComponent,
    HighcyclefatigueTypicalPartComponent,
    MetallographicReportComponent,
    MetallographicTypicalPartComponent,
    PhysicalperformanceReportComponent,
    PhysicalperformanceTypicalPartComponent,
    ChemicalelementReportComponent,
    ChemicalelementTypicalPartComponent,
    ProhibitedSubstanceReportComponent,
    ProhibitedSubstanceTypicalPartComponent,
    SurfacePropertyReportComponent,
    SurfacePropertyTypicalPartComponent,
    DentResistanceReportComponent,
    DentResistanceTypicalPartComponent,
    SecondaryWorkingEmbrittlementReportComponent,
    SecondaryWorkingEmbrittlementTypicalPartComponent,
    FlangingClaspReportComponent,
    FlangingClaspTypicalPartComponent,
    HydrogenInducedDelayedFractureReportComponent,
    HydrogenInducedDelayedFractureTypicalPartComponent,
    WeldingReportComponent,
    WeldingTypicalPartComponent,
    CementingReportComponent,
    CementingTypicalPartComponent,
    PaintingReportComponent,
    PaintingTypicalPartComponent,
    FldReportComponent,
    FldTypicalPartComponent,
    ReboundReportComponent,
    ReboundTypicalPartComponent,
    BakeHardeningReportComponent,
    BakeHardeningTypicalPartComponent,
    PageContrastComponent,
    AppFormPictureComponent,
    ApplicationsComponent,
    FormAddCarComponent,
    FormModifyCarComponent,
    SimulationCardComponent,
    ChildrenNavComponent,
    ReportComponent,
    LoginComponent,
    Page404Component,
    TypicalPartComponent,




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
    // InitRoutersModule,
   
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, CookieService  ,],
  bootstrap: [AppComponent]
})
export class AppModule { }
