import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/CreateAcct';
import ForgotPwd from './components/ForgotPwd';
import Login from './components/Login';
import Verify from './components/Verify';
import DonateForm from './components/DonationForm';
import MonetaryDonate from './components/MonetaryDonate';
import DonorHome from './components/DonorHome';
import Dashboard from './Inventory/Dashboard';
import ParticipantForm from './components/ParticipantForm';



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
          <Route path="/donatehome" element={<DonorHome />} />
          <Route path="/inventory" element={<Dashboard />} />
          <Route path="/participantform" element={<ParticipantForm />} />
        </Routes>
      </Router>
      {/* <div></div>
      <SearchBar placeholder="Search Inventory..." data={BookData} /> */}
    </div>
  );
}

export default App;