export default function createIteratorObject(report) {
  return (function* a() {
    for (const department of Object.value(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  );
}
