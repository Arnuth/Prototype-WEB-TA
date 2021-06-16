import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { withRouter } from "react-router-dom";
import SideBar from "./components/shared/SideBar";
import NavBar from "./components/shared/Navbar";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import AppRoutes from "./AppRoutes";
// import Content from "./components/content/Content";

const App = () => {
  // Moblie first
  const [isOpen, setIsOpen] = useState(true);
  // const [isMobile, setIsMobile] = useState(true);
  const [previousWidth, setPreviousWidth] = useState(-1);

  const updateWidth = useCallback(() => {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = previousWidth <= widthLimit;

    // if (isMobile !== wasMobile) {
    //   setIsOpen(!isMobile);
    // }

    if (isMobile) {
      setIsOpen(false);
    }

    setPreviousWidth(width);
  }, [previousWidth]);

  // const currentURL = window.location.href
  // let navbarComponent = !isFullPageLayout ? <NavBar toggle={toggle} /> : '';
  // let sidebarComponent = !isFullPageLayout ? <SideBar toggle={toggle} isOpen={isOpen} /> : '';
  const pathname = window.location.pathname;
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);
  const onRouteChanged = useCallback(() => {
    console.log("ROUTE CHANGED");
    // const { i18n } = this.props;
    // const body = document.querySelector('body');
    // if(this.props.location.pathname === '/layout/RtlLayout') {
    //   body.classList.add('rtl');
    // }
    // else {
    //   body.classList.remove('rtl')
    // }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = [
      "/login",
      "/register",
      "/forgotpassword",
      "/error-404",
      "error-500",
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
    // console.log("useUpdateWidth Effect");
    // console.log(currentURL)
    onRouteChanged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    window.addEventListener("resize", updateWidth());

    return () => {
      window.removeEventListener("resize", updateWidth());
    };
  }, [updateWidth, onRouteChanged]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="App">
        {!isFullPageLayout && <NavBar toggle={toggle} />}
        <div className="page-body-wrapper">
          {!isFullPageLayout && <SideBar toggle={toggle} isOpen={isOpen} />}
          {/* <Content toggle={toggle} isOpen={isOpen}></Content> */}
          <Container
            fluid
            className={classNames("main-content", { "is-open": isOpen })}
          >
            <AppRoutes />
          </Container>
        </div>
      </div>
    </>
  );
};

export default withRouter(App);

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     // Moblie first
//     this.state = {
//       isOpen: false,
//       isMobile: true
//     };

//     this.previousWidth = -1;
//   }

//   updateWidth() {
//     const width = window.innerWidth;
//     const widthLimit = 576;
//     const isMobile = width <= widthLimit;
//     const wasMobile = this.previousWidth <= widthLimit;

//     if (isMobile !== wasMobile) {
//       this.setState({
//         isOpen: !isMobile
//       });
//     }
//     console.log(this.previousWidth)
//     this.previousWidth = width;
//     console.log(this.previousWidth)
//   }

//   /**
//    * Add event listener
//    */
//   componentDidMount() {
//     this.updateWidth();
//     window.addEventListener("resize", this.updateWidth.bind(this));
//   }

//   /**
//    * Remove event listener
//    */
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.updateWidth.bind(this));
//   }

//   toggle = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   render() {
//     return (
//       <div className="App wrapper">
//         <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
//         <Container
//           fluid
//            className={classNames("main-content", { "is-open": this.state.isOpen })}
//         >
//             <NavBar toggle={this.state.toggle} />
//            <AppRoutes />
//         </Container>
//       </div>
//     );
//   }
// }
// export default App;
