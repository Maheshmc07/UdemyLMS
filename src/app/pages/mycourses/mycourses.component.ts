import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { ApiServicesService } from '../../services/api-services.service';
import { User,ApiResponse, Course, CourseVideo } from '../../Models/master.model';
import confetti from 'canvas-confetti';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-mycourses',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './mycourses.component.html',
  styleUrl: './mycourses.component.css'
})
export class MycoursesComponent {


  

 @ViewChild('coursemodel') model: ElementRef | undefined;
  UsrDetails: any;

  OpenChild(courseid: number): void {
    const localData = localStorage.getItem('userDetails');

    if (localData) {
      this.UsrDetails = JSON.parse(localData);
    }

    // Check if user details are loaded
    if (!this.UsrDetails || this.UsrDetails.userId === 0) {
      this.toastr.warning('Login first');
      return;
    }

    console.log(this.UsrDetails.fullName);

    // Open the modal if it exists
    if (this.model) {
      this.getcoursesByid(courseid);
      this.model.nativeElement.style.display = 'block';
    }
  }

C_content: CourseVideo[] = [];
  getcoursesByid(courseid: number) {
    this.api_service
      .getAllcoursesbyid(courseid)
      .subscribe((res: ApiResponse) => {
        this.C_content = res.data;
      });
  }



CloseModal() {
    if (this.model) {
      this.model.nativeElement.style.display = 'none';
    }
  }





























 
 fireSideCanons() {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;

    const defaults = { startVelocity: 30, spread: 55, ticks: 60, zIndex: 999 };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      // Left cannon
      confetti({
        ...defaults,
        particleCount: 25,
        origin: { x: 0, y: Math.random() * 0.6 },
        angle: 60,
        colors: this.getRandomColors()
      });

      // Right cannon
      confetti({
        ...defaults,
        particleCount: 25,
        origin: { x: 1, y: Math.random() * 0.6 },
        angle: 120,
        colors: this.getRandomColors()
      });

    }, 250);
  }

  getRandomColors(): string[] {
    const palette = [
      ['#ff0a54', '#ff477e', '#ff7096'],
      ['#00c9a7', '#17c3b2', '#3ae1e1'],
      ['#845ec2', '#d65db1', '#ff6f91'],
      ['#f9c80e', '#f86624', '#ea3546']
    ];
    return palette[Math.floor(Math.random() * palette.length)];
  }



 
























  myservice=inject(ApiServicesService)
  UserLoggedinDetails:User=new User();
constructor( private api_service: ApiServicesService,
    private toastr: ToastrService,){
   const localData=localStorage.getItem("userDetails")
    if(localData!=null){
      const data=JSON.parse(localData);
      this.UserLoggedinDetails=data;

    }

}


course: Course[] = [];


 ngOnInit(){
    

 this.myservice.GetAllCoursesByUserId(this.UserLoggedinDetails.userId).subscribe((res:ApiResponse)=>{
  this.course=res.data;

 })
  }

}
