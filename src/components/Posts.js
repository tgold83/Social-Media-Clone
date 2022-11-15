import React from "react";
import PropTypes from "prop-types";

function Posts(props){
  return (
    <React.Fragment>
      <h3>{props.friendPic}</h3>
      <h3><em>{props.name}</em></h3>
      <h3>{props.friendPost}</h3>
    </React.Fragment>
  );
}

Posts.propTypes = {
  name: PropTypes.string.isRequired,
  friendPost: PropTypes.string.isRequired
};

export default Posts;