var newNumber;
var oldNumber;
var solution;

var calculate = function () {
	return ((newNumber - oldNumber) / Math.abs(oldNumber)) * 100;

};

$('input.number').keyup(function (event) {

	// skip for arrow keys
	if (event.which >= 37 && event.which <= 40) return;


	// format number
	$(this).val(function (index, value) {

		return value
			.replace(/\D/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	});
});

$(document).ready(function () {
	$("input").keyup(function (event) {
		// skip for arrow keys
		if (event.which >= 37 && event.which <= 40) {
			event.preventDefault();
		}
		var self = $(this);
		// var num = self.val().replace(/,/gi, "");
		var num2 = num.split(/(?=(?:\d{3})+$)/).join(",");
		console.log(num2);
		self.val(num2);
	});
	// the following
	$('#calculate').on('click', function (e) {
		e.preventDefault();
		newNumber = parseFloat($('#newNum').val());
		oldNumber = parseFloat($('#oldNum').val());
		console.log('click worked')
		console.log(newNumber + "; " + oldNumber)
		var solve = calculate();
		var solution = "The change from the old to the new number is " + solve + "%"
		// solution = string(solution);
		console.log(solution);
		$('#change').text(solution);

		// var node = target.createElement('P');
		// var textnode = target.createTextNode(solution);
		// node.appendChild(textnode);
		// document.getElementById('change').appendChild(node);
	})
});
