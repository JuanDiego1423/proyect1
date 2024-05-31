document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const message = document.getElementById('register-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value.trim();
        const password = document.getElementById('reg-password').value.trim();

        // Verificar si el usuario ya existe
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            message.textContent = 'El usuario ya existe';
            message.style.color = 'red';
        } else {
            // Registrar nuevo usuario
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            message.textContent = 'Usuario registrado exitosamente';
            message.style.color = 'green';
            form.reset();
        }
    });
});