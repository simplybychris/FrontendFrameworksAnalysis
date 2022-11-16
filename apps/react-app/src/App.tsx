import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NextPage from './pages/NextPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/next-page" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;
