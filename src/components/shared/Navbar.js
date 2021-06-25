import React from "react";
import {
  FaBars,
  FaBell,
  FaUserClock,
  FaUserCog,
  FaUserEdit,
} from "react-icons/fa";
import { CgHello } from "react-icons/cg";
import { Navbar, Dropdown, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import imgAvatar from "../../assets/imgs/faces/face2.jpg";

const NavBar = ({ toggle }) => {
  const history = useHistory();

  const logout = () => {
    history.replace("/");
  };

  return (
    <Navbar
      bg="light"
      className="header navbar shadow-sm p-2 pl-3 bg-white"
      expand
    >
      <div className="mr-auto d-flex flex-nowrap align-items-center">
        <Button
          variant="outline-dark"
          className="btn-bars mr-2"
          onClick={toggle}
        >
          <FaBars />
        </Button>
        <Link to="/">
          <h1 className="header-title h6 mb-0">
            <img src={logo} alt="logo" className="mr-2" height="44" />
            <span className="hidden" hidden>
              Trade Agreement
            </span>
          </h1>
        </Link>
      </div>

      <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="navbar-nav navbar-nav-right ml-auto">
          <li className="nav-item  nav-profile border-0">
            <Link to="/home" className="nav-link p-0" title="Support">
              <CgHello size="1.2rem" color="#E3E3E3" />
            </Link>
          </li>
          <li className="nav-item  nav-profile border-0 ml-3">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator p-2 toggle-arrow-hide bg-transparent">
                <FaBell size="1.2rem" color="#E3E3E3" title="Notifications" />
                <span className="count bg-red">4</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="navbar-dropdown navbar-dropdown-right preview-list">
                <Dropdown.Item
                  className="dropdown-item py-3 d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <p className="mb-0 font-weight-medium float-left">
                    You have 4 new notifications{" "}
                  </p>
                  <span className="badge badge-pill badge-primary float-right">
                    View all
                  </span>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Application Error
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      Just now{" "}
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-settings m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      Settings
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      Private message{" "}
                    </p>
                  </div>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content py-2">
                    <h6 className="preview-subject font-weight-normal text-dark mb-1">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text mb-0">
                      {" "}
                      2 days ago{" "}
                    </p>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item user-dropdown nav-profile ml-3 border-0">
            <Dropdown>
              <Dropdown.Toggle className="nav-link count-indicator bg-transparent d-flex align-items-center">
                <img
                  className="img-xs rounded-circle"
                  src={imgAvatar}
                  alt="Profile"
                />
                <div className="u-display d-flex flex-column ml-2 text-left">
                  <span>Patricia</span>
                  <small>Department Manager</small>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown navbar-dropdown-right pb-3">
                <div className="p-0 preview-item d-flex align-items-center border-bottom">
                  <div className="d-flex">
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <Link to="/">
                        <FaUserClock />
                      </Link>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                      <Link to="/">
                        <FaUserCog />
                      </Link>
                    </div>
                    <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                      <Link to="/">
                        <FaUserEdit />
                      </Link>
                    </div>
                  </div>
                </div>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0 mt-2"
                  onClick={(evt) => evt.preventDefault()}
                >
                  Manage Accounts
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-item preview-item d-flex align-items-center border-0"
                  onClick={logout}
                >
                  Sign Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
