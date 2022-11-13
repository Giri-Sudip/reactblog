import './Post.css';

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem, ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita atque
        ad nisi rem error, officiis accusantium officia repellendus sapiente
        quibusdam qui neque, veritatis minima enim quisquam eligendi repudiandae
        quos beatae!Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Expedita atque ad nisi rem error, officiis accusantium officia
        repellendus sapiente quibusdam qui neque, veritatis minima enim quisquam
        eligendi repudiandae quos beatae!
      </p>
    </div>
  );
}

export default Post