import React from 'react'

class RegisterForm extends React.Component {

  render() {

    return (
      <div>
        <form>

          <label>
            <input type="text" className="full-name" placeholder="Full Name" name="full-name"></input>
          </label>
          <br />

          <label>
            <input type="email" className="register-email" placeholder="Email" name="email"></input>
          </label>
          <br />

          <label>
            <input type="password" className="register-pass" placeholder="Password" name="password"></input>
          </label>
          <br />

          <label>
            <input type="password" className="pass-repeat" placeholder="Repeat Password" name="repeat-password"></input>
          </label>
          <br />

          <button className="btn-register">Create Account!</button>

        </form>
      </div>
    );
  }
}

export default RegisterForm