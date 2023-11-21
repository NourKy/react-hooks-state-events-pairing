import React , {useState}from "react";

function VideoDetails({ videoD ,addLikes}) {
    const[likes,setLikes]=useState(videoD.upvotes);
    const[dislikes,setDisLikes]=useState(videoD.downvotes);
    const [showComments,setShowComments]=useState(true);
    function handleLikes()
    {
        setLikes(likes+1);

    }
    function handleDisLike()
    {
        setDisLikes(dislikes+1)
    }
    const handleShowComments=()=>
    {
        setShowComments(!showComments);

    }
  return (
    <div>
      <h1>{videoD.title}</h1>
      <p>{videoD.views} Views | Uploaded {videoD.createdAt}</p>
      <br></br>
      <button onClick={handleLikes}>{likes}👍</button>
      <button onClick={handleDisLike}>{dislikes}👎</button>
      <br>
      </br>
      <button onClick={handleShowComments}>{showComments?"Hide Comments":"Show Comments"}</button>
      {showComments && (
        <div>
<h1>
    {videoD.comments.length} Comments
</h1>
{videoD.comments.map((comment,index)=>(
    <div key={index}> 
    <h3>{comment.user}</h3>
    <p>
        {comment.comment}
    </p>
        </div>
)

)}
        </div>
        )
        }
    </div>
  );
}

export default VideoDetails;