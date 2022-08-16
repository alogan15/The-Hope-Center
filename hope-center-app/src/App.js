import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/CreateAcct';
import ForgotPwd from './components/ForgotPwd';
import Login from './components/Login';
import Verify from './components/Verify';
import DonateForm from './components/DonationForm';
import TextFields from './components/Textfield';
import MonetaryDonate from './components/MonetaryDonate';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgotPwd />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </Router> */}
      {/* <DonateForm /> */}
      <MonetaryDonate />
    </div>
  );
}

export default App;
