import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/HeaderComponent/index";


function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
