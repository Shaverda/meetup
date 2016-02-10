
window.onload = function() {
	document.getElementById("event-submit").onclick = function () {
		localStorage.setItem('Event type', document.getElementById('event_type').value);
	
	var output = ''; 

	for (var key in localStorage) {
 		output = output+(key + ':' +localStorage[key])+'\n';
	}

	$('#storage').html(output);

	};
}


