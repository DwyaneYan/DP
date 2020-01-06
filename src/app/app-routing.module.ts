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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PageLoginComponent},
  { path: 'platform', component: PagePlatformComponent},
  { path: 'material', component: PageMaterialComponent},
  { path: 'display/:materialId', component:PageDisplayComponent,},

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
