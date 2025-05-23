
export interface Course {
  courseId: number;
  courseName: string;
  createdDate: string;
  totalHours: string;
  totalVideos: number;
  courseDescription: string;
  thumbnailUrl: string;
}
export class UserLogin {
  userName: string;
  password: string;

  constructor() {
    this.userName = '';
    this.password = '';
  }
}


export interface ApiResponse {
  message: string;
  result: boolean;
  data: any; // or use a specific type like Course[] once you know the structure
}
export interface CourseVideo {
  courseVideoId: number;
  courseId: number;
  videoTitle: string;
  videoId: number;
  videoUrl: string;
  totalDuration: string;
  videoDescription: string;
  videoThumbnail: string; // Assuming this should be a string (URL or image path)
}


 export class User {
  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  role: string;
  createdDate: Date;
  password: string;
  projectName: string;
  refreshToken: string;
  refreshTokenExpiryTime: string

  constructor() {
    this.userId = 0;
    this.userName = "";
    this.emailId = "";
    this.fullName = "";
    this.role = "";
    this.createdDate = new Date();
    this.password = "";
    this.projectName = "";
    this.refreshToken = "";
    this.refreshTokenExpiryTime = "";
  }
}


export class Enrollment {
 userId: number;
   courseId: number;
   enrolledDate: Date;
   isCompleted: boolean;

  constructor() {
    this.userId = 0;
    this.courseId = 0;
    this.enrolledDate = new Date()
    this.isCompleted = false;
  }

  
}

