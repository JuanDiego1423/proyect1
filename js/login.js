document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const message = document.getElementById('login-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Obtener usuarios registrados
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            message.textContent = 'Inicio de sesión exitoso';
            message.style.color = 'green';
            // Redireccionar a otra página o realizar alguna acción adicional
            window.location.href = 'index.html';
        } else {
            message.textContent = 'Usuario o contraseña incorrectos';
            message.style.color = 'red';
        }
    });
});