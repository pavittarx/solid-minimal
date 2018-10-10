
// Tracks if the user is logged in or out.
solid.auth.trackSession(session => {
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.getElementById('login-section');
  const logoutButton = document.getElementById('logout-button');
  if (!session) {

    registerLoginEvents(loginForm, logoutButton);
    attachDropdownEvents();
    loginContainer.style.display = "block";
    logoutButton.style.display = "none";

  } else {

    registerLogoutEvents(loginForm, logoutButton);
    removeDropdownEvents();
    loginContainer.style.display = "none";
    logoutButton.style.display = "inline-block";

  }

});


async function login(idp) {
  const session = await solid.auth.currentSession();
  // throws error in console
  if (!session) await solid.auth.login(idp);
}

// Logs the user out of a solid pod.
async function logout() {
  await solid.auth.logout();
}

async function popupLogin() {
  let session = await solid.auth.currentSession();
  let popupUri = 'https://solid.community/common/popup.html';
  if (!session)
    session = await solid.auth.popupLogin({ popupUri });
  alert(`Logged in as ${session.webId}`);
}


function registerLoginEvents(loginForm, logoutButton) {
  // calls the login function, when the form is submitted
  loginForm.addEventListener("submit", (event) => {
    // prevents form from submission  
    event.preventDefault();
    // gets the inputted IDP information
    let idp = document.getElementById('idp-uri').value;
    // calls the login function
    login(idp);
  });

   logoutButton.removeEventListener('click',()=>{
    console.log('Logout Listener Removed');
  })

  document.getElementById('popup-login-button').addEventListener('click',()=>{
    popupLogin();
  })
}

function registerLogoutEvents(loginForm, logoutButton) {
  // attaches an event listener to logout button.
  logoutButton.addEventListener('click', () => {
    logout();
  });

  loginForm.removeEventListener('submit', ()=>{
    console.log('submit', ()=>{
      console.log('Submit Listener Removed');
    })
  })
}

/* adds the URI of identity providers to be used by login() */
function attachDropdownEvents() {
  let idpProviders = document.querySelectorAll('.idp-provider > span');
  let idpUri = document.getElementById('idp-uri');

  console.log(idpProviders[0].textContent);

  for (let i = 0; i < idpProviders.length; i++) {
    idpProviders[i].addEventListener('click', () => {
      idpUri.value = idpProviders[i].textContent.trim();
    })
  }
}

function removeDropdownEvents() {
  let idpProviders = document.querySelectorAll('.idpProviders > span');
  for (let i = 0; i < idpProviders.length; i++) {
    idpProviders[i].removeEventListeners('click', () => {
      console.log('Login Event removed for ', idpProviders[i].textContent);
    })
  }
}

