import React from 'react';
import ReactDOM from 'react-dom';

function TopReposts(props) {
  const reposters = props.users;
  const topNine = [];

  var pixels = 0;
  for (var i = 0; i < reposters.length; i++) {
    var styleLI = {
      position: "absolute",
      left: pixels + "px"
    }
    var user = reposters[i];
    if (topNine.length === 9) {
      break;
    }
    pixels += 25;
    topNine.push(
      <li style={styleLI}>
        <img src={user.user_image_url}  className={"userImg"}/>
        {/* <div>{user.user}</div> */}
      </li>
    );
  }
  return (<ul>{topNine}</ul>)
}

export default TopReposts;