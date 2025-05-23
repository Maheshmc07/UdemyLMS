import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse,CourseVideo, Enrollment, User, UserLogin } from '../Models/master.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  url:string='https://projectapi.gerasim.in/api/OnlineLearning/'
  constructor(private http:HttpClient) { }


  getAllcoursesbyid(id: number): Observable<ApiResponse> {
  return this.http.get<ApiResponse>(`${this.url}/GetCourseVideosbyCourseId?courseId=${id}`);
}

  getAllCourses():Observable<ApiResponse>{
    return this.http.get<ApiResponse>( 'https://projectapi.gerasim.in/api/OnlineLearning/GetAllCourse')
    
    
  }


  CreateNewAccount(user:User){
    return this.http.post(`${this.url}/AddNewUser`,user);

  }


  Login(user:UserLogin){
    return this.http.post(`${this.url}/login`,user)
  }


  EnrollmentReq(EnrollmentDetails:Enrollment){
    return this.http.post(`${this.url}/CreateNewEnrollment`,EnrollmentDetails)
  }


  GetAllCoursesByUserId(userId:number):Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.url}/GetEnrolledCourseByUserId?userid=${userId}`)
  }
}
