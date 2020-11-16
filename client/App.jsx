import React from 'react';
import ReactDOM from 'react-dom';
import RelatedTracks from './RelatedTracks.jsx';
import Likes from './Likes.jsx';
import Reposts from './Reposts.jsx';

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

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;