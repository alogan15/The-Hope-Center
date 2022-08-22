import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/CreateAcct';
import ForgotPwd from './components/ForgotPwd';
import Login from './components/Login';
import Verify from './components/Verify';
import MonetaryDonate from './components/MonetaryDonate';
import DonorHome from './components/DonorHome';
import Dashboard from './Inventory/Dashboard';
import NewIncoming from './components/NewIncoming';
import NewParticipant from './components/NewParticipant';



function App() {
  
  return (
    <div className="App">
      <div className='image'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgotPwd />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/donateform" element={<NewIncoming />} />
          <Route path="/moneyform" element={<MonetaryDonate />} />
          <Route path="/donatehome" element={<DonorHome />} />
          <Route path="/inventory" element={<Dashboard />} />
          <Route path="/participantform" element={<NewParticipant />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;