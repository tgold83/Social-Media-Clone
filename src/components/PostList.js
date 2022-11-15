import React from "react";
import Posts from "./Posts";
import arnold from "./../img/arnold.jpeg";
import brendanfraser from "./../img/brendanfraser.jpeg";
import george from "./../img/george.jpeg";

const mainPostList = [
  {
    friendPic: <img src={arnold} alt="A football headed kid"/>,
    name: 'Arnold',
    friendPost: 'Can\'t wait to meet up with Gerald for some stickball!'
  },
  {
    friendPic: <img src={george} alt="A picture of George Costanza" />,
    name: 'George Costanza',
    friendPost: 'I was in the pool, Jerry, I was in the pool!'
  },
  {
    friendPic: <img src={brendanfraser} alt="an image of Brendan Fraser"/>,
    name: 'Brendan Fraser',
    friendPost: 'I was in The Mummy.'
  }
];

function PostList(){
  return (
    <React.Fragment>
      <hr />
      <h3>What's Happening? (Friend Posts)</h3>
      {mainPostList.map((posts, index) =>
        <Posts friendPic={posts.friendPic}
          name={posts.name}
          friendPost={posts.friendPost}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default PostList;