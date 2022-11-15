import React from "react";
import PropTypes from "prop-types";

function Friends(props){
  console.log(props);
  return (
    <React.Fragment>
      <h3>{props.friendPic}</h3>
      <h3><em>{props.name}</em></h3>
      <div>
        <button type="button">Add Friend</button>
      </div>
    </React.Fragment>
  );
}

Friends.propTypes = {
  name: PropTypes.string.isRequired
};

export default Friends;