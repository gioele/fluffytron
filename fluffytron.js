function spin() {
	var spinner = document.getElementById('spinner');

	if (!spinner) {
		spinner = document.createElement('p');
		spinner.id = 'spinner';
		spinner.innerHTML = '*';
		spinner.style.fontSize = "60px";

		document.body.appendChild(spinner);
	}

	var size = parseInt(spinner.style.fontSize.replace('px', ''));

	if (size == 100) { size = 99; }
	if (size == 51) { size = 50; }

	var incr = ((size % 2) == 0) ? 2 : -2;
	var new_size = size + incr;

	spinner.style.fontSize = new_size.toString() + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
	setInterval(spin, 60);
})
