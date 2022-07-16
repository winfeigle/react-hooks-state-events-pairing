import React from "react";

function Comment({user, comment}) {
    return(
        <div className="Comment">
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;