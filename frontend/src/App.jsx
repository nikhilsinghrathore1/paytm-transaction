import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SendMoney from "./pages/SendMoney"


function App() {

  return (
   
   <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Register/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/home" element ={<Home/>}/>
      <Route path="/transfer" element ={<SendMoney/>}/>
    </Routes>
   </BrowserRouter>
   
  )
}

export default App
