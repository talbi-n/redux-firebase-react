import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from '../src/components/layouts/Navbar.js';
import Dashbord from '../src/components/dashbord/Dashbord.js';
function App() {
  return (
    <BrowserRouter>
      {' '}
      <div className="App">
        <Navbar />{' '}
        <Routes>
          <Route path="/" element={<Dashbord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
