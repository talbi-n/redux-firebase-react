import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from '../src/components/layouts/Navbar.js';
import Dashbord from '../src/components/dashbord/Dashbord.js';
import ProjectDetails from './components/projects/ProjectDetails.js';
import SignIn from './components/auth/SignIn.js';
import SignUp from './components/auth/SignUp.js';
import CreateProject from './components/projects/CreateProject.js';
function App() {
  return (
    <BrowserRouter>
      {' '}
      <div className="App">
        <Navbar />{' '}
        <Routes>
          <Route exact path="/" element={<Dashbord />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createProject" element={<CreateProject />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
