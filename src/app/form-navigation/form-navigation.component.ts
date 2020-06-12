import { Component, OnInit } from '@angular/core';
import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrls: ['./form-navigation.component.css']
})
export class FormNavigationComponent implements OnInit {
  system=false
  href=''
  constructor(
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    private ApiService: ApiService,


  ) { }
token=''
  ngOnInit() {

    this.ApiService.getInfo().then((res:any)=>{
      console.log(res.roles)
      if(res.roles.indexOf('admin')!=-1){
        this.system=true
            }
            console.log(this.system)
 window.sessionStorage.setItem('permissions',  JSON.stringify(res)); 
 
    })
    this.ApiService.getRouters().then((res:any)=>{
      console.log(res)
      window.sessionStorage.setItem('data',  JSON.stringify(res)); 
         })
    // this.permissions =window.sessionStorage.getItem("permissions")
   this.token= this.ApiService.getToken()
    this.href=`http://10.130.53.4:81/index?token=${this.token}`
    
  }

}
