import React, {useState} from "react";
import video from "../data/video.js";
import VideoInfo from "./VideoInfo";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  const onVideoUpvote = () => {
    setUpvotes(upvotes => upvotes + 1)
  }

  const onVideoDownvote = () => {
    setDownvotes(downvotes => downvotes + 1)
  }


  return (
    <div className="App">
      <VideoInfo 
        video={video} 
        upvotes={upvotes}
        downvotes={downvotes}
        onVideoUpvote={onVideoUpvote} 
        onVideoDownvote={onVideoDownvote}
        />
    </div>
  );
}

export default App;
