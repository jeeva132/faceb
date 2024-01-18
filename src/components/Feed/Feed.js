// import { collection, getDocs } from "firebase/firestore";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import "./feed.scss";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./Post/Post";
import StoryReel from "./StoryReel/StoryReel";

function Feed() {
  const [posts, setPosts] = useState([]);

  // Get a list of cities from your database
  async function getPosts(db) {
    const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"));

    return onSnapshot(q, (querySnapshot) => {
      const _postsList = [];
      querySnapshot.forEach((doc) => {
        _postsList.push({ id: doc.id, ...doc.data() });
      });
      setPosts(_postsList);
    });
  }

  useEffect(() => {
    const unSub = getPosts(db);
    return unSub;
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((item) => {
        return (
          <Post
            key={item.id}
            profilePic={item.profilePic}
            message={item.message}
            timeStamp={item.timeStamp}
            username={item.username}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
