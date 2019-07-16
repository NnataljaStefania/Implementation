
	window.onload = function (evt) {
		evt.preventDefault();
	}

function validateCode(fildInp, helpText) {

var helpText = document.getElementById('helpText');
	
	if (fildInp.value == 0) {
		if (helpText != null)  
		helpText.innerHTML = 'Ввведите, пожалуйста число!';
		
		return false;
	}
	 if(isNaN(fildInp.value)) {
		if(helpText != null) 
		helpText.innerHTML = 'Ввведите, пожалуйста число';
	
		return false;
	}
	else {
		if(helpText != null) 
			helpText.innerHTML = '';
		
			return true;
	
		
	}
	
}

function formSubmit(form) {
	if( validateCode( form['sum'], form['message-help'] )  && 
	validateCode(form['code'], form['message-help'] ) && 
	validateCode(form['cv'], form['message-help']) ) {
		alert('Данные формы отправлены.');
		form.submit();
		
	}
	else {
		alert('Данные формы не могут быть отправлены. Заполните поля формы, пожалуйста.');
	}
}