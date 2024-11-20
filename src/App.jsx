import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientsPage from "./Components/ClientsPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientsPage />} />
      </Routes>
    </>
  );
}

export default App;
