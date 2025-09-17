const form = document.getElementById('form');
const username = document.getElementById("username");
const email = document.getElementById('email');
const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const password = document.getElementById('password');
const invalidPassword = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
const password2 = document.getElementById('password2');
const showBlog = document.getElementById('blogBtn');
const clsBlog = document.getElementById('closeBlog');

// Functions
function showError(target, message) {
    const formControl = target.parentElement;
    formControl.classList.add('error');
    formControl.classList.remove('success');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(target) {
    const formControl = target.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}

function validateUsername(input) {
    if(input.length < 3){
        showError(username, 'Username must be at least 3 characters');
        return false;
    }else {
        showSuccess(username);
        return true;
    }
}

function validateEmail(input) {
    if(!input.trim().toLowerCase().match(validEmail)){
        showError(email, 'Email must be valid');
        return false;
    }else{
        showSuccess(email);
        return true;
    }
}

function validatePassword(input) {
    // console.log(input);
    if(input.match(invalidPassword)){
        showError(password, 'Password does not meet complexity requirements');
        return false;
    }else{
        showSuccess(password);
        return true;
    }
}

function validatePassword2(input) {
    if(input !== password.value) {
        showError(password2, 'Passwords do not match');
        return false;
    } else {
        showSuccess(password2);
        return true;
    }
}

// Event Listeners
showBlog.addEventListener('click', function() {
    blog.classList.remove('hidden');
})

clsBlog.addEventListener('click', function() {
    blog.classList.add('hidden');
})

username.addEventListener('input', function(){validateUsername(username.value)});

email.addEventListener('input', function(){validateEmail(email.value)});

password.addEventListener('input', function() {validatePassword(password.value)});

password2.addEventListener('input', function() {validatePassword2(password2.value)});

form.addEventListener('submit', e => {
    if(!validateUsername(username.value) || !validateEmail(email.value) || !validatePassword(password.value) || !validatePassword2(password2.value)) {
        e.preventDefault();
    }else {
        window.alert('Form submitted.\nThank you!')
    }
})