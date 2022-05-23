import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from './routes/Router';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Router/>
    </div>
  )
}

export default App;
