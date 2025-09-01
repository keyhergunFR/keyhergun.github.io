const modal = document.querySelector('.modal');
const btnTalk = document.querySelector('.btn_talk');
const btnClose = document.querySelector('.close');
const submitBtn = document.querySelector('.subbtn');
const successPopup = document.querySelector('#success-popup');
const nameField = document.getElementById('exampleInputName');
const emailField = document.getElementById('exampleInputEmail');
const messageField = document.getElementById('exampleInputMessage');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
btnTalk.addEventListener('click', () => modal.classList.add('show'));
btnClose.addEventListener('click', () => modal.classList.remove('show'));
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;
        if (nameField.value.trim() === '') {
            nameField.classList.add('is-invalid');
            isValid = false;
        } else {
            nameField.classList.remove('is-invalid');
        }
        if (emailField.value.trim() === '' || !emailPattern.test(emailField.value)) {
            emailField.classList.add('is-invalid');
            isValid = false;
        } else {
            emailField.classList.remove('is-invalid');
        }
        if (messageField.value.trim() === '') {
            messageField.classList.add('is-invalid');
            isValid = false;
        } else {
            messageField.classList.remove('is-invalid');
        }
        if (isValid) {
            const formData = new FormData(contactForm);
            sendFormData(formData);
        }
    });

    async function sendFormData(data) {
        try {
            const response = await fetch('http://afrianska/form-submission', {method: 'POST', body: data});
            if (response.ok) {
                successPopup.style.display = 'block';
                setTimeout(() => {
                    successPopup.style.display = 'none';
                }, 3000);
            } else {
                throw new Error('Error submitting form.');
                alert("An error occurred during submission.");
            }
        } catch (err) {
            alert("Network error occurred.");
        }
    }
});
const openButton = document.querySelector('.btn_talk');
const overlay = document.querySelector('.modal-overlay');
const modalWindow = document.querySelector('.modal');
const closeButton = document.querySelector('.close');
// Открыть модальное окно
openButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    modalWindow.style.display = 'block';
    document.body.classList.add('no-scroll'); // Заблокировать скроллинг
});

// Закрыть модальное окно
function closeModal() {
    overlay.style.display = 'none';
    modalWindow.style.display = 'none';
    document.body.classList.remove('no-scroll'); // Разрешить скроллинг обратно
}
// Клик на крестик для закрытия
closeButton.addEventListener('click', closeModal);
// Клик на теневую зону для закрытия
overlay.addEventListener('click', closeModal);
console.log(modal);
console.log(btnTalk);
console.log(btnClose);
console.log(submitBtn);