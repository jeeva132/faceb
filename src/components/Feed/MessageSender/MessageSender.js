import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Avatar } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import db from "../../../firebase";
import { useStateValue } from "../../../store/StateProvider";
import "./MessageSender.scss";

function MessageSender() {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  async function addPosts(db) {
    const postsCol = collection(db, "posts");

    await addDoc(postsCol, {
      username: user.displayName,
      profilePic: user.photoURL,
      message: input,
      image: imgUrl,
      timeStamp: new Date(),
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(db);

    resetInputs();
  };

  const resetInputs = () => {
    setInput("");
    setImgUrl("");
  };

  const setValue = (callbackFn, e) => callbackFn(e.target.value);
  const setImgUrlHandler = (e) => setValue(setImgUrl, e);
  const setInputHandler = (e) => setValue(setInput, e);

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form onSubmit={handleSubmit} className="messageSender__form">
          <input
            value={input}
            onChange={setInputHandler}
            className="messageSender__form--input"
            type="text"
            placeholder={`Whats on your mind?`}
          />
          <input
            type="text"
            value={imgUrl}
            onChange={setImgUrlHandler}
            placeholder="Image URL optional"
          />
          <button type="submit">Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
