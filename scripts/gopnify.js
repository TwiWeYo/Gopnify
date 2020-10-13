function getRandomInt(max) {

  return Math.floor(Math.random() * Math.floor(max));
}

const StopSigns = ['.', '?', '!'];
const PauseSigns = [',', ':', ';'];

function blyatify(str, isLast) {

	var space = ' ';
	var sep = ', блять, ';
	var rand = getRandomInt(7);

	if (isLast)
	{
		space = '';
		sep = ', блять.';
	}
	if (StopSigns.includes(str[str.length - 1]) || str.length <= 1)
		sep = space;
	else if (PauseSigns.includes(str[str.length - 1]))
		sep = sep.substring(1);
	return (rand <= 1 ? sep : space);
}

function gopnify(originalText) {
	
	var stringArray = originalText.split(/ * /);
	var gopnified = "";

	for (var i in stringArray)
	{
		gopnified += stringArray[i];
		gopnified += blyatify(stringArray[i], (i == stringArray.length - 1));
	}
	var _gop = document.getElementById("gop");
	_gop.innerText = gopnified;
}