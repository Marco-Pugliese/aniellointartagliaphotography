import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientsPage from "./Components/ClientsPage.jsx";
import PickPhoto from "./Components/PickPhoto.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientsPage />} />
        <Route path="/photoPicker/:name/:code/:mail" element={<PickPhoto />} />
      </Routes>
    </>
  );
}

export default App;
