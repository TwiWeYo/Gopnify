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
	if (PauseSigns.includes(str[str.length - 1]))
		sep = sep.substring(1);
	if (StopSigns.includes(str[str.length - 1]) || str.length == 1)
		sep = space;
	document.write(rand <= 1 ? sep : space);
}

function gopnify(OriginalText) {
	var StringArray = OriginalText.split(/ * /);
	for (var i in StringArray)
	{
		document.write(StringArray[i]);
		blyatify(StringArray[i], (i == StringArray.length - 1));
	}
}

var text = prompt('Введите текст', '');
if (text)
	gopnify(text);