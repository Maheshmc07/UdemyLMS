import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HerosectionComponent } from '../herosection/herosection.component';

import { FormsModule } from '@angular/forms';
import { User, UserLogin } from '../../Models/master.model';
import { ApiServicesService } from '../../services/api-services.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    RouterOutlet,
    NavbarComponent,
    HerosectionComponent,
    FooterComponent,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  Login() {
    this.apiService.Login(this.userLogin).subscribe((res: any) => {
      if (res.result) {
        this.toastr.success('Logged In');
        localStorage.setItem('userDetails', JSON.stringify(res.data));
        this.UserLoggedinDetails=res.data;
         this.router.navigate(['/Home']);
      } else {
        this.toastr.success('User Not Found');
      }
    });
  }
  CreateAccount() {
    this.apiService
      .CreateNewAccount(this.UserRegisterpojo)
      .subscribe((res: any) => {
        if (res.result) {
          this.toastr.success('User Created');
        } else {
          {
            this.toastr.warning('somthing went wrong');
          }
        }
      });
  }

  constructor(
    private apiService: ApiServicesService,
    private toastr: ToastrService,
       private router: Router
  ) {
    // const localData=localStorage.getItem("userDetails")
    // if(localData!=null){
    //   const data=JSON.parse(localData);
    //   this.UserLoggedinDetails=data;

      
    // }


  }

  UserRegisterpojo: User = new User();

  userLogin: UserLogin = new UserLogin();


  UserLoggedinDetails:User=new User();

  flag: boolean = true;

  toggle(val: boolean) {
    this.flag = val;
  }
}
