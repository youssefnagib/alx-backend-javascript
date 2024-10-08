export default function updateStudentGradeByCity(students, city, studentGrades) {
  const newArray = students.filter((student) => student.location === city);
  return newArray.map((student) => {
    const foundStudent = studentGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: foundStudent ? foundStudent.grade : 'N/A',
    };
  });
}
