import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizationGuard implements CanActivate {
  constructor(private router:Router,private toaster :ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
      const token = localStorage.getItem('token');
      if (token) {
        console.log(state);
      
        if (state.url.indexOf('admin') >= 0) {
          let user: any = localStorage.getItem('user');
          if (user) {
           
            user = JSON.parse(user);
            if (user.role == 'Admin') {
              this.toaster.success('welcome');
              return true;
            }
       
            else {
              this.router.navigate(['auth/login']);
              this.toaster.warning('this page for admin');
              return false;
            }
            
          }
  
          else {
            this.router.navigate(['auth/login']);
            this.toaster.warning('role name is undfined ');
            return false;
          }
        }
  
        return true;
      }
  
      else {
        this.router.navigate(['auth/login']);
        this.toaster.warning('Please login !!')
        return false;
      }
  
    }
  
}
