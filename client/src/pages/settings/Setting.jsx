import './setting.css'
import Sidebar from "../../sidebar/Sidebar"

const Setting = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <div className="settingsUpdateTitle">Update your account</div>
          <div className="settingsDeleteTitle">Delete account</div>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
              alt=""
            />
           
              <label htmlFor="fileInput">
                <i className="settingsPPIcon fa fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
          
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sudip Giri" />
          <label>Email</label>
          <input type="text" placeholder="sudipgiri@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>

      <Sidebar />
    </div>
  );
}

export default Setting