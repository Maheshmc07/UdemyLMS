import { Component } from '@angular/core';
import { FooterComponent } from "../pages/footer/footer.component";
import { HerosectionComponent } from "../pages/herosection/herosection.component";
import { NavbarComponent } from "../pages/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [FooterComponent, HerosectionComponent, NavbarComponent,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
