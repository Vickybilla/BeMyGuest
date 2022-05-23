//Datos de la cuenta para prueba
//smtpservice211@gmail.com
//Mapache_d3_Krypton
//fuente: https://pepipost.com/tutorials/how-to-send-emails-with-javascript/

function sendEmail() {
	var email = document.smtp.email.value;
	var mensaje = document.smtp.mensaje.value;
	Email.send({
		Host: "smtp.gmail.com",
		Username: "smtpservice211@gmail.com",
		Password: "Mapache_d3_Krypton",
		To: 'smtpservice211@gmail.com',
		From: email,
		Subject: "Nueva consulta en la web de BMG",
		Body: mensaje,
	}).then(
		message => alert("Su consulta fue enviada")
	);
}
