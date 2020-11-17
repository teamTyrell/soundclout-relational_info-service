import React from 'react';
import ReactDOM from 'react-dom';

function TopReposts(props) {
  const reposters = props.users;
  const topNine = [];
  for (var i = 0; i < reposters.length; i++) {
    var user = reposters[i];
    if (topNine.length === 9) {
      break;
    }
    topNine.push(
      <div>
        <div>{user.user_image_url}</div>
        <div>{user.user}</div>
      </div>
    );
  }
  return (<div>{topNine}</div>)
}

export default TopReposts;