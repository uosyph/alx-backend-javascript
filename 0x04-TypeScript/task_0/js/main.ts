interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentZero: Student = {
	firstName: 'Syd',
	lastName: 'Barrett',
	age: 60,
	location: 'Cambridge'
};

const studentOne: Student = {
	firstName: 'Will',
	lastName: 'Oldham',
	age: 51,
	location: 'Louisville'
};

const studentsList = [studentZero, studentOne];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

const head: HTMLTableSectionElement = table.createTHead();
const row: HTMLTableRowElement = head.insertRow();
const tableHeadZero: HTMLTableCellElement = row.insertCell(0);
const tableHeadOne: HTMLTableCellElement = row.insertCell(1);
tableHeadZero.innerHTML = ("<b>First Name</b>");
tableHeadOne.innerHTML = ("<b>Location</b>");

const body: HTMLTableSectionElement = table.createTBody();
studentsList.map((student) => {
	const newRow: HTMLTableRowElement = body.insertRow();
	const nameRow: HTMLTableCellElement = newRow.insertCell();
	const locationRow: HTMLTableCellElement = newRow.insertCell();
	nameRow.innerHTML = student.firstName;
	locationRow.innerHTML = student.location;
});
