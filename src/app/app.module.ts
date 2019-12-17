import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { PageConstractComponent } from './page-constract/page-constract.component';
import { PageAttributeConstractComponent } from './page-attribute-constract/page-attribute-constract.component';
import { FormNavigationComponent } from './form-navigation/form-navigation.component';
import { FormMaterialDbBackgroundComponent } from './form-material-db-background/form-material-db-background.component';
import { FormExperimentalItemComponent } from './form-experimental-item/form-experimental-item.component';
import { FormMaterialListComponent } from './form-material-list/form-material-list.component';
import { FormDisplayNavigationComponent } from './form-display-navigation/form-display-navigation.component';
import { AppRoutingModule } from './app-routing.module';
import { FormLoginDialogComponent } from './form-login-dialog/form-login-dialog.component';
import { FormCascaderOptionComponent } from './form-cascader-option/form-cascader-option.component';
import { FormMaterialListFakeComponent } from './form-material-list-fake/form-material-list-fake.component';
import { PageMaterialFakeComponent } from './page-material-fake/page-material-fake.component';
import { FormFloatingBoxComponent } from './form-floating-box/form-floating-box.component';
import { PageMaterialFloatingBoxComponent } from './page-material-floating-box/page-material-floating-box.component';
import { PageSystemManageComponent } from './page-system-manage/page-system-manage.component';
import { PageDisplayhomeComponent } from './page-displayhome/page-displayhome.component';


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
    PageConstractComponent,
    PageAttributeConstractComponent,
    FormNavigationComponent,
    FormMaterialDbBackgroundComponent,
    FormExperimentalItemComponent,
    FormMaterialListComponent,
    FormDisplayNavigationComponent,
    FormLoginDialogComponent,
    FormCascaderOptionComponent,
    FormMaterialListFakeComponent,
    PageMaterialFakeComponent,
    FormFloatingBoxComponent,
    PageMaterialFloatingBoxComponent,
    PageSystemManageComponent,
    PageDisplayhomeComponent,
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
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
