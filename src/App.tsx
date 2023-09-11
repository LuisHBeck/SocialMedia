import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { NewPost } from './pages/NewPost';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/login" element={ <Login /> } />
          <Route path='/new-post' element={ <NewPost /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
