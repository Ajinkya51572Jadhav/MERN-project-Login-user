import Register from "./components/Register";
 import Login from "./components/Login";
 import Home from "./components/Home";
import {Routes,Route} from "react-router-dom";
import MyName from "./components/MyName";


function App() {





  return (
    <div>
<Routes>

 <Route  path="/" element={<Home/>} />
 <Route path="/login"  element={<Login/>} />
<Route path="/register" element={<Register/>}/>
<Route path="/myname"  element={<MyName/>} />
</Routes>
    </div>
  );
}

export default App;
