import { Component } from '@angular/core';
import { User } from '../../Models/master.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
LogIn() {
this.route.navigate([""])
}
Logout() {
  this.UserLoggedinDetails=new User();
  

  localStorage.removeItem("userDetails")

}

UserLoggedinDetails:User=new User();

constructor(private route:Router){
  const localData=localStorage.getItem("userDetails")
    if(localData!=null){
      const data=JSON.parse(localData);
      this.UserLoggedinDetails=data;

    }
    }

}