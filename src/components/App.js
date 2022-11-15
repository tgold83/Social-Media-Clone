import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Bio from "./Bio";
import Posts from "./Posts";
import Friends from "./Friends";
import PostList from "./PostList";
import FriendList from "./FriendList";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Profile />
      <Bio />
      <PostList />
      <FriendList />
    </React.Fragment>
  );
}

export default App;
