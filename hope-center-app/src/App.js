import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/CreateAcct';
import ForgotPwd from './components/ForgotPwd';
import Verify from './components/Verify';
import MonetaryDonate from './components/MonetaryDonate';
import Blog from './InventoryHome/Blog';
import Dashboard from './Inventory/Dashboard';
import NewIncoming from './components/NewIncoming';
import NewParticipant from './components/NewParticipant';
import LoginSide from './components/LoginSide';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpwd" element={<ForgotPwd />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/donateform" element={<NewIncoming />} />
          <Route path="/moneyform" element={<MonetaryDonate />} />
          <Route path="/donatehome" element={<Blog />} />
          <Route path="/inventory" element={<Dashboard />} />
          <Route path="/participantform" element={<NewParticipant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;