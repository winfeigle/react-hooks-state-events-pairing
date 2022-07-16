import { useState } from "react";
import Comment from "./Comment"

function VideoComments({comments}) {
    const [showComments, setShowComments] = useState(true);

    const handleClick = () => {
        setShowComments(!showComments)
    }

    const displayComments = comments.map(comment => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment}/>;
    })
    
    return(
        <div className="VideoComments">
            <button onClick={handleClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            <hr></hr>
            <h2>{comments.length} Comments</h2>
            {showComments ? displayComments : null}
        </div>
        
        
    );
}

export default VideoComments;