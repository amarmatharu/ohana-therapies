import $ from './jquery3.5.1.min.js';
function phoneFormat(input) {//returns (###) ###-####
	input = input.replace(/\D/g, '').substring(0, 10); //Strip everything but 1st 10 digits
	var size = input.length;
	if (size > 0) { input = "(" + input }
	if (size > 3) { input = input.slice(0, 4) + ") " + input.slice(4) }
	if (size > 6) { input = input.slice(0, 9) + "-" + input.slice(9) }
	return input;
}

var form = document.getElementById('SendEmail')
var responseText = document.getElementById('responseText');

document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('SendEmail');
	if (form) {
	  form.addEventListener('submit', function (e) {
		e.preventDefault();
		document.getElementById("sendEmail").disabled = true;
		document.getElementById("sendEmail").readOnly = true;
  
		var name = document.getElementById("name").value;
		let phone = document.getElementById("phone").value;
		var email = document.getElementById("email").value;
		var subject = document.getElementById("subject").value;
		var body = document.getElementById("body").value;
  
		fetch(
		  'http://ohanagateway.us-west-1.elasticbeanstalk.com//PROD',
		  {
			method: 'POST',
			headers: {},
			body: JSON.stringify({
			  title: name,
			  phone: phone,
			  email: email,
			  subject: subject,
			  body: body,
			}),
		  }
		)
		  .then(function (response) {
			return response.text();
		  })
		  .then(function (data) {
			$(form).css("display", "none");
			$('#success_message').fadeIn().html(data);
		  })
		  .catch(error => console.error('Error:', error));
	  });
	}
  });
  

const btn = document.getElementById('intake');
btn.addEventListener('click', function(event){
   alert('coming here');
   console.log('Button Clicked');
});

var form1 = document.getElementById('userAccountSetupForm')
var responseText = document.getElementById('responseText');

form1.addEventListener('intake', function(e) {
	e.preventDefault()
	document.getElementById("sendEmail").disabled = true;
	document.getElementById("sendEmail").readOnly = true;

	var name = document.getElementById("name").value
	let phone = document.getElementById("phone").value
	var email = document.getElementById("email").value
	var subject = document.getElementById("subject").value
	var body = document.getElementById("body").value

	fetch(
		'https://uibdkyk6aj.execute-api.us-west-1.amazonaws.com/PROD',

		{
			method: 'POST',
			headers:
			{

			},
			body: JSON.stringify({
				title: name,
				phone: phone,
				email: email,
				subject: subject,
				body: body,

			})

		})
		.then(function(response) {
			console.log(response)
			return response.text();
		})
		.then(function(data) {
			//console.log(data)
			//responseText.innerHTML = data;
			$(form).css("display", "none");  
			$('#success_message').fadeIn().html(data);				
		}).catch(error => console.error('Error:', error));
});


