import './App.css';
import FIrst from './First';
import Second from './Second';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<FIrst />} />
      <Route path= "/second" element={<Second />} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
