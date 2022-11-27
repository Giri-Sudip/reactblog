import Header from "../../header/Header";
import {useState, useEffect} from 'react'
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import "./Home.css";
import axios from "axios"
import {useLocation} from "react-router"
const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
   
  useEffect(() =>{
  const fetchPosts = async ()=>{
    const res = await axios.get('/posts')
    setPosts(res.data);
    // console.log(res.data)
  }
  fetchPosts();
  },[search])

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
