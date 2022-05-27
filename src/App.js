import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Router } from "./routes/Router";
import { createContext, useState } from "react";
export const lenContext = createContext();


function App() {
  const [userName, setUserName] = useState('');
  const [request, setRequest] = useState('');

  const lenVar = {
    userName: userName,
    setUserName: setUserName

  }
  return (
    <div className="bg-dark">
      < lenContext.Provider value={lenVar}>
        <Header></Header>

        <Router />
      </lenContext.Provider>
    </div>
  );
}

export default App;
