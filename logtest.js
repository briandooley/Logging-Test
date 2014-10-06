timelog = function(message) {
	console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' UTC -- ' + message);
}

timelog('Everything started properly.');
timelog('Running out of memory...');
timelog('All is doomed');
