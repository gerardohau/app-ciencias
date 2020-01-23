

window.onload = function(){
	(function(){
		var counter = 120;
		setInterval(function() {
			counter--;
			if (counter >= 0) {
				countSpan = document.getElementById("count");
				countSpan.innerHTML = counter;
			}
			if (counter === 0) {
				grade = document.getElementById("grade").innerHTML;
				alert('Se acabó el tiempo, obtuviste un '+grade);
				clearInterval(counter);
			}
		}, 1000);
	})();
}