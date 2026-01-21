import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import './assets/css/style.css';
import Header from './components/Header';
import Electronics from './pages/Electronics';
import Sports from './pages/Sports';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
