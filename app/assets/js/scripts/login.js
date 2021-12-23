const loginForm = document.getElementById('login-form');
const loginEmailTextField = document.getElementById('login-email-textfield');
const loginPasswordTextField = document.getElementById('login-password-textfield');
const loginButton = document.getElementById('login-button');

const basicEmail = /^\S+@\S+\.\S+$/;

loginForm.onsubmit = () => { 
  return false; 
}

loginButton.addEventListener('click', () => {
  onLogin();
});

document.addEventListener('keydown', (e) => {
  if(getCurrentView() === VIEWS.login && !loginEmailTextField.disabled) {
      if(e.key === 'Enter') {
          onLogin();
      }
  }
});

function onLogin(){
  if(loginEmailTextField.value && loginPasswordTextField.value){
    if(!basicEmail.test(loginEmailTextField.value)){
      showLoginError("Adresse email non valide ! 😅", "Merci de vérifier votre adresse email.");
      return;
    }
  }
  else{
    return;
  }

  formDisabled(true);

  AuthManager.addAccount(loginEmailTextField.value, loginPasswordTextField.value).then((value) => {
    setTimeout(() => {
      switchView(getCurrentView(), VIEWS.launcher, () => {
          loginUsernameTextField.value = '';
          loginPasswordTextField.value = '';
          formDisabled(false);
      });
      initLauncherView();
    }, 1000);
  }).catch((err) => {
    formDisabled(false);
    loginPasswordTextField.value = '';

    
    
  })

}

function formDisabled(value) {
  loginDisabled(value);
  loginEmailTextField.disabled = value;
  loginPasswordTextField.disabled = value;
}

function loginDisabled(value) {
  if(loginButton.disabled !== value) {
      loginButton.disabled = value;
  }

  if(value) {
      $('#login-button-loader').show();
  }
  else {
      $('#login-button-loader').hide();
  }
}