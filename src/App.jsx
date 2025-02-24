import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { PaymentProvider } from './PaymentContext';
import Success from './Success';

function App() {
  return (
    <PaymentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment-success" element={<Success />} />
        </Routes>
      </Router>
    </PaymentProvider>
  );
}

export default App;
