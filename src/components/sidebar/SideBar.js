import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHouseDamage,
//   faBriefcase,
//   faPaperPlane,
//   faFileContract,
//   faImage,
//   faCopy,
//   faTimes,
//   faCaretDown, 
//   faCaretUp
// } from "@fortawesome/free-solid-svg-icons";
import { 
  FaHome,
  FaBriefcase,
  FaPaperPlane,
  FaFileContract,
  FaLock,
  FaCopy,
  FaCaretDown, 
  FaCaretUp,
  FaImage
 } from "react-icons/fa";
 import {CgClose} from "react-icons/cg";
// import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames";
// import Logo from "../../assets/imgs/logo-new.png";

const SideBar = ({ toggle, isOpen }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  console.log(isOpen)
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
        {/* <h3>
          <img src={Logo} alt="logo" />
        </h3> */}
      </div>
      <button className="sw-sidebar" onClick={toggle} />
      <Nav className="flex-column pt-1">
        
        <Nav.Item>
          <NavLink className="nav-link" to="/" exact>
            <FaHome className="mr-2" />
            Dashboard
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/contract/list">
            <FaImage className="mr-2" />
            <span>ใบความต้องการ</span>
          </NavLink>
        </Nav.Item>
        {/* <Nav.Item>
          <NavLink className="nav-link" to="/contract/condition">
            <FaFileContract className="mr-2" />
            <span>Create Condition</span>
          </NavLink>
        </Nav.Item> */}
        <Nav.Item>
          <NavLink className="nav-link" to="/page2">
            <FaImage className="mr-2" />
            <span>ข้อมูลสาขา</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page3">
            <FaImage className="mr-2" />
            <span>Test Run</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page4">
            <FaImage className="mr-2" />
            <span>Report</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page5">
            <FaImage className="mr-2" />
            <span>Settlement</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page6">
            <FaImage className="mr-2" />
            <span>User Management</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page7">
            <FaImage className="mr-2" />
            <span>Owner/Parter</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page8">
            <FaImage className="mr-2" />
            <span>ค่ากระจายสินค้า</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page9">
            <FaImage className="mr-2" />
            <span>G/L Account</span>
          </NavLink>
        </Nav.Item>

        {/* <Nav.Item className={classNames({ "open": !collapsed })}>
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
                <Link to="/contract/create" className="nav-link">Create TA</Link>
                <Link to="/contract/condition" className="nav-link">Create Condition</Link>
                <Link to="/page3" className="nav-link">Link3</Link>
              </nav>
            </Accordion.Collapse>
          </Accordion>
        </Nav.Item> */}
        <Nav.Item className="border-top border-secondary mt-2 pt-2">
          <NavLink className="nav-link" to="/login">
            <FaBriefcase className="mr-2" />
            <span>Login</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" to="/forgotpassword">
            <FaLock className="mr-2" />
            <span>Forgot Password</span>
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideBar;
