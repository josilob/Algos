// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


function domainName(url) {
	let patt = /(\/{2}|\.)/g;
	let result = url.match(patt);
	let sliced = '';
	//console.log(result);
	if (result[0] == '//') {
		if (url.charAt(url.indexOf(result[0]) + 2) == 'w') {
			sliced = url.slice(
				url.indexOf(result[1]) + 1,
				url.indexOf(result[1], url.indexOf(result[1]) + 1)
			);
			console.log(sliced);
		} else {
			sliced = url.slice(url.indexOf(result[0]) + 2, url.indexOf(result[1]));
		}
	} else {
		sliced = url.slice(url.indexOf(result[0]) + 1, url.lastIndexOf(result[1]));
	}
	return sliced;
}