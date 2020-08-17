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
  // target=''
token=''
userName = ''
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
      if(res.roles.indexOf('wy')!=-1){
        this.system=true
            }else{
              this.system = false
            }
  //  this.token= sessionStorage.getItem("token")
  //  this.href=`http://10.130.53.6:80/usermanage?token=${this.token}`
  // this.href='#'
  // this.target = '_self'
  //调若依的接口获取用户的基本信息
    this.ApiService.getUserProfile().then((res:any)=>
      {
        this.userName=res.data.userName
        console.log( this.userName)}
      )
    
  }
  isVisible=false
  // 点击系统管理前验证token是否失效
  checkToken(){
    // this.href='#'
  // this.target = '_self'
  //如果sessionStorage中有token
    if(sessionStorage.getItem("token")){
    let httpOptions = {
            headers: new HttpHeaders({
              'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
            }),
          };
          //用token调若依的getInfo接口，如果返回不是操作成功表明token失效，那么移除sessionStorage中的token并且提示重新登录
    this.ApiService.getInfo(httpOptions).then((res:any)=>{
      if(res.msg!="操作成功"){
  sessionStorage.removeItem("token")
       this. isVisible=true

      }
      else{
//this.href=`http://10.130.53.4:80/index?token=${sessionStorage.getItem("token")}`
// debugger;
//如果操作成功表示token还未失效，那么带着token跳转到系统管理
         this.token= sessionStorage.getItem("token")
         window.open(`http://localhost:81/usermanage?token=${this.token}`)
// this.target = '_blank'
// console.log(this.href,this.target)
      }
    })}else{
      this. isVisible=true

  //  this.href=`http://10.130.53.6:80/usermanage`

    }
  }

  handleOk(): void {

    this.isVisible = false;
    // debugger;
    this.router.navigateByUrl("/login")

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
