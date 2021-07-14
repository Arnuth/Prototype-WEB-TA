import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FiEdit, FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import classNames from "classnames";

const TAConditionCompare = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleActual = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div className="row main-ta mt-4 mb-4 ml-n1 mr-n1">
        <aside className="sidebar-con toggle-tb col-md-4 col-xl-3 pl-1">
          <h3 className="h5">เงื่อนไขทางการค้า</h3>
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
                className="collapse show multi-collapse1"
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
                          <td width="30%">
                            Name 1 <br />
                            break line
                          </td>
                          <td>Email 1</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Name 2</td>
                          <td>
                            Email 2 <br />
                            breack line
                            <br />
                            break line
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
                className="collapse show multi-collapse2"
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
                          <td>
                            Email 1<br />
                            break line
                            <br />
                            break line
                            <br />
                            break line
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>
                            Name 2<br />
                            break line
                          </td>
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
              <button className="sw-actual" onClick={toggleActual}>
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
              </button>
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
                        className="collapse show multi-collapse1"
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
                            <Table
                              striped
                              bordered
                              hover
                              className="sync-height"
                            >
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
                        className="collapse show multi-collapse2"
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
                            <Table
                              striped
                              bordered
                              hover
                              className="sync-height"
                            >
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
                        className="collapse show multi-collapse1"
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
                            <Table
                              striped
                              bordered
                              hover
                              className="sync-height"
                            >
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
                        className="collapse show multi-collapse2"
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
                            <Table
                              striped
                              bordered
                              hover
                              className="sync-height"
                            >
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
              <h3 className="h5">Plan 2565</h3>
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
                      className="collapse show multi-collapse1"
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
                                  <Link to="/contract/uncondition">
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
                      className="collapse show multi-collapse2"
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
                                  <Link to="/contract/uncondition">
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
    </>
  );
};

export default TAConditionCompare;
