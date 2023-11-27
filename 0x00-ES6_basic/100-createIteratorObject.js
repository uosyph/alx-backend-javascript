export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const employee of Object.values(report.allEmployees)) {
    allEmployees = [
      ...allEmployees,
      ...employee,
    ];
  }

  return allEmployees;
}
