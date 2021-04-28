const form = document.querySelector('#form');
const button = document.querySelector('button');
const username = document.querySelector('#text');
const email = document.querySelector('#email');
const password = document.querySelector('#password1');
const passwordTwo = document.querySelector('#password2');
    
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();

});
    
   function checkInputs() {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const passwordTwoValue = passwordTwo.value.trim();

     if (usernameValue === '') {
       setError(username, 'Username cannot be blank')
     } else {
       setSuccess(username)
     }

     if (emailValue === '') {
      setError(email, 'Invalid email')
    } else {
      setSuccess(email)
     }
     
     if (passwordValue === '' || passwordValue.length < 6 || passwordTwo !== passwordValue ) {
      setError(password, 'Invalid password ')
    } else {
      setSuccess(password)
     }
     
     if (passwordTwo === '' || passwordTwo.length < 6 || passwordTwo !== passwordValue ) {
      setError(passwordTwo, 'Invalid password')
    } else {
      setSuccess(passwordTwo)
    }


  }
   
   function setError(input, message) {
     const formControl = input.parentElement;
     const small = formControl.querySelector('small')
    

     // add error message inside small
     small.innerText = message;

     //add error class
     formControl.className = 'form-control error'


     


   }


function setSuccess(input, message) {
  const formControl = input.parentElement;

  formControl.className = 'form-control success'
     


   }





    // check tick
    // <i class="fa fa-check-circle-o" aria-hidden="true"></i>


    // alert 
    // <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              