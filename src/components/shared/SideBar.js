import React, { useState } from "react";
import { 
  FaHome,
  FaBriefcase,
  FaCopy,
  FaCaretDown, 
  FaCaretUp,
  FaImage
 } from "react-icons/fa";
import {CgClose} from "react-icons/cg";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";
// import SubMenu from "./SubMenu";
import { Nav, Button, Accordion } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const SideBar = ({ toggle, isOpen }) => {


  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  console.log(isOpen)

  //check location addClass
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  
  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        <Button
          variant="link"
          onClick={toggle}
          style={{ color: "#fff" }}
        >
          <CgClose />
        </Button>
      </div>
      <button className="sw-sidebar" onClick={toggle}>{isOpen ? <FiChevronLeft /> : <FiChevronRight />}</button>
      <Nav className="flex-column pt-2">
        
        {/* <p className="ml-3">Menu</p> */}

        
        <Nav.Item>
          <NavLink className="nav-link" to="/" exact>
            <FaHome className="mr-2" />
            <span>Dashboard</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className={splitLocation[1] === "home" ? "active nav-link" : "nav-link"} to="/contract/list">
            <FaImage className="mr-2" />
            <span>ใบความต้องการ</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/2/title/ข้อมูลสาขา">
            <FaImage className="mr-2" />
            <span>ข้อมูลสาขา</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/3/title/Test Run">
            <FaImage className="mr-2" />
            <span>Test Run</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/4/title/Report">
            <FaImage className="mr-2" />
            <span>Report</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/5/title/Settlement">
            <FaImage className="mr-2" />
            <span>Settlement</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/6/title/User Management">
            <FaImage className="mr-2" />
            <span>User Management</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/7/title/Owner/Parter">
            <FaImage className="mr-2" />
            <span>Owner/Parter</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/8/title/ค่ากระจายสินค้า">
            <FaImage className="mr-2" />
            <span>ค่ากระจายสินค้า</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/9/title/GL Account">
            <FaImage className="mr-2" />
            <span>G/L Account</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item className={classNames({ "open": !collapsed })}>
          <Accordion>
            <Accordion.Toggle
              className="nav-link"
              eventKey="0"
              onClick={toggleNavbar}
            >
              <FaCopy className="mr-2" />
              Pages
              {collapsed ? <FaCaretDown className="float-right" /> : <FaCaretUp className="float-right" />}
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <nav className="nav flex-column">
                <Link to="/contract/create" className={splitLocation[1] === "contract" && splitLocation[2] === "create" ? "active nav-link" : "nav-link"}>Create TA</Link>
                <Link to="/contract/condition" className={splitLocation[1] === "contract" && splitLocation[2] === "condition" ? "active nav-link" : "nav-link"}>Create Condition</Link>
                <Link to="/contract/list" className={splitLocation[1] === "contract" && splitLocation[2] === "list" ? "active nav-link" : "nav-link"}>Link3</Link>
              </nav>
            </Accordion.Collapse>
          </Accordion>
        </Nav.Item>

    
        <Nav.Item>
          <NavLink className="nav-link" to="/login">
            <FaBriefcase className="mr-2" />
            Login
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" to="/forgotpassword">
            <FaImage className="mr-2" />
            Forgot Password
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideBar;
