import React from "react";
import { Card, Button, Nav } from "react-bootstrap";
import imgAvatar from "../assets/imgs/faces/face2.jpg";

const Dashboard = () => {
  return (
    <div className="wrap-main p-1">
      <div className="p-2 bg-white" style={{ minHeight: "calc(100vh - 70px)" }}>
        <h3 className="h3">Dashboard</h3>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Member</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Todos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body className="text-center">
            <img className="img-xl rounded-circle mb-2" src={imgAvatar} alt="Profile" />
            <Card.Title>Welcome Patricia</Card.Title>
            <Card.Text>
              Department Manager
            </Card.Text>
            <Button variant="primary">Profile</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
