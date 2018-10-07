// this redirects me to IDP providers page

async function login(idp) {
    const session = await solid.auth.currentSession();
    if (!session)
      await solid.auth.login(idp);
    else
      alert(`Logged in as ${session.webId}`);
  }
  login('https://solid.community');