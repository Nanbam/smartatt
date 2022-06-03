import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing Page/LandingPage";
import Login from "./pages/Login Page/Login";
import Otp from "./pages/OTP/Otp";
import SignUp from "./pages/Signup Page/SignUp";
import LoginSuccess from "./pages/Success/Success";
import Verified from "./pages/Verification/Verification";
import Contact from "./pages/contactpage/Contact";
import 'tachyons';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login_success" element={<LoginSuccess />} />

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
