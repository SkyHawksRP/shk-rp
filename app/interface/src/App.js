import Components from "./pages/Components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<div>Home (<Link to="admin/components">Clique aqui para ver os componentes</Link>)</div>} />
        <Route path="admin/components" element={<Components/>}/>
      </Routes>
    </div>
  );
}

export default App;
