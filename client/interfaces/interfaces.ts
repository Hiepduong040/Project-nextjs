export  interface User {
  id: number;
  username: string;
  password: string; 
  email: string;
  role: number; 
  profilePicture: string;
  status: number; 
}

export  interface Courses {
  id: number;
  title: string;
  description: string;
}

export  interface ExamSubject {
  id: number;
  title: string;
  description: string;
  coursesId: number;
}


export interface Exam {
  id: number;
  title: string;
  description: string;
  duration: number;
  examSubjectsId: number;
  active: boolean;  
}



export  interface Question {
  id: number;
  question: string;
  examId: number;
  options: string[];
  answer: string;
}

export interface UserAnswer {
  id: number;
  userId: number;
  exampId: number;
  score: number;
}

export interface Admin {
  username: string;
  password: string;
  email: string;
  profilePicture: string;
  status: number;
}
