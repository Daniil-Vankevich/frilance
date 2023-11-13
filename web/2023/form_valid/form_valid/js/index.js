"use strict"

document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);


	async function formSend(e) {
		e.preventDefault();
	
		let error = formValidate(form);

		if(error === 0) {

		} else{
			alert('Заполните обязательные поля формы')
		}

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if(input.classList.contains('_email')) {
				if(emailTest(input)) {
					formAddError(input);
					error++;	
				}
				
			}	else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
					error++;
			} else {
					if(input.value === '') {
						formAddError(input);
						error++;
					}	
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	// finction for test e-mail:

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	} 

	// Получаем инпут file в переменную

	const formImage = document.getElementById('formImage');
	//Получаем див для превью в переменную
	const formPreview = document.getElementById('formPreview');

	// Слушаем изменения в инпуте file:

	formImage.addEventListener('change', () => {
		uploadFile(formImage.files[0]);
	});

	function uploadFile(file) {
		// проверяем тип файла
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Разрешены для добавления только изображения');
			formImage.value = '';
			return;			
		}
		// проверяем размер файла (<2 MB)
		if (file.size > 2 * 1024 * 1024) {
			alert('Файл должен быть меньше 2 MB');
			return;
		}

		var reader = new FileReader();
		reader.onload = function(e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt = "фото">`;
		};

		reader.onerror = function(e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	
	}

});
