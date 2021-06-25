import React, { useState } from "react";
import { Breadcrumb, Row, Col, Accordion, Card, Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FiEdit, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import classNames from "classnames";
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
        <Col xs={12} style={{ height: "800px" }}>
          <h1 className="text-center">สร้างใบ TA main</h1>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle 
                as={Card.Header} 
                eventKey="0" 
                id="btn-supplier" 
                onClick={() => {
                  if (idx.includes(0)) setIdx(idx.filter(i => i !== 0));
                  else setIdx([...idx, 0]);
                }}
                className={idx.includes(0) ? null : ('active')}
                >
                <h2 className="h5">
                  Supplier 
                  {/* {idx.includes(index) ? (
                    <i className="mdi mdi-menu-down"></i>
                  ) : (
                    <i className="mdi mdi-menu-up"></i>
                  )} */}
                  <span className="d-block">
                    บริษัท เอฟแอนด์เอ็น แดรี่ส์(ประเทศไทย) จำกัด
                  </span>
                </h2>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Hello! I'm the body
                  <Col
                    xs={12}
                    className="d-flex justify-content-end align-items-center p-2 position-sticky"
                    style={{ bottom: "0" }}
                  >
                    <Button
                      variant="secondary"
                      onClick={() => {
                        eventFire(
                          document.getElementById("btn-supplier"),
                          "click"
                        );
                      }}
                    >
                      Cancel
                    </Button>
                    <Button variant="success ml-2">Save</Button>
                  </Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <div className="row main-ta mt-4 mb-4">
            <aside className="sidebar-con toggle-tb col-md-4">
              <h3 class="h5">เงื่อนไขทางการค้า</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    data-toggle="collapse"
                    data-target=".multi-collapse1"
                    aria-controls="multiCollapseExample1"
                  >
                    <td>1</td>
                    <td>TEST 123</td>
                    <td>test123@test.com</td>
                  </tr>

                  <tr
                    class="collapse multi-collapse1"
                    id="multiCollapseExample1"
                  >
                    <td>Child col 1</td>
                    <td>Child col 2</td>
                    <td>Child col 3</td>
                  </tr>
                  <tr
                    data-toggle="collapse"
                    data-target=".multi-collapse2"
                    aria-controls="multiCollapseExample2"
                  >
                    <td>2</td>
                    <td>TEST 456</td>
                    <td>test456@test.com</td>
                  </tr>
                  <tr
                    class="collapse multi-collapse2"
                    id="multiCollapseExample2"
                  >
                    <td>Child col 1</td>
                    <td>Child col 2</td>
                    <td>Child col 3</td>
                  </tr>
                </tbody>
              </Table>

            </aside>
            <div className="col-md-8 p-0">
              <div className="d-flex flex-nowrap">
                <div className={classNames("oldYears", { open: !collapsed })}>
                  <h3 className="h5">Actual 63/64</h3>
                  <button className="sw-actual" onClick={toggleActual}>{collapsed ? <FiChevronRight /> : <FiChevronLeft />}</button>
                  <div className="row m-0 toggle-tb">
                    {/* 2563 */}
                    <div className="col-6 pl-0 pr-1">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th className="main">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse1"
                            aria-controls="multiCollapseExample1"
                          >
                            <td>TEST 123</td>
                            <td className="main">test123</td>
                          </tr>

                          <tr
                            class="collapse multi-collapse1"
                            id="multiCollapseExample1"
                          >
                            <td>Child col 2</td>
                            <td className="main">Child col 3</td>
                          </tr>
                          <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse2"
                            aria-controls="multiCollapseExample2"
                          >
                            <td>TEST 456</td>
                            <td className="main">test456</td>
                          </tr>
                          <tr
                            class="collapse multi-collapse2"
                            id="multiCollapseExample2"
                          >
                            <td>Child col 2</td>
                            <td className="main">Child col 3</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    {/* 2564 */}
                    <div className="col-6 pr-0 pl-1">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th className="main">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse1"
                            aria-controls="multiCollapseExample1"
                          >
                            <td>TEST 123</td>
                            <td className="main">test123</td>
                          </tr>

                          <tr
                            class="collapse multi-collapse1"
                            id="multiCollapseExample1"
                          >
                            <td>Child col 2</td>
                            <td className="main">Child col 3</td>
                          </tr>
                          <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse2"
                            aria-controls="multiCollapseExample2"
                          >
                            <td>TEST 456</td>
                            <td className="main">test456</td>
                          </tr>
                          <tr
                            class="collapse multi-collapse2"
                            id="multiCollapseExample2"
                          >
                            <td>Child col 2</td>
                            <td className="main">Child col 3</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                  </div>
                </div>
                <div className="col">
                  <h3 class="h5">Plan 2565</h3>
                  <div
                    className="toggle-tb"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* Add Content */}
                    
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          data-toggle="collapse"
                          data-target=".multi-collapse1"
                          aria-controls="multiCollapseExample1"
                        >
                          <td>1</td>
                          <td>TEST 123</td>
                          <td>
                            <Link to="/contract/condition">
                              <FiEdit /> เพิ่มเงื่อนไข
                            </Link>
                          </td>
                        </tr>

                        <tr
                          class="collapse multi-collapse1"
                          id="multiCollapseExample1"
                        >
                          <td>Child col 1</td>
                          <td>Child col 2</td>
                          <td>Child col 3</td>
                        </tr>
                        <tr
                          data-toggle="collapse"
                          data-target=".multi-collapse2"
                          aria-controls="multiCollapseExample2"
                        >
                          <td>2</td>
                          <td>TEST 456</td>
                          <td>
                            <Link to="/contract/condition">
                              <FiEdit /> เพิ่มเงื่อนไข
                            </Link>
                          </td>
                        </tr>
                        <tr
                          class="collapse multi-collapse2"
                          id="multiCollapseExample2"
                        >
                          <td>Child col 1</td>
                          <td>Child col 2</td>
                          <td>Child col 3</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Accordion defaultActiveKey="1">
            <Card>
              <Accordion.Toggle 
                as={Card.Header} 
                eventKey="1"
                onClick={() => {
                  if (idx.includes(1)) setIdx(idx.filter(i => i !== 1));
                  else setIdx([...idx, 1]);
                }}
                className={idx.includes(1) ? null : ('active')}
              >
                <h2 className="h5">
                  <b>Attachments</b> <span>ข้อตกลงอื่น ๆ ตามเอกสารแนบ</span>
                </h2>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <FontAwesomeIcon icon={faCloudUploadAlt} /> Drop files to
                  attach, or browse
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
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
