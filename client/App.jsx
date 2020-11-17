import React from 'react';
import ReactDOM from 'react-dom';
import RelatedTracks from './RelatedTracks.jsx';
import Likes from './Likes.jsx';
import Reposts from './Reposts.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
      users: []
    };

    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {

    this.getUsers();
  }



  getUsers() {
    axios.get('/api/users')
    .then(res => {
      this.setState({users: res.data});
    })
    .catch(error => {
      console.error('issue in App.jsx retrieving song data from DB');
    });
  }

  render() {
    return (
      <div>
        <h1>Relational Information</h1>
        <RelatedTracks />
        <Likes users={this.state.users} />
        <Reposts users={this.state.users} />
      </div>
    );
  }
}

export default App;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;