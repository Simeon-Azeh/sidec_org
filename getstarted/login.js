

/* Javascript for login form toggling */


const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link"); // Use querySelector to select the first matching element
const login = document.querySelector(".login-link"); // Use querySelector to select the first matching element

// Js code to show/hide password and change icon //
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye-slash", "fa-eye");
                });
            } else {
                pwField.type = "password";
                pwShowHide.forEach(icon => {
                    icon.classList.replace("fa-eye", "fa-eye-slash");
                });
            }
        });
    });
});

// Js code to toggle between Login and Signup forms
signUp.addEventListener("click", () => {
    container.classList.add("active");
});

login.addEventListener("click", () => {
    container.classList.remove("active");
});



/* For validaton of login form */
const form = document.getElementById('form_sign');
const username = document.getElementById('username');
const email = document.getElementById('email');
const elevel = document.getElementById('education-level')
const country = document.getElementById('country');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const termsCheck = document.getElementById('termsCheck');

form.addEventListener ('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const elevelValue = elevel.value.trim();
    const countryValue = country.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(elevelValue === '') {
        setError(elevel, 'Education level is required');
    } else {
        setSuccess(elevel);
    }

    if(countryValue === '') {
        setError(country, 'Country is required');
    } else {
        setSuccess(country);
    }

if (passwordValue === '') {
    setError(password, 'Password is required');
} else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters');
} else {
    setSuccess(password);

    // Validate confirm password only if password is valid
    if (passwordValue !== confirmPasswordValue) {
        setError(confirmPassword, 'Passwords do not match');
    } else {
        setSuccess(confirmPassword);
    }
}


    if(!termsCheck.checked) {
        setError(termsCheck, 'You must agree with terms and conditions');
    } else {
        setSuccess(termsCheck);
    }


};


