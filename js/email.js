// js/email.js

window.openEmailFor = function(email){
  $('email-to').value=email;
  openModal('email-modal');
}

window.sendEmail = function(){
  notify("Email sent!");
  closeModal('email-modal');
}