// 여러 학생 목록 관리 객체 (Array 객체의 함수들을 이용해서)

function StudentRepository() {
  //this = {};

  this.students = new Array();

  // return this;
}


// 학생 등록
StudentRepository.prototype.addStudent = function (student) {
  this.students.push(student);
}

// 전체 목록
StudentRepository.prototype.getStudents = function () {
  return this.students;
}

// 학번으로 학생 검색
StudentRepository.prototype.findBySsn = function (ssn) {
  //return this.students.find(student => student.ssn===ssn ? true : false);
  return this.students.find(student => student.ssn === ssn || false); // js 만 됨
}

// 이름으로 학생 검색
StudentRepository.prototype.findByName = function (name) {
  return this.students.filter(student => student.name === name || false);
}

// 학번으로 학생 삭제
StudentRepository.prototype.removeBySsn = function (ssn) {
  let deleted = false;
  this.students.forEach((student, index) => {
    if (student.ssn === ssn) {
      this.students.splice(index, 1)
      deleted = true;
    }
  });
  return deleted;
}

// 평균 범위로 검색
StudentRepository.prototype.findByRange = function (start, end) {
  let avgScore = new Array();
  this.students.forEach(student => {
    if (student.getAverage() >= start && student.getAverage() <= end) {
      avgScore.push(student);
    }
  });
  return avgScore;
}

// 정렬하여 전체 검색
StudentRepository.prototype.findAllBySort = function(fn) { // 정렬 방식 받기
  return this.students.sort(fn);
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
console.clear();

// 학번으로 학생 찾기
console.log(studentRepository.findBySsn(11));

console.clear();

// 이름으로 학생 찾기
let findNameList = studentRepository.findByName('기정');
if (findNameList != '') { // findNameList.length !=0
  for (const student of findNameList) {
    console.log(student.toString());
  }
} else {
  console.log('찾으시는 이름과 일치하는 학생이 없습니다.');
}
console.clear();
// 학번으로 학생 삭제
let removeStudent = studentRepository.removeBySsn(13)
console.log(removeStudent);

console.log(studentRepository.getStudents());

console.clear();

// 평균으로 검색
let avgList = studentRepository.findByRange(20, 60);
for (const student of avgList) {
  console.log(student.toString());
}

console.clear();

// 평균 내림차순으로 정렬하여 목록 전체 출력
let avgSortList = studentRepository.findAllBySort(
  (student1,student2)=> student2.getAverage()-student1.getAverage()
);
console.log(avgSortList);