import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import SideBar from "./components/shared/SideBar";
import NavBar from "./components/shared/Navbar";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import AppRoutes from "./AppRoutes";
// import { SnackbarProvider } from 'notistack';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
  // Moblie first
  const [isOpen, setIsOpen] = useState(true);
  // const [isMobile, setIsMobile] = useState(true);
  // const [previousWidth, setPreviousWidth] = useState(-1);

  const updateWidth = useCallback(() => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    // const wasMobile = previousWidth <= widthLimit;

    // if (isMobile !== wasMobile) {
    //   setIsOpen(!isMobile);
    // }

    if (isMobile) {
      setIsOpen(false);
    }

    // setPreviousWidth(width);
  }, []);

  // const currentURL = window.location.href
  // let navbarComponent = !isFullPageLayout ? <NavBar toggle={toggle} /> : '';
  // let sidebarComponent = !isFullPageLayout ? <SideBar toggle={toggle} isOpen={isOpen} /> : '';
  const pathname = window.location.pathname;
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);
  const onRouteChanged = useCallback(() => {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/login",
      "/register",
      "/forgotpassword",
      "/error-404",
      "/error-500",
    ];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (pathname === fullPageLayoutRoutes[i]) {
        setIsFullPageLayout(true);
        document
          .querySelector(".App")
          .classList.add("full-page-wrapper");
        break;
      } else {
        setIsFullPageLayout(false);
        document
          .querySelector(".App")
          .classList.remove("full-page-wrapper");
      }
    }
  }, [pathname]);

  useEffect(() => {
    updateWidth();
    onRouteChanged();

    window.addEventListener("resize", updateWidth());
    return () => {
      window.removeEventListener("resize", updateWidth());
    };
  }, [updateWidth, onRouteChanged]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  return (
    <ToastProvider
      placement="bottom-left"
      autoDismiss
      autoDismissTimeout={4000}
    >
    <Router>
      <div className="App">
        {!isFullPageLayout && <NavBar toggle={toggle} />}
        <div className="page-body-wrapper">
          {!isFullPageLayout && <SideBar toggle={toggle} isOpen={isOpen} />}
          <Container
            fluid
            className={classNames("main-content", { "is-open": isOpen })}
          >
            <AppRoutes />
          </Container>
        </div>
      </div>
    </Router>
    </ToastProvider>
  );
};

export default App;
