$(document).ready(function () {
	'use strict';
	var login,
		email,
		textArea,
		userData = {
			login: $('#login'),
			email: $('#email'),
			textArea: $('#textArea')
		},
		pattern = {
			login: /^[a-zа-я_]{3,}$/i,
			email: /^[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}$/i,
			textArea: /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/i
		};

	var cleanFieldUserData = function (obj) {
		var idError;
		for (var key in obj) {
			obj[key].val('');
			idError = '#error' + key;
			$(idError).css({ 'display': 'none'});
		}
		$('#addNewDesire').attr('disabled', true);
	};

	cleanFieldUserData(userData);

	/*
	*	Events
	*/
	$(document).on('keyup, blur', '#login, #email, #textArea', function () {

		validation(this);

	}).on('click', '#addNewDesire', function () {

		addNewDesire();

	});

	function validation(obj) {
		var thisInputElem, elemName;


		thisInputElem = $(obj);
		elemName = thisInputElem.attr('id');

		if (thisInputElem.val() != '') {
			checkPattern(thisInputElem, elemName);
		} else {
			massageEmtyElem(elemName);
		}

		checkValidationField();

	}

	function addNewDesire() {
		var p;

		p = '<p class="newDesire">' + userData.textArea.val() + '</p>';
		$('.newDesire:first-child').before(p);

	}



	function checkValidationField() {
		var checkLogin, checkEmail, checkTextArea;

		checkLogin = userData.login.hasClass('okvalid');
		checkEmail = userData.email.hasClass('okvalid');
		checkTextArea = userData.textArea.hasClass('okvalid');

		if (checkLogin && checkEmail && checkTextArea) {
			$('#addNewDesire').attr('disabled', false);
		} else {
			$('#addNewDesire').attr('disabled', true);
		}

	}

	function massageEmtyElem(nameElem) {
		var idError;

		idError = '#error' + nameElem;

		switch (nameElem) {
			case 'login':
				$(idError).text('Поле "Имя" не должно быть пустым');
				break;
			case 'email':
				$(idError).text('Поле "E-mail" не должно быть пустым');
				break;
			case 'textArea':
				$(idError).text('Поле "Пожелание" не должно быть пустым');
				break;
		}

		$(idError).css({ 'display': 'block'});
		$('#' + nameElem).removeClass('okvalid').addClass('error');
		$('#addNewDesire').attr('disabled', true);
	}

	function checkPattern(InputElem, patternKey) {
		var regExp;

		regExp = pattern[patternKey];

		if (InputElem.val().search(regExp) == 0) {
			InputElem.removeClass('error').addClass('okvalid');
			$('#error' + patternKey).css({ 'display': 'none'});
		} else {
			InputElem.removeClass('okvalid').addClass('error');
			$('#errorlogin').css({ 'display': 'block'}).text('"Имя" не должно быть меньше 3 символов');
			$('#erroremail').css({ 'display': 'block'}).text('Поле "E-mail" должно соответствовать правилам записи E-mail адреса');
			$('#errortextArea').css({ 'display': 'block'}).text('Поле "Пожелание" не должно быть пустым');
			$('#addNewDesire').attr('disabled', true);
		}
	}
});