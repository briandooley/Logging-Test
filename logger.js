timelog = function(message) {
  console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' UTC -- ' + message);
}
