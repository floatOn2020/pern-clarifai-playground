import React from "react";

const SignIn = ({routing}) => {
  return (
    <div>
      <div className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m mw6 center shadow-4">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={() => routing("home")}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => routing("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
              <a href="#0" className="f6 link dim black db">
                Forgot your password?
              </a>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default SignIn;
