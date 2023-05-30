const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key:  process.env.MAILGUN_API_KEY});

sendMail=(email,name,subject,text)=>{
	mg.messages.create('sandbox5e0733b7dba94f738312d79d3da09dec.mailgun.org', {
		from: 'naivecoder8080@gmail.com',
		to: email,
		subject,
		text
	})
	.then(msg => console.log(msg)) 
	.catch(err => console.log(err)); 
}

const sendWelcomeEMail=(email,name)=>{
	sendMail(email,name, "Welcoeme!",`Welcome to the app ${name}!`)
}

const sendGoodByeEmail=(email,name)=>{
	sendMail(email,name,'GoodBye!',`Wish to see you again ${name}`)
}



module.exports={
	sendWelcomeEMail,
	sendGoodByeEmail
}