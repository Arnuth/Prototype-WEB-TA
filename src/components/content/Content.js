import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

const Content = ({toggle}) => {
  return (
    <Container
      fluid
      className={classNames("content", { "is-open": isOpen })}
    >
      <NavBar toggle={toggle} />
      <div className="wrap-main" style={{ minHeight: "150vh" }}>
        <div className="p-3">contents</div>
      </div>
    </Container>
  );
};

export default Content;
