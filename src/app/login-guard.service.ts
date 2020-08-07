import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { ApiService } from "./api.service";
@Injectable({
  providedIn: "root",
})
export class LoginGuardService {
  constructor(private router: Router, public ApiService: ApiService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let isLogin: boolean;
    // 判断用户是否登入
    const user = sessionStorage.getItem("token");
    if (!user) {
      isLogin = false;
      // 未登入跳转到登入界面
      if (window.location.search.indexOf("vimId") != -1) {
        this.router.navigateByUrl("/login" + window.location.search);
      } else {
        this.router.navigateByUrl("/login");
      }
    } else {
      isLogin = true;
    }
    return isLogin;
  }
}
