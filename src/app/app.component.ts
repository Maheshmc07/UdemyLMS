import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { HerosectionComponent } from "./pages/herosection/herosection.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { LayoutComponent } from './layout/layout.component';


@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet, NavbarComponent, HerosectionComponent, FooterComponent,LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UdemyLMS';




  
  

}



