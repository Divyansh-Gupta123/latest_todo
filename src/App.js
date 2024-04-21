
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LatestTodo from './Components/latetsTodo';
function App(props) {
  return (
    <div className="APP">
    <Router>
      <Routes>
      <Route element={<LatestTodo/>} path='/latesttodo'/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
