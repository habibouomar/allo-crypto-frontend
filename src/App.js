import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "./routes/Router";
import Header from "./components/Header";
import { createContext, useState } from "react";
export const lenContext = createContext()
function App() {
  const [length,setLength] = useState('');
  const [request,setRequest] = useState('');

  const lenVar = {
    length:length,
    setLength:setLength,
    func:{},
    request:request,
    setRequest:setRequest
 
  }
  return (
   
   
    <div className="App">
  < lenContext.Provider value={lenVar}>

      <Header></Header>
      <Router/>
   </lenContext.Provider>
    </div>
  );
}

export default App;
