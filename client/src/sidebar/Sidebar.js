import "./Sidebar.css";
import axios from "axios"
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
const Sidebar = () => {
  const [cats,setCats] = useState([]);
  useEffect(() => {
    const getCats = async ()=>{
      const res = await axios.get("/categories");
      setCats(res.data)
    }
    getCats()

  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
          alt=""
        />
        <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c, key) => (
            <Link to={`/?cat=${c.name}`} key={key} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar