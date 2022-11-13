
import Topbar from './topbar/Topbar'
import {Routes,Route} from "react-router-dom";

import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Single from "./pages/home/single/Single"
import Write from './pages/home/write/Write'
import Setting from "./pages/settings/Setting"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Error from "./Error/Error"


function App() {    
  const user=false;  
  return (
    <>
      <Topbar />
      {/* browserrouter should be implemented in index file and routes,route should be implemented in app file*/}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
