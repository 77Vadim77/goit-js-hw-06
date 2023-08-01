const formEl = document('.form-login-form');
formEl.addEventListener('sumbit', onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault()


    const { email, password } = event.currentTarget.elemetns
    console.log(email.value)
    console.log(password.value)


    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data)

    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені!');
    };
    
};
