
import './App.css';
import AddStudent from './component/AddStudent';
import CounterClass from './component/CounterClass';
import CounterFunction from './component/CounterFunction';
import Header from './component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
