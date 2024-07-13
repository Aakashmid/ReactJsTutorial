import { MoreVert } from '@mui/icons-material'
import './post.css'
export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src="/assets/person/2.jpeg" alt="" />
                    <span className='postUsername'>Aaks kkk</span>
                    <span className='postDate'>5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postContent">Hey this is my first post :) </span>
                <img className='postImg' src="/assets/post/1.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postLeftBottom">
                    <img className='likeIcon' src="assets/like.png" alt="" />
                    <img className='likeIcon' src="assets/heart.png" alt="" />
                    <span className='postlikeCounter'>33 people like it </span>
                </div>
                <div className="postRightBottom"><span className="postComment">34 Comments</span></div>
            </div>
        </div>
    </div>
  )
}
