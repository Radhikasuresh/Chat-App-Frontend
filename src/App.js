import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Login from './Components/Login/Login';
import Chat from './Components/Chat/Chat';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
  )
}

export default App;
