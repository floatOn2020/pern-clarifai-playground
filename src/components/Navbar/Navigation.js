import React from 'react'

const Navigation = ({signedIn, routing}) => {
  const goTo = signedIn ? 'signOut' : 'signIn';
  const displayRoute = signedIn ? 'SignOut' : 'SignIn';
  console.log(goTo)

  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        className="on-top f3 link dim black underline pa3 pointer dark-green"
        onClick={() => routing(goTo)}
      >
        {displayRoute}
      </p>
    </nav>
  );
}

export default Navigation;
