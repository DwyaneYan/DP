import { Component, OnInit } from '@angular/core';
import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';
import { ApiService } from 'src/app/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';

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
    public router:Router


  ) { }
token=''
  ngOnInit() {
//     let httpOptions = {
//       headers: new HttpHeaders({
//         'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
//          //'host':'172.20.10.5:60001'
//       }),
//       param: {}  
//     };
//     this.ApiService.getInfo(httpOptions).then((res:any)=>{
// console.log( res.roles)
let res=JSON.parse(sessionStorage.getItem("permissions"))
      if(res.roles.indexOf('admin')!=-1){
        this.system=true
            }else{
              this.system = false
            }
   this.token= sessionStorage.getItem("token")
   this.href=`http://10.130.53.6:80/index?token=${this.token}`
    
  }
  isVisible=false
  getinfo(){
    let httpOptions = {
            headers: new HttpHeaders({
              'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
            }),
          };
    this.ApiService.getInfo(httpOptions).then((res:any)=>{
      if(res.msg!="操作成功"){
  sessionStorage.removeItem("token")
       this. isVisible=true
      }
//       else{
// this.href=`http://10.130.53.4:81/index?token=${sessionStorage.getItem("token")}`

//       }
    })
  }

  handleOk(): void {

    this.isVisible = false;
    this.router.navigateByUrl("")

  }

  handleCancel(): void {

    this.isVisible = false;
  }

  out(){
  sessionStorage.removeItem("token")
  this.ApiService.logout()
 this.router.navigateByUrl('login'); 
//location.reload()
  }
}
