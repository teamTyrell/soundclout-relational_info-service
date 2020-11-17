import React from 'react';
import ReactDOM from 'react-dom';
import RelatedTracks from './RelatedTracks.jsx';
import LikesReposts from './LikesReposts.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Relational Information</h1>
        <h3>Related Tracks</h3>
        <RelatedTracks />
        <h3>Likes</h3>
        <LikesReposts />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;