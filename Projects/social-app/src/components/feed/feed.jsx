import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {posts} from '../dummydata'
export default function feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post,id)=>{
          return <Post post={post} key={id} />
        })}
      </div>
    </div>
  )
}
