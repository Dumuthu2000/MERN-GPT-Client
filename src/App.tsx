import Chat from "./Pages/Chat";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import { usAuth } from "./components/context/AuthContext";

function App() {
  console.log(usAuth()?.isLoggedIn)

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </main>
  )
}

export default App
