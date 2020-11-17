import React from 'react';
import ReactDOM from 'react-dom';
import RelatedTracks from './RelatedTracks.jsx';
import Likes from './Likes.jsx';
import Reposts from './Reposts.jsx';
import axios from 'axios';

// COMPONENTS:

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      users: []
    };
    // bind functions here:
    this.getSongs = this.getSongs.bind(this);

  }

  componentDidMount() {
    this.getSongs();
  }

  // get all songs
  getSongs() {
    axios.get('/api/songs')
    .then(res => {
      // if (error) {
      //   console.log(res.data);
      //   throw error;
      // }
      // this.setState({songs: res.data});
      console.log(res)
    })
    // .catch(error => {
    //   console.log(error)
    //   console.error('issue in App.jsx retrieving song data from DB');
    // });
  }

  // get all users


  render() {
    return (
      <div>
        <h1>Relational Information</h1>
        <RelatedTracks songs={this.state.songs} />
        <Likes users={this.state.users} />
        <Reposts users={this.state.users} />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;