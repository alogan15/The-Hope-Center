import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/CreateAcct';
import ForgotPwd from './components/ForgotPwd';
import Login from './components/Login';
import Verify from './components/Verify';
import DonateForm from './components/DonationForm';
import MonetaryDonate from './components/MonetaryDonate';
import DonorHome from './components/DonorHome';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgotPwd />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/donateform" element={<DonateForm />} />
          <Route path="/moneyform" element={<MonetaryDonate />} />

        </Routes>
      </Router>
      <div></div>
     <DonorHome />
    </div>
  );
}

export default App;
