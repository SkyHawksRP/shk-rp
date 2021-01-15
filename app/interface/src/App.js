import Components from "./pages/Components";
import { Routes, Route, Link } from 'react-router-dom';
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<div>Home (<Link to="admin/components">Clique aqui para ver os componentes</Link>)</div>} />
        <Route path="user/login" element={<Login/>}/>
        <Route path="user/register" element={<Register/>}/>
        <Route path="admin/components" element={<Components/>}/>
      </Routes>
    </div>
  );
}

export default App;
