interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentZero: Student = {
	firstName: 'Socrates',
	lastName: 'Plato',
	age: 35,
	location: 'Athens'
};

const studentOne: Student = {
	firstName: 'Aristotle',
	lastName: 'Kant',
	age: 40,
	location: 'Vienna'
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
	const firstNameRow: HTMLTableCellElement = newRow.insertCell();
	const locationRow: HTMLTableCellElement = newRow.insertCell();
	firstNameRow.innerHTML = student.firstName;
	locationRow.innerHTML = student.location;
});
