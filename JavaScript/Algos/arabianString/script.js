// You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

// Don't presume the separators too much or you could be surprised.

// Tests
// camelize("example name")   // => ExampleName
// camelize("your-NaMe-here") // => YourNameHere
// camelize("testing ABC")    // => TestingAbc

function camelize(str) {
	return str.replace(/[^a-z0-9]/gi, ' ').split` `.map(
		(v) => v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase()
	).join``;
}

function camelize2(str) {
	return str
		.match(/[a-z0-9]+/gi)
		.map(function (s) {
			return s[0].toUpperCase() + s.substr(1).toLowerCase();
		})
		.join('');
}
