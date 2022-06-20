import './App.css';
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';

function App() {
 
  return (
    <>
      <BrowserRouter>
      <h1>helo</h1>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="project" exact element={<Project />} />

          </Routes>
      



      </BrowserRouter>
    </>
  );
}

export default App;
