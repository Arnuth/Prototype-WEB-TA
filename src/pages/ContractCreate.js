import React, { useState } from "react";
import {
  Breadcrumb,
  Row,
  Col,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
// import { FaRegFileImage } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { BiCommentDots } from "react-icons/bi";
import { ImAttachment } from "react-icons/im";
import { Link } from "react-router-dom";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { useToasts } from 'react-toast-notifications'

import TAConditionCompare from '../components/TAConditionCompare'
import TASupplier from "../components/TASupplier";
import iconSupplier from "../assets/imgs/icons/ic-supplier.svg"
import iconApprove from "../assets/imgs/icons/ic-approve.svg"
import { HiOutlineSave } from "react-icons/hi";
import { BiTrashAlt } from "react-icons/bi";

// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/js/src/collapse.js";
import $ from "jquery";


// import "../assets/css/accordion.css";


function ContractCreate() {

  const { addToast } = useToasts()
  //check class active accordion
  const [expanded, setExpanded] = useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    if(expanded === panel) {
      setExpanded('');
    } else {
      setExpanded(panel);
    }
  };
  

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


  
  //sync table height
  $(function () {
    // var rows = $(".collapse.show .interactive tr");
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
            <Card className={expanded === 'panel1' ? "active" : null}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                id="btn-supplier"
                // onClick={() => {
                //   if (idx.includes(0)) setIdx([idx.filter((i) => i !== 0)]);
                //   else setIdx([0]);
                // }}
                // className={idx.includes(0) ? "active" : null}
                onClick={handleChange('panel1')}
                className={expanded === 'panel1' ? "active" : null}
              >
                <h2 className="SubHdIcon">
                  <i className="mr-2 mb-0">
                    <img src={iconSupplier} alt="Supplier" />
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
                  <TASupplier />
                  {/* <Col
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
                  </Col> */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className={expanded === 'panel2' ? "active" : null}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                id="btn-supplier"
                // onClick={() => {
                //   if (idx.includes(1)) setIdx(idx.filter((i) => i !== 1));
                //   else setIdx([1]);
                // }}
                // className={idx.includes(1) ? "active" :  null}
                onClick={handleChange('panel2')}
                className={expanded === 'panel2' ? "active" : null}
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
                  <TAConditionCompare />
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card className={expanded === 'panel3' ? "active" : null}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="2"
                // onClick={() => {
                //   if (idx.includes(2)) setIdx(idx.filter((i) => i !== 2));
                //   else setIdx([2]);
                // }}
                // className={idx.includes(2) ? "active" :  null}
                onClick={handleChange('panel3')}
                className={expanded === 'panel3' ? "active" : null}
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

            <Card className={expanded === 'panel4' ? "active" : null}>
              <Accordion.Toggle
                as={Card.Header}
                eventKey="3"
                // onClick={() => {
                //   if (idx.includes(3)) setIdx(idx.filter((i) => i !== 3));
                //   else setIdx([3]);
                // }}
                // className={idx.includes(3) ? "active" :  null}
                onClick={handleChange('panel4')}
                className={expanded === 'panel4' ? "active" : null}
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
          className="footer-bar ctrl-btn d-flex justify-content-end align-items-center pt-2 pb-2 pl-3 pr-3 position-sticky"
          style={{ bottom: "0" }}
        >
          <Button variant="warning ml-2"><BiTrashAlt className="mr-2 mt-n1" /> ลบใบความต้องการ</Button>
          <Button variant="warning ml-2"><img src={iconApprove} alt="Approve" className="mr-2 mt-n1" /> ส่งอนุมัติ</Button>
          <Button 
           variant="warning ml-2"
           onClick={
              () => {addToast('ทำการบันทึกเรียบร้อยค่ะ', { appearance: 'success', autoDismiss: false, })}
            }
          ><HiOutlineSave className="mr-2 mt-n1" /> บันทึกใบความต้องการ</Button>
          {/* <Button variant="primary ml-2">Publish</Button> */}
        </Col>
      </Row>
    </div>
  );
}

export default ContractCreate;
