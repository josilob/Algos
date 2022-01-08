function angryProfessor(k, a) {
	let studentsArrived = 0;
	a.forEach((student) => (student <= 0 ? studentsArrived++ : studentsArrived));
	return studentsArrived >= k ? 'NO' : 'YES';
}
