import React, { useState } from "react";
import storyReelsDummyData from "../../../constants/storyReels";
import Story from "./Story/Story";
import "./storyReel.scss";

function StoryReel() {
  const [state] = useState(storyReelsDummyData);
  return (
    <div className="storyReel">
      {state.map((reel) => (
        <Story {...reel} />
      ))}
    </div>
  );
}

export default StoryReel;
