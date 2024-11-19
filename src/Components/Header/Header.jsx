import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { SetPageAction } from "../../Redux/Actions";
import { useEffect, useState } from "react";

const Header = () => {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(false);
  const handleScroll = () => {
    if (hasPassedThreshold === false && window.scrollY > 100) {
      console.log("Puoi cambiare il componente ora!");
      setHasPassedThreshold(true);
    } else if (hasPassedThreshold === true && window.scrollY <= 100) {
      console.log("puoi riportarl allo stato precedente");
      setHasPassedThreshold(false);
    }
  };
  const dispatch = useDispatch();
  const PageVisited = useSelector((state) => state.Page.page);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasPassedThreshold]);
  // useEffect(() => {
  //   console.log(PageVisited);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [PageVisited]);
  // //
  return (
    <>
      <Navbar
        expand="lg"
        className={
          hasPassedThreshold === true
            ? "changingNav1 transition-1 cursive p-0"
            : "changingNav2 transition-1 cursive p-0"
        }
        id={hasPassedThreshold === true ? "MyHeader2" : "MyHeader"}
      >
        <Container>
          <Link to={"/"} onClick={() => dispatch(SetPageAction("Home"))}>
            <div>
              <Logo />
            </div>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="m-variable">
              <Link
                className="nav-link p-0 px-3  d-flex align-items-center justify-content-center"
                to={"/"}
                onClick={() => dispatch(SetPageAction("Home"))}
              >
                <span
                  className={
                    PageVisited === "Home"
                      ? "selectedPage transition"
                      : "transition"
                  }
                >
                  Home
                </span>
              </Link>
              <Link
                to={"/AboutMe"}
                className="nav-link p-0 px-3  d-flex align-items-center justify-content-center"
                onClick={() => dispatch(SetPageAction("AboutMe"))}
              >
                <span
                  className={
                    PageVisited === "AboutMe"
                      ? "selectedPage transition"
                      : "transition"
                  }
                >
                  About Me
                </span>
              </Link>
              <Link
                to={"/Events"}
                className="nav-link p-0 px-3  d-flex align-items-center justify-content-center"
                onClick={() => dispatch(SetPageAction("Events"))}
              >
                <span
                  className={
                    PageVisited === "Events"
                      ? "selectedPage transition"
                      : "transition"
                  }
                >
                  Events
                </span>
              </Link>
              <Link
                to={"/Info"}
                className="nav-link p-0 px-3  d-flex align-items-center justify-content-center"
                onClick={() => dispatch(SetPageAction("Info"))}
              >
                <span
                  className={
                    PageVisited === "Info"
                      ? "selectedPage transition"
                      : "transition"
                  }
                >
                  Info & Contacts
                </span>
              </Link>
              <Link
                to={"/Clients"}
                className="nav-link p-0 px-3  d-flex align-items-center justify-content-center"
                onClick={() => dispatch(SetPageAction("Clients"))}
              >
                <span
                  className={
                    PageVisited === "Clients"
                      ? "selectedPage transition"
                      : "transition"
                  }
                >
                  Clients
                </span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
