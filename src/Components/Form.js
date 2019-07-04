import React from 'react'

class Form extends React.Component {

  render() {

    return (
      <div>
        <form>

          <label>
            <input placeholder="Email" className="input-email" type="text" name="email" />
          </label>

          <br></br>

          <label>
            <input placeholder="Password" className="input-pass" type="password" name="password" />
          </label>

          <br></br>

          <button type="submit" className="btn-login" value="Submit" >Lets Go!</button>

        </form>
      </div>
    );
  }
}

export default Form