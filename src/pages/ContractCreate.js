import React, { useState } from "react";
import { Breadcrumb, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import demo from "../assets/imgs/demo-ta.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js";

// import "../assets/css/accordion.css";

function ContractCreate() {
  const eventFire = (el, etype) => {
    if (el.fireEvent) {
      el.fireEvent("on" + etype);
    } else {
      var evObj = document.createEvent("Events");
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggleActual = () => {
    setCollapsed(!collapsed);
  };
  const [idx, setIdx] = useState([]);

  return (
    <div className="wrap-ta p-3">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/contract/list" }}>ใบความต้องการ</Breadcrumb.Item>
        <Breadcrumb.Item active>บริษัท เนสท์เล่ (ไทย) จำกัด</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mt-4 position-relative">
        <Col xs={12} style={{ minHeight: "800px" }}>
        <Link to="/contract/condition"><img src={demo} alt="demo contract" style={{maxWidth:'100%',}} /></Link>
        </Col>
        <Col
          xs={12}
          className="footer-bar d-flex justify-content-end align-items-center p-2 position-sticky"
          style={{ bottom: "0" }}
        >
          <Button variant="secondary">Delete</Button>
          <Button variant="success ml-2">Save Draft</Button>
          <Button variant="warning ml-2">Preview</Button>
          <Button variant="primary ml-2">Publish</Button>
        </Col>
      </Row>
    </div>
  );
}

export default ContractCreate;
