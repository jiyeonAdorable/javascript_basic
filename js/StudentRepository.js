// 여러 학생 목록 관리 객체 (자바식 코드)

function StudentRepository() {
  //this = {};

  this.students = new Array();


  // 학생 등록
  this.addStudent = function (student) {
    this.students.push(student);
  }

  // 전체 목록
  this.getStudents = function () {
    return this.students;
  }

  // 학번으로 학생 검색
  this.findBySsn = function (ssn) {
    for (const student of this.students) {
      if (student.ssn == ssn) {
        return student.toString();
      }
    } return console.log('일치하는 학생이 없습니다.');
  }

  // 이름으로 학생 검색
  this.findByName = function (name) {
    let findArray = new Array();
    //let findArray = [];  - 그냥 빈배열 만들어도 됨
    for (const student of this.students) {
      if (student.name == name) {
        findArray.push(student);
      }
    } return findArray;
  }

  // 학번으로 학생 삭제
  this.removeBySsn = function (ssn) {
    let count = 0;
    for (const student of this.students) {
      if (student.ssn == ssn) {
        this.students.splice(count, 1);
        return console.log('삭제 완료');
      }
      count++;
    } return console.log('일치하는 학생이 없습니다.');
  }

  // 평균 범위로 검색
  this.findByRange = function (start, end) {
    let avgScore = new Array();
    for (const student of this.students) {
      if (student.getAverage() >= start && student.getAverage() <= end) {
        avgScore.push(student);
      }
    }
    return avgScore;
  }
  // return this;
}

// 임시 테스트

// 학생 관리 객체 생성
let studentRepository = new StudentRepository();

// 더미 데이터
studentRepository.addStudent(new Student(10, '김기정', 90, 80, 70)); // 80
studentRepository.addStudent(new Student(11, '최기정', 90, 80, 58)); // 76
studentRepository.addStudent(new Student(12, '박기정', 45, 80, 70)); // 65
studentRepository.addStudent(new Student(13, '김기정', 10, 20, 30)); // 20
studentRepository.addStudent(new Student(14, '이기정', 40, 40, 40)); // 40
studentRepository.addStudent(new Student(15, '정기정', 50, 50, 50)); // 50

// 힉생 전체 출력
let allList = studentRepository.getStudents();
for (const student of allList) {
  console.log(student.toString());
}

// 학번으로 학생 찾기
console.log(studentRepository.findBySsn(11));


// 이름으로 학생 찾기
let findNameList = studentRepository.findByName('기정');
if (findNameList != '') { // findNameList.length !=0
  for (const student of findNameList) {
    console.log(student.toString());
  }
} else {
  console.log('찾으시는 이름과 일치하는 학생이 없습니다.');
}

// 학번으로 학생 삭제
let removeStudent = studentRepository.removeBySsn(2)
console.log(removeStudent);

for (const student of allList) {
  console.log(student.toString());
}

console.clear();

// 평균으로 검색
let avgList = studentRepository.findByRange(20, 60);
for (const student of avgList) {
  console.log(student.toString());
}