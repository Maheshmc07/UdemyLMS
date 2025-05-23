import {
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import {
  Course,
  ApiResponse,
  CourseVideo,
  User,
  Enrollment,
} from '../../Models/master.model';
import { ApiServicesService } from '../../services/api-services.service';
import { NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { using } from 'rxjs';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-herosection',
  imports: [NgFor],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent {


fireSideCanons() {
    const duration = 2 * 2200;
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




















  MakeEnrollment(courseId: number) {

    console.log(this.UsrDetails);
    
    const Enrollmentobj: Enrollment = {
       userId: this.UsrDetails.userId,
      courseId: courseId,
     
      enrolledDate:new Date(),
      isCompleted: false
    }

    console.log(Enrollmentobj);

    this.api_service.EnrollmentReq(Enrollmentobj).subscribe(
      (res: any) => {
        console.log(res);

        if (res.result) {
          this.fireSideCanons()
          this.toastr.success('Enrollment Success!');
        } else {
          this.toastr.warning('You already purchased course');
        }
      },
      (err) => {
        this.toastr.error('Server Error');
      }
    );
  }

  EnrolledCouses() {
   this.router.navigate(['Home', 'Mycourses']);

  }

  // CloseModal() {
  //   if (this.model) {
  //     this.model.nativeElement.style.display = 'none';
  //   }
  // }

  // @ViewChild('coursemodel') model: ElementRef | undefined;

  // OpenChild(courseid: number): void {
  //   const localData = localStorage.getItem('userDetails');

  //   if (localData) {
  //     this.UsrDetails = JSON.parse(localData);
  //   }

  //   // Check if user details are loaded
  //   if (!this.UsrDetails || this.UsrDetails.userId === 0) {
  //     this.toastr.warning('Login first');
  //     return;
  //   }

  //   console.log(this.UsrDetails.fullName);

  //   // Open the modal if it exists
  //   if (this.model) {
  //     this.getcoursesByid(courseid);
  //     this.model.nativeElement.style.display = 'block';
  //   }
  // }

  UsrDetails: User = new User();

  arr: Course[] = [];
  C_content: CourseVideo[] = [];
  constructor(
    private api_service: ApiServicesService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  // getcoursesByid(courseid: number) {
  //   this.api_service
  //     .getAllcoursesbyid(courseid)
  //     .subscribe((res: ApiResponse) => {
  //       this.C_content = res.data;
  //     });
  // }

  ngOnInit() {

    const localData=localStorage.getItem("userDetails")

    if(localData!=null){
    this.UsrDetails=JSON.parse(localData);}
    this.api_service.getAllCourses().subscribe(
      (res: ApiResponse) => {
        this.arr = res.data;
      },
      (error) => {
        alert(error);
      }
    );
  }
}
function WritableSignal<T>(arg0: never[]) {
  throw new Error('Function not implemented.');
}
