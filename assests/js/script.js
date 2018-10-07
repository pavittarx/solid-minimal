// a form to get IDP information
const idpForm=document.getElementById('idp-form');
// a button to log the user out
const logoutButton=document.getElementById('logout-button');

// Logs in user into the Solid Pod
async function login(idp) {
  const session=await solid.auth.currentSession();
  // throws error in console
  if(!session) await solid.auth.login(idp);
  else{
    // hides the form
  idpForm.style.display="none";

  logoutButton.style.display="inline-block";
  }
}

// Logs the user out of a solid pod.
async function logout(){
  await solid.auth.logout();
}

function registerLoginEvent() {
  // makes the form visible
  idpForm.style.display = "block";
  // attaches event to form
  idpForm.addEventListener("submit", (event) => {
    // prevents form from submission  
    event.preventDefault();
    // gets the inputted IDP information
    let idp = document.getElementById('idp-uri').value;
    // calls the login function
    login(idp);
  });
}

function registerLogoutEvent(){
  logoutButton.addEventListener('click', ()=>{
    logout();
    // makes the form visible
    idpForm.style.display="block";
    // hides the logout button
    logoutButton.style.display="none";
  })
}

// Checks if the user is logged in
solid.auth.trackSession(session => {
  if (!session) {
    console.log('The user is not logged in.')
    registerLoginEvent();

  } else {
    console.log(`The user is ${session.webId}`)
    registerLogoutEvent();
    logoutButton.style.display="inline-block";
  }

});
