import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profileEdit/EditProfile";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/private/PrivateRoute";
import ForgetPass from "./pages/forgetPass/ForgetPass";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import Settings from "./pages/Settings/Settings";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-pass" element={<ForgetPass />} />
          <Route path="/change-pass/:email" element={<ChangePassword />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/editprofile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />

          <Route
            path="/settings/account"
            element={
              <PrivateRoute>
                <Account />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
