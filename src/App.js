import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
