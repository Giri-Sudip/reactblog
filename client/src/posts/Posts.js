import './Posts.css'
import Post from "../post/Post"
const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts.map((p, key)=>(
        <Post post={p} key={key} />
      )
      )}
    </div>
  );
}

export default Posts