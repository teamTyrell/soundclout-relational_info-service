import React from 'react';
import ReactDOM from 'react-dom';

function HighlightedTracks(props) {
  const highlights = props.highlights;
  const topThree = [];
  for (var i = 0; i < highlights.length; i++) {
    var song = highlights[i];
    topThree.push(
      <div className={"songGrid"}>
        <img src={"https://fec-tyrell-users.s3.us-east-2.amazonaws.com/Snapchat-7841306265423801048.jpg"}
          className={"songImg"} />
          {/* {song.artist_image_url} */}

        <div className={"songTitle"}>{song.title}</div>
        <div className={"artist"}>{song.artist}</div>
        <div className={"statsPlays"}>{song.plays}</div>
        <div className={"statsLikes"}>{song.likes}</div>
        <div className={"statsReposts"}>{song.reposts}</div>
        <div className={"statsComments"}>{song.comments}</div>
      </div>
    )
  }
  return (<div>{topThree}</div>)
}

export default HighlightedTracks;