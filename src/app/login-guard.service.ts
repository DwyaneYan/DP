import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  UrlTree
} from "@angular/router";


import { ApiService } from "./api.service";
@Injectable({
  providedIn: "root",
})
export class LoginGuardService implements CanActivate, CanActivateChild{
  constructor(private router: Router, public ApiService: ApiService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean|UrlTree  {
    let isLogin: boolean;
    // 判断用户是否登入
    const user = sessionStorage.getItem("token");
    console.log(route)
    if (!user) {
      isLogin = false;    
     return  this.router.parseUrl("/login");    
      // location.reload() 
    } else {
      isLogin = true;
    }
    return isLogin;
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){  
      // 未登入跳转到登入界面
    let isLogin: boolean;
    const user = sessionStorage.getItem("token");
    console.log(user)
      if (!user && window.location.search.indexOf("vim") != -1) {
        console.log(user)
      isLogin = false;    
      let p = window.location.pathname.slice(1)
      let name = p.replace(/\//g, '&')
        this.router.navigateByUrl("/login" + "?" + name + "&" + "type=vim");//要把pathname中的斜杠替换成&
      }
      else if (!user) {
        isLogin = false;    
        this.router.navigateByUrl("/login");     
      }
      else {
        isLogin = true;
      }
     return isLogin;
  }
}
