import React from 'react'
import Header from './Header'

class DevOps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        options: []
      };
    }
    
    render() {

        Header.defaultProps = {
            title: 'DevOps',
            subtitle: 'Social Network for weebs'
          };
  
      return (
        <div>
          <Header  />
         
        </div>
      );
    }
  }

  export default DevOps