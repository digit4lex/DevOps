import React from 'react'
import Form from './Form';
import Logo from '../assets/Logotipo.png'
import Footer from './Footer'

class DevOps extends React.Component {
    
    render() {
  
      return (
        <div>
          <img src={Logo} className="Logo" alt="logo"></img>
          <Form/>
          <Footer/>

        </div>
      );
    }
  }

  export default DevOps