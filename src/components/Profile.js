import React from "react";
import Tediesha from "./../img/Tediesha.jpg";

function Profile(){
  return (
    <React.Fragment>
      <h1><em>Tedeisha Hepold</em></h1>
      <img src={Tediesha} alt="It's a picture of Tediesha" />
      <h4>Tweets</h4>
      <h4>Following</h4>
      <h4>Followers</h4>
    </React.Fragment>
  );
}

export default Profile;