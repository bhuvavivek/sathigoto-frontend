import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import { PaymentProvider } from './PaymentContext';
import Success from './Success';
import Thankyou from './Thankyou';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <PaymentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment-success" element={<Success />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/thankyou" element={<Thankyou />} />
          </Route>
        </Routes>
      </Router>
    </PaymentProvider>
  );
}

export default App;
