import VideoComments from "./VideoComments";

function VideoInfo({video, upvotes, downvotes, onVideoUpvote, onVideoDownvote}) {

  const handleUpvote = () => onVideoUpvote()
  const handleDownvote = () => onVideoDownvote()

    return (
        <div className="Video">
          <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
        <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpvote}>{upvotes} 👍</button>
            <button onClick={handleDownvote}>{downvotes} 👎</button>
        
        <VideoComments comments={video.comments}/>
        </div>
      );
}

export default VideoInfo;