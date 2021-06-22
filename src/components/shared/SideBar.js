import React from "react";
import { 
  FaHome,
  FaBriefcase,
  FaLock,
 } from "react-icons/fa";
import {CgClose} from "react-icons/cg";
import {BsImage} from "react-icons/bs";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";

// import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

const SideBar = ({ toggle, isOpen }) => {
  // const [collapsed, setCollapsed] = useState(true);
  // const toggleNavbar = () => {
  //   setCollapsed(!collapsed);
  // };
  // console.log(isOpen)

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
      <Nav className="flex-column pt-1">
        
        <Nav.Item>
          <NavLink className="nav-link" to="/" exact>
            <FaHome className="mr-2" />
            <span>Dashboard</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className={splitLocation[1] === "contract" ? "active nav-link" : "nav-link"} to="/contract/list">
            <BsImage className="mr-3" />
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
          <NavLink className="nav-link" to="/page/2/title/ข้อมูลสาขา">
            <BsImage className="mr-3" />
            <span>ข้อมูลสาขา</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/3/title/Test Run">
            <BsImage className="mr-3" />
            <span>Test Run</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/4/title/Report">
            <BsImage className="mr-3" />
            <span>Report</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/5/title/Settlement">
            <BsImage className="mr-3" />
            <span>Settlement</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/6/title/User Management">
            <BsImage className="mr-3" />
            <span>User Management</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/7/title/Owner/Parter">
            <BsImage className="mr-3" />
            <span>Owner/Parter</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/8/title/ค่ากระจายสินค้า">
            <BsImage className="mr-3" />
            <span>ค่ากระจายสินค้า</span>
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" to="/page/9/title/GL Account">
            <BsImage className="mr-3" />
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
            <FaBriefcase className="mr-3" />
            <span>Login</span>
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <NavLink className="nav-link" to="/forgotpassword">
            <FaLock className="mr-3" />
            <span>Forgot Password</span>
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default SideBar;
