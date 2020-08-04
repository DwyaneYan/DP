import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService} from './api.service'
@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private router: Router,
    public ApiService:ApiService) { }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLogin: boolean;
    // 判断用户是否登入
    const user = sessionStorage.getItem("token")
    if (!user) {
        isLogin = false;
        // 未登入跳转到登入界面
        this.router.navigateByUrl('/login');
    } else {
        isLogin = true;
    }
    //判断是否从VIM跳转
    console.log(route.queryParams)
    if(route.queryParams.projectId && route.queryParams.directoryId){
      isLogin = false;
      //根据projectId和directoryId查询得到materialId

      //再根据materialId查询这条材料做了哪些试验，取第一个试验名称

      //最终根据材料id和试验名称得到真实跳转url
     // this.router.navigateByUrl(`/display/${}`);
    }
    return isLogin;
}

}
