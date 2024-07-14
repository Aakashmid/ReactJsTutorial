import { MoreVert } from '@mui/icons-material'
import './post.css'
import {users} from '../dummydata'
import { useState } from 'react'
export default function Post({post}) {
    const user=users.filter((u)=>u.id === post.userId)[0]

    const [likeCount,setLikeCount]=useState(post.like)
    const [isLiked,setIsLiked]=useState(false)

    const likeHandler=()=>{
        console.log('clicked');
        setLikeCount(isLiked ? likeCount-1 :likeCount+1)
        setIsLiked(!isLiked)
    }
  return (

    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={user.profilePhoto} alt="" />
                    <span className='postUsername'>{user.username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postContent">{post.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            <div className="postBottom">
                <div className="postLeftBottom">
                    <img className='likeIcon' src="assets/like.png"  onClick={likeHandler} alt="" />
                    <img className='likeIcon' src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className='postlikeCounter'>{likeCount} people like it </span>
                </div>
                <div className="postRightBottom"><span className="postComment">{post.comment} comments </span></div>
            </div>
        </div>
    </div>
  )
}
