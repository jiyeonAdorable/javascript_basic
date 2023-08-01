import { Student } from "./Student.js";
import { HighStudent } from "./highStudent.js";

let student = new Student(10, '김기정', 90, 80, 70);
console.log(student.toString());

let highStudent = new HighStudent(10, '김기정', 90, 80, 70, 30);
console.log(highStudent.toString());