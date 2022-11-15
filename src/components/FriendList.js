import React from "react";
import Friends from "./Friends";
import jasonstaythumb from "./../img/jasonstaythumb.jpeg";
import jimmy from "./../img/jimmy.jpg";
import simba from "./../img/simba.jpeg";

const mainFriendList = [
  {
    friendPic: <img src={jasonstaythumb} alt="A picture of the transporter" />,
    name: 'Jason Staythumb'
  },
  {
    friendPic: <img src={jimmy} alt="A picture of Jimmy Neutron" />,
    name: 'Jimmy Neutron'
  }, 
  {
    friendPic: <img src={simba} alt="A picture of Simba" />,
    name: 'Simba'
  }
];

function FriendList(){
  return (
    <React.Fragment>
      <hr />
      <h3>Who dat? (People You May Know)</h3>
      {mainFriendList.map((friends, index) =>
        <Friends friendPic={friends.friendPic}
        name={friends.name}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default FriendList;