function sendEmail() {
    var Name = document.getElementById("Name").value;
    var recipientEmail = document.getElementById("recipientEmail").value;
	var subject = document.getElementById("subject").value;
	var body = document.getElementById("body").value;
	Email.send({
	Host: "smtp.gmail.com",
	Username : "csms1008@gmail.com",
	Password : "Sreethu@123456",
	To : recipientEmail,
	From : "csms1008@gmail.com",
	Subject : subject,
	Body : body,
	}).then(
		message => alert("mail sent successfully")
	);
}