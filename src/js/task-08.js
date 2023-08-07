const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSumbit);

console.log(formEl);

function onFormSumbit(event) {
    event.preventDefault() 
    
    const { email, password } = event.currentTarget.elements
    console.log(email.value)
    console.log(password.value)


    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data);

    if (email.value === "" || password.value === "") {
        alert(`Всі поля повинні бути заповнені`);
    };
    
};