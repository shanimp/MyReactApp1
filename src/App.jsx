import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactForm />}/>
          <Route path="/voter-list" element={<ContactList />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
