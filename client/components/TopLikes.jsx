import React from 'react';
import ReactDOM from 'react-dom';



function TopLikes(props) {
  const likers = props.users;
  const topNine = [];

  const styleUL = {
    position: "absolute",
    left: 0
  };


  var pixels = 0;
  for (var i = 0; i < likers.length; i++) {
    var styleLI = {
      position: "absolute",
      left: pixels + "px"
    }
    var user = likers[i];
    if (topNine.length === 9) {
      break;
    }

    pixels += 25;
    topNine.push(
      <li style={styleLI}>
        <img src={user.user_image_url} className={"userImg"} />
        {/* <div>{user.user}</div> */}
      </li>
    );
  }
  return (<ul style={styleUL}>{topNine}</ul>)
}



export default TopLikes;