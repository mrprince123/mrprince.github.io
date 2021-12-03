const emailjs = require('emailjs-com')


const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('mr_prince', 'template_xxqsmt8', 'contact-form', 'user_xZYEmoHot6imtSdNAFILF')
     .then(result => alert('Your message has been sent. I will be in contact with you soon. Thank you !'))
     .catch(err => alert('Oops! Please try again.'))

}

document.querySelector('.submitButton').addEventListener('click', submitForm)