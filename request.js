function send_request(act, login = null, password = null) {//Основная функция
	//Переменные, которые будут отправляться
	var var1 = null;
	var var2 = null;
	
	if(act == 'auth') {
		//Если нужно авторизоваться, получаем логин и пароль, которые были переданы в функцию
		var1 = login;
		var2 = password;
	} else if(act == 'send') {
//Если нужно отправить сообщение, то получаем текст из поля ввода
		var1 = messageInput.value;
	}
	
	$.post('includes/chat.php',{ //Отправляем переменные
		act: act,
		var1: var1,
		var2: var2
	}).done(function (data) { 
		//Заносим в контейнер ответ от сервера
		messages__container.innerHTML = data;
		if(act == 'send') {
			//Если нужно было отправить сообщение, очищаем поле ввода
			messageInput.value = '';
		}
	});
}
