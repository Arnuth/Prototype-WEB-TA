import React, { useState } from "react";
import {
  Breadcrumb,
  Row,
  Col,
  Accordion,
  Card,
  Button,
  Table,
} from "react-bootstrap";
import { FaRegFileImage } from "react-icons/fa";
import { FiEdit, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiFileList3Line } from "react-icons/ri";
import { BiCommentDots } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { Link } from "react-router-dom";
import { DropzoneAreaBase } from "material-ui-dropzone";
import classNames from "classnames";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js";
import $ from "jquery";

// import "../assets/css/accordion.css";


function ContractCreate() {

  const [collapsed, setCollapsed] = useState(false);
  const toggleActual = () => {
    setCollapsed(!collapsed);
  };
  const [idx, setIdx] = useState([3]);

  //Dropzone
  const [files, setFiles] = useState([]);

  const handleAdd = (newFiles) => {
    newFiles = newFiles.filter(
      (file) => !files.find((f) => f.data === file.data)
    );
    setFiles([...files, ...newFiles]);
  };

  const handleDelete = (deleted) => {
    setFiles(files.filter((f) => f !== deleted));
  };

  //click call id
  const eventFire = (el, etype) => {
    if (el.fireEvent) {
      el.fireEvent("on" + etype);
    } else {
      var evObj = document.createEvent("Events");
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };
  
  //sync table height
  $(function () {
    var rows = $(".collapse.show .interactive tr");
    $(".collapse.show .sub table tr").each(function (i) {
      $("table.sync-height tr").eq(i).height($(this).height());
      // $("table.sync-height-create tr").eq(i).height($(this).height());
    });
  });

  return (
    <div className="wrap-ta pt-1 pl-1 pr-1">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/contract/list" }}>ใบความต้องการ</Breadcrumb.Item>
        <Breadcrumb.Item active>บริษัท เนสท์เล่ (ไทย) จำกัด</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mt-1 ml-0 mr-0 position-relative">
        <Col
          xs={12}
          className="wrap-accordion p-3 bg-white"
          style={{ minHeight: "800px" }}
        >
          {/* <h1 className="text-center h4">สร้างใบ TA main</h1> */}
          <Accordion defaultActiveKey="0">
            <Card className={idx.includes(0) ? null : "active"}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                id="btn-supplier"
                onClick={() => {
                  if (idx.includes(0)) setIdx(idx.filter((i) => i !== 0));
                  else setIdx([...idx, 0]);
                }}
                className={idx.includes(0) ? null : "active"}
              >
                <h2 className="SubHdIcon">
                  <i className="mr-2 mb-0">
                    <FaRegFileImage size="1.5rem" />
                  </i>
                  <span>
                    <b className="head">Supplier</b>
                    <small className="sub-head">
                      บริษัท เนสท์เล่ (ไทย) จำกัด
                    </small>
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
                        eventFire( document.getElementById("btn-supplier"), "click" );
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
          <Accordion defaultActiveKey="1">
            <Card className={idx.includes(1) ? null : "active"}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                id="btn-supplier"
                onClick={() => {
                  if (idx.includes(1)) setIdx(idx.filter((i) => i !== 1));
                  else setIdx([...idx, 1]);
                }}
                className={idx.includes(1) ? null : "active"}
              >
                <h2 className="SubHdIcon">
                  <i className="mr-2 mb-0">
                    <RiFileList3Line size="1.5rem" />
                  </i>
                  <span>
                    <b className="head">TA Condition</b>
                    <small className="sub-head">ข้อตกลงกับคู่ค้า</small>
                  </span>
                </h2>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="row main-ta mt-4 mb-4 ml-n1 mr-n1">
                    <aside className="sidebar-con toggle-tb col-md-4 col-xl-3 pl-1">
                      <h3 class="h5">เงื่อนไขทางการค้า</h3>
                      <Table bordered hover>
                        <thead>
                          <tr>
                            <th width="50">No.</th>
                            <th>DESCRIPTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            data-toggle="collapse"
                            className="first"
                            aria-expanded="true"
                            data-target=".multi-collapse1"
                            aria-controls="multiCollapseExample1"
                            style={{ backgroundColor: "var(--primary)" }}
                          >
                            <td colSpan="2" width="50">
                              <div className="d-flex justify-content-between text-white">
                                Overall
                                <i>
                                  <FiChevronDown />
                                </i>
                              </div>
                            </td>
                          </tr>

                          <tr
                            class="collapse show multi-collapse1"
                            id="multiCollapseExample1"
                          >
                            <td colSpan="3" className="p-0">
                              <div
                                className="sub"
                                style={{
                                  marginLeft: "-1px",
                                  marginRight: "-1px",
                                }}
                              >
                                <Table striped bordered hover>
                                  <tbody className="interactive">
                                    <tr>
                                      <td width="50">1</td>
                                      <td width="30%">Name 1 <br />break line</td>
                                      <td>Email 1</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Name 2</td>
                                      <td>Email 2 <br />breack line<br />break line</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </td>
                          </tr>
                          <tr
                            data-toggle="collapse"
                            // className="collapsed"
                            // aria-expanded="false"
                            className="first"
                            aria-expanded="true"
                            data-target=".multi-collapse2"
                            aria-controls="multiCollapseExample2"
                            style={{ backgroundColor: "var(--primary)" }}
                          >
                            <td colSpan="2">
                              <div className="d-flex justify-content-between text-white">
                                1) ส่วนลดการสั่งซื้อ (Rebates)
                                <i>
                                  <FiChevronDown />
                                </i>
                              </div>
                            </td>
                          </tr>
                          <tr
                            class="collapse show multi-collapse2"
                            id="multiCollapseExample2"
                          >
                            <td colSpan="3" className="p-0">
                              <div
                                className="sub"
                                style={{
                                  marginLeft: "-1px",
                                  marginRight: "-1px",
                                }}
                              >
                                <Table striped bordered hover>
                                  <tbody className="interactive">
                                    <tr>
                                      <td width="50">1</td>
                                      <td width="30%">Name 1</td>
                                      <td>Email 1<br />break line<br />break line<br />break line</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Name 2<br />break line</td>
                                      <td>Email 2</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </aside>
                    <div className="compair-con col-md-8 col-xl p-0">
                      <div className="d-flex flex-nowrap">
                        <div
                          className={classNames("oldYears", {
                            open: !collapsed,
                          })}
                        >
                          <h3 className="h5">Actual 63/64</h3>
                          <button className="sw-actual" onClick={toggleActual}>{collapsed ? <FiChevronRight /> : <FiChevronLeft />}</button>
                          <div className="row m-0 toggle-tb">
                            {/* 2563 */}
                            <div className="col-6 pl-0 pr-1">
                              <Table bordered hover>
                                <thead>
                                  <tr>
                                    <th width="100">Amount</th>
                                    <th className="main">Total Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    data-toggle="collapse"
                                    className="first"
                                    aria-expanded="true"
                                    data-target=".multi-collapse1"
                                    aria-controls="multiCollapseExample1"
                                    style={{
                                      backgroundColor: "var(--primary)",
                                      color: "#fff",
                                    }}
                                  >
                                    <td>x.xx%</td>
                                    <td className="main">xx,xxx.xx บาท</td>
                                  </tr>

                                  <tr
                                    class="collapse show multi-collapse1"
                                    id="multiCollapseExample1"
                                  >
                                    <td colSpan="2" className="main p-0">
                                      <div
                                        className="sub"
                                        style={{
                                          marginLeft: "-1px",
                                          marginRight: "-1px",
                                        }}
                                      >
                                        <Table striped bordered hover className="sync-height">
                                          <tbody>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-toggle="collapse"
                                    // className="collapsed"
                                    className="first"
                                    aria-expanded="true"
                                    data-target=".multi-collapse2"
                                    aria-controls="multiCollapseExample2"
                                    style={{
                                      backgroundColor: "var(--primary)",
                                      color: "#fff",
                                    }}
                                  >
                                    <td>x.xx%</td>
                                    <td className="main">xx,xxx.xx บาท</td>
                                  </tr>
                                  <tr
                                    class="collapse show multi-collapse2"
                                    id="multiCollapseExample2"
                                  >
                                    <td colSpan="2" className="main p-0">
                                      <div
                                        className="sub"
                                        style={{
                                          marginLeft: "-1px",
                                          marginRight: "-1px",
                                        }}
                                      >
                                        <Table striped bordered hover className="sync-height">

                                          <tbody>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>

                            {/* 2564 */}
                            <div className="col-6 pr-0 pl-1">
                              <Table bordered hover>
                                <thead>
                                  <tr>
                                    <th>Amount</th>
                                    <th className="main">Total Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    data-toggle="collapse"
                                    className="first"
                                    aria-expanded="true"
                                    data-target=".multi-collapse1"
                                    aria-controls="multiCollapseExample1"
                                    style={{
                                      backgroundColor: "var(--primary)",
                                      color: "#fff",
                                    }}
                                  >
                                    <td width="100">1.29%</td>
                                    <td className="main">56,506.13 บาท</td>
                                  </tr>

                                  <tr
                                    class="collapse show multi-collapse1"
                                    id="multiCollapseExample1"
                                  >
                                    <td colSpan="2" className="main p-0">
                                      <div
                                        className="sub"
                                        style={{
                                          marginLeft: "-1px",
                                          marginRight: "-1px",
                                        }}
                                      >
                                        <Table striped bordered hover className="sync-height">
                                          <tbody>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr
                                    data-toggle="collapse"
                                    // className="collapsed"
                                    className="first"
                                    aria-expanded="true"
                                    data-target=".multi-collapse2"
                                    aria-controls="multiCollapseExample2"
                                    style={{
                                      backgroundColor: "var(--primary)",
                                      color: "#fff",
                                    }}
                                  >
                                    <td width="100">2.99%</td>
                                    <td className="main">19,506.91 บาท</td>
                                  </tr>
                                  <tr
                                    class="collapse show multi-collapse2"
                                    id="multiCollapseExample2"
                                  >
                                    <td colSpan="2" className="main p-0">
                                      <div
                                        className="sub"
                                        style={{
                                          marginLeft: "-1px",
                                          marginRight: "-1px",
                                        }}
                                      >
                                        <Table striped bordered hover className="sync-height">
                                          <tbody>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                            <tr>
                                              <td width="100">x.xx%</td>
                                              <td className="main">xx,xxx.xx บาท</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>

                        <div className="col pr-1">
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

                            <Table bordered hover>
                              <thead>
                                <tr>
                                  <th width="100">AMOUNT</th>
                                  <th colSpan="2">TOTAL AMOUNT</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  data-toggle="collapse"
                                  className="first"
                                  aria-expanded="true"
                                  data-target=".multi-collapse1"
                                  aria-controls="multiCollapseExample1"
                                  style={{
                                    backgroundColor: "var(--primary)",
                                    color: "#fff",
                                  }}
                                >
                                  <td>x.xx%</td>
                                  <td>xx,xxx.xx บาท</td>
                                  <td width="110">&nbsp;</td>
                                </tr>

                                <tr
                                  class="collapse show multi-collapse1"
                                  id="multiCollapseExample1"
                                >
                                  <td colSpan="3" className="p-0">
                                    <div
                                      className="sub"
                                      style={{
                                        marginLeft: "-1px",
                                        marginRight: "-1px",
                                      }}
                                    >
                                      <Table striped bordered hover className="sync-height">
                                        <tbody>
                                          <tr>
                                            <td width="100">x.xx%</td>
                                            <td>xx,xxx.xx บาท</td>
                                            <td width="110">
                                              <Link to="/contract/condition">
                                                <FiEdit /> เพิ่มเงื่อนไข
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>x.xx%</td>
                                            <td>xx,xxx.xx บาท</td>
                                            <td>
                                              <Link to="/contract/condition">
                                                <FiEdit /> เพิ่มเงื่อนไข
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </td>
                                </tr>
                                <tr
                                  data-toggle="collapse"
                                  // className="collapsed"
                                  className="first"
                                  aria-expanded="true"
                                  data-target=".multi-collapse2"
                                  aria-controls="multiCollapseExample2"
                                  style={{
                                    backgroundColor: "var(--primary)",
                                    color: "#fff",
                                  }}
                                >
                                  <td>x.xx%</td>
                                  <td>xx,xxx.xx บาท</td>
                                  <td width="110">&nbsp;</td>
                                </tr>
                                <tr
                                  class="collapse show multi-collapse2"
                                  id="multiCollapseExample2"
                                >
                                  <td colSpan="3" className="p-0">
                                    <div
                                      className="sub"
                                      style={{
                                        marginLeft: "-1px",
                                        marginRight: "-1px",
                                      }}
                                    >
                                      <Table striped bordered hover className="sync-height">
                                        <tbody>
                                          <tr>
                                            <td width="100">x.xx%</td>
                                            <td>xx,xxx.xx บาท</td>
                                            <td width="110">
                                              <Link to="/contract/condition">
                                                <FiEdit /> เพิ่มเงื่อนไข
                                              </Link>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>x.xx%</td>
                                            <td>xx,xxx.xx บาท</td>
                                            <td>
                                              <Link to="/contract/condition">
                                                <FiEdit /> เพิ่มเงื่อนไข
                                              </Link>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion defaultActiveKey="2">
            <Card className={idx.includes(2) ? null : "active"}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                onClick={() => {
                  if (idx.includes(2)) setIdx(idx.filter((i) => i !== 2));
                  else setIdx([...idx, 2]);
                }}
                className={idx.includes(2) ? null : "active"}
              >
                <h2 className="SubHdIcon">
                  <i className="mr-2 mb-0">
                    <ImAttachment size="1.5rem" />
                  </i>
                  <span>
                    <b className="head">Attachment</b>
                    <small className="sub-head">ยังไม่มีไฟล์แนบ</small>
                  </span>
                </h2>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <DropzoneAreaBase
                    fileObjects={files}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <Accordion defaultActiveKey="1">
            <Card className={idx.includes(3) ? null : "active"}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="3"
                onClick={() => {
                  if (idx.includes(3)) setIdx(idx.filter((i) => i !== 3));
                  else setIdx([...idx, 3]);
                }}
                className={idx.includes(3) ? null : "active"}
              >
                <h2 className="SubHdIcon">
                  <i className="mr-2 mb-0">
                    <BiCommentDots size="1.5rem" />
                  </i>
                  <span>
                    <b className="head">Comment</b>
                    <small className="sub-head">ความคิดเห็นเพิ่มเติม</small>
                  </span>
                </h2>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <h3 className="text-center h6">ยังไม่มีคอมเมนต์!</h3>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
        <Col
          xs={12}
          className="footer-bar d-flex justify-content-end align-items-center pt-2 pb-2 pl-3 pr-3 position-sticky"
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
