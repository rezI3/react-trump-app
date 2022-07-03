import "./App.css";
import TrumpPage from "./page/TrumpPage";
import SignUp from "./page/SignUp";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./page/SignIn";
import PrivateRouter from "./component/PrivateRouter";

const App = () => {
  // const [loginFlag, setLoginFlag] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <PrivateRouter path="/" element={<TrumpPage/>}/>
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
