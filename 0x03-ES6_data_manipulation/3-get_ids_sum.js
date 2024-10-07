export default function getStudentIdsSum(studentIds) {
  return studentIds.reduce((sum, current) => sum + current.id, 0);
}
