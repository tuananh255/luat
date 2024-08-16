import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import ResetPass from "./pages/ResetPass/ResetPass";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Content from "./pages/Content/Content";
import User from "./pages/User/User";
import Social from "./pages/Social/Social";
import Api from "./pages/Api/Api";
import Website from "./pages/Website/Website";
import Plugin from "./pages/Plugin/Plugin";

function App() {
  return (
    <div className="w-full relative">
      <>
        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
          <Route path="/quen-mat-khau" element={<ForgotPass/>}/>
          <Route path="/cap-nhat-mat-khau" element={<ResetPass/>}/>
          <Route path="/admin/dashboard" element={<Layout><Dashboard/></Layout>} />
          <Route path="/admin/noi-dung" element={<Layout><Content/></Layout>} />
          
          <Route path="/admin/nguoi-dung" element={<Layout><User/></Layout>} />
          <Route path="/admin/social" element={<Layout><Social/></Layout>} />
          <Route path="/admin/API" element={<Layout><Api/></Layout>} />
          <Route path="/admin/website" element={<Layout><Website/></Layout>} />
          <Route path="/admin/plugin" element={<Layout><Plugin/></Layout>} />
        </Routes>
      </>
    </div>
  );
}

export default App;
