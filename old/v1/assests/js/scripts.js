// refernce to the form getting IDP details.
const idpForm = document.getElementById('idp-form');
// a button to log the user out
const logoutButton = document.getElementById('logout-button');

// Tracks if the user is logged in or out.
solid.auth.trackSession(session => {
  if (!session) {
    
    idpForm.style.display = "block";
    logoutButton.style.display = "none";

  } else {

    console.log(`The user is ${session.webId}`);

    idpForm.style.display = "none";
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

// calls the login function, when the form is submitted
idpForm.addEventListener("submit", (event) => {
  // prevents form from submission  
  event.preventDefault();
  // gets the inputted IDP information
  let idp = document.getElementById('idp-uri').value;
  // calls the login function
  login(idp);
});

// attaches an event listener to logout button.
logoutButton.addEventListener('click', () => {
  logout();
})