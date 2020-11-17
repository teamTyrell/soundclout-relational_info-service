import React from 'react';
import ReactDOM from 'react-dom';

function HighlightedTracks(props) {
  const highlights = props.highlights;
  const topThree = [];
  for (var i = 0; i < highlights.length; i++) {
    var song = highlights[i];
    topThree.push(
      <div>
        <div>{song.artist_image_url}</div>
        <div>{song.title}</div>
        <div>{song.artist}</div>
        <div>{song.plays}</div>
        <div>{song.likes}</div>
        <div>{song.reposts}</div>
        <div>{song.comments}</div>
      </div>
    )
  }
  return (<div>{topThree}</div>)
}

export default HighlightedTracks;