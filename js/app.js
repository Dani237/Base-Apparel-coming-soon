let btnConfirm = document.querySelector('.arrow-button');
let mailInput = document.querySelector('.input-email');
let errorIcon = document.querySelector('.error-icon');
let errorMessage = document.querySelector('.error-message');

btnConfirm.addEventListener('click', () => {
    exreg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (exreg.test(mailInput.value)) {
        errorIcon.hidden = true;
        errorMessage.hidden = true;
        alert('El mail es correcto');
    } else {
        errorIcon.hidden = false;
        errorMessage.hidden = false;
    }
})
