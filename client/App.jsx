import React from 'react';

// COMPONENTS:

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    // bind functions here:


  }

  render() {
    return (
      <h1>Relational Information</h1>
    );
  }
}

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;