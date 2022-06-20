import './App.css';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';

function App() {
 
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/abood" exact element={<Home />} />
            <Route path="project" exact element={<Project />} />

          </Routes>
      



      </BrowserRouter>
    </>
  );
}

export default App;
