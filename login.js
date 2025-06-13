function validForm() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const user = form.username.value.trim();
        const pass = form.password.value.trim();

        if (user === '' || pass === '') {
            alert('Por favor ingresa usuario y contraseña');
            return;
        }

       
        const validUser = 'jstest';
        const validPass = '1234';

        if (user === validUser && pass === validPass) {
           
            alert('Login correcto!!');
			window.location.href = 'index.html';
			
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
}
window.onload = validForm;
