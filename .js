var encodeStringToBase64 = function(str) {
	return(
		btoa(
			encodeURIComponent(str)
		)
	);
}

var decodeBase64ToString = function(str) {
	return(
		decodeURIComponent(
			atob(str)
		)
	);
}
