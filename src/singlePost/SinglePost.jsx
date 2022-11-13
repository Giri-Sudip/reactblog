import './SinglePost.css'

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://cdn.pixabay.com/photo/2022/07/13/16/25/cat-7319589_960_720.jpg"
          alt="cat_photo"
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostInfo">Author:<b>Sudip</b></span>
             <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus blanditiis tempore magni temporibus voluptatem placeat officia qui error fuga commodi sit ipsum, maiores esse deserunt quod inventore, ullam ab.

        </p>

      </div>
    </div>
  );
}

export default SinglePost