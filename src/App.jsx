import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Loading from "./Components/Loader/Loading";
import Footer from "./Components/Footer/Footer";
import AboutMePage from "./Components/AboutMePage/AboutMePage";
import ClientsPage from "./Components/ClientsPage/ClientsPage";

function App() {
  const [loaded, setIsLoaded] = useState(false);
  const changedLoaded = () => {
    setIsLoaded(true);
  };
  const changeStatus = () => {
    setTimeout(changedLoaded, 5000);
  };
  useEffect(() => {
    changeStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loaded === false ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AboutMe" element={<AboutMePage />} />
            <Route path="/Clients" element={<ClientsPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
