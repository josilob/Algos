// ES2015, Class Syntax, Instance Methods ...

// Class - blueprint for creating objects with pre-defined properties and methods
// with introduction of ES2015, class syntax was created and made possible but this is not truly OOP

// Note: keyword 'this' - it will be inside all of the instance methods and constructors.
// Keyword 'this' refers to the object created from that class (known as instance)

// Syntax:
class Student {
	constructor(firstName, lastName) {
		// what default properties it should have, runs whenever class is instantiated
		this.firstName = firstName;
		this.lastName = lastName;
		this.tardies = 0;
		this.scores = [];
	}
	someInstanceMethod() {
		// what should each object created from this calss be able to do!?
	}

	fullName() {
		return `Your full name is ${this.firstName} ${this.lastName}`;
	}

	markLate() {
		this.tardies += 1;
		return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
	}

	addScore(score) {
		this.scores.push(score);
		return this.scores;
	}

	calculateAverage() {
		let sum = this.scores.reduce((a, b) => a + b);
		return sum / this.scores.length;
	}

	static contactStudents() {
		// email all students
		console.log('Sending mail to students!!!');

		// it will be invoked with capital letter somewhere down the line:
		// Student.contactStudents([firstStudent, secondStudent])
	}
}
// The method to create new objects must be called constructor
// The class keyword creates a constant, so it can not be redefined. Watch out for syntax!

// firstName and lastName are parameters and they can be overwritten with anything we want:
// if we had line 9 written as:
// this.name = firstName; // => it would be totally fine
// upon instantiating the object, we would have property called 'name' instead 'firstName'

// Creating objects from classes (using the keyword 'new'):

let firstStudent = new Student('Bojan', 'Josilo');
let secondStudent = new Student('John', 'Doe');
// console.log(firstStudent.markLate());

data = new Array(1, 2, 3); // we instantiated object called data which is of Array class
// one of its instance methods is 'push'
data.push(4); // this will add 4 at the end of this array

secondStudent.scores;
secondStudent.addScore(94);
secondStudent.addScore(81);
// console.log(secondStudent.calculateAverage()); // => 87.5

// Keyword 'static' is used for writing a statuc, class methods instead of instance methods
// These methods are called without instantiating their class and cannot be called through a class instance. They are commonly used to create utility functions for an application.
// Invocation:
Student.contactStudents();
