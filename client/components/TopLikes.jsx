import React from 'react';
import ReactDOM from 'react-dom';

function TopLikes(props) {
  const likers = props.users;
  const topNine = [];
  for (var i = 0; i < likers.length; i++) {
    var user = likers[i];
    if (topNine.length === 9) {
      break;
    }
    topNine.push(
      <div>
        <img src={user.user_image_url} />
        <div>{user.user}</div>
      </div>
    );
  }
  return (<div>{topNine}</div>)
}

export default TopLikes;