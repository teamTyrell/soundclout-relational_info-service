import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedTracksModal from './modals/RelatedTracksModal.jsx';
import HighlightedTracks from './components/HighlightedTracks.jsx';

class RelatedTracks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      genre: 'North',
      highlights: []
    }
    this.getSongs = this.getSongs.bind(this);
    this.generateRelatedSongs = this.generateRelatedSongs.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    axios.get('/api/songs')
    .then(res => {
      this.setState({songs: res.data});
      return res;
    })
    .then(res => {
      this.generateRelatedSongs();
      return res;
    })
    .then(res => {
      this.render();
    })
    .catch(error => {
      console.error('issue in App.jsx retrieving song data from DB');
    });
  }

  generateRelatedSongs() {
    var showThree = [];
    for (var i = 0; i < this.state.songs.length; i++) {
      if (this.state.songs[i].genre === this.state.genre) {
        showThree.push(this.state.songs[i]);
      }
      if (showThree.length === 3) {
        break;
      }
    }
    this.setState({highlights: showThree});
  }


  render() {
    return (
      <HighlightedTracks highlights={this.state.highlights} />
    )
  }
}

export default RelatedTracks;