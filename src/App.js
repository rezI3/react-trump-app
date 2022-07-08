import "./App.css";
import TrumpPage from "./page/TrumpPage";
import SignUp from "./page/SignUp";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./page/SignIn";
import PrivateRouter from "./component/PrivateRouter";
import { AuthProvider } from "./component/AuthContext";

const App = () => {
  // const [loginFlag, setLoginFlag] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/"
            element={<PrivateRouter element={<TrumpPage />} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<p>404 : error page</p>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
