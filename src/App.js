import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from '../src/components/layouts/Navbar.js';
import Dashbord from '../src/components/dashbord/Dashbord.js';
import ProjectDetails from './components/projects/ProjectDetails.js';
function App() {
  return (
    <BrowserRouter>
      {' '}
      <div className="App">
        <Navbar />{' '}
        <Routes>
          <Route exact path="/" element={<Dashbord />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
