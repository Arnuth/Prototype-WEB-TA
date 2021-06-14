import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Row,Col } from "react-bootstrap";

const ContractList = () => {
  return (
    <div className="wrap-ta pt-1 pl-1 pr-1">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>ใบความต้องการ</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mt-1 ml-0 mr-0 position-relative">
        <Col
          xs={12}
          className="wrap-accordion p-3 bg-white"
          style={{ minHeight: "800px" }}
        >
          <h3 className="h3">Contract List</h3>
          <div className="text-center">
              <Link className="btn btn-success ml-2 btn-lg" to="/contract/create/">Create TA</Link>
          </div>

        </Col>
      </Row>
    </div>
  );
};

export default ContractList;
