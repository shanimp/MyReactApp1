import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Context/DataContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactForm />}/>
          <Route path="/voter-list" element={<ContactList />}/>
        </Routes>
      </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
