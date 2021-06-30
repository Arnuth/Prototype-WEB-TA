import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  FormControl,
  ProgressBar,
} from "react-bootstrap";
import "../assets/css/ta-supplier.css";
import NumberFormat from "react-number-format";
// import NumberBox from 'devextreme-react/number-box';
import { HiOutlineSave } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { useSnackbar } from 'notistack';

import TASupplierCategory from "./TASupplierCategory";

const TASupplier = () => {
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

  const [supplierCode, setSupplierCode] = useState("");
  const [valueGrowth1, setValueGrowth1] = useState("");
  const [valueGrowth2, setValueGrowth2] = useState("");
  const yearOrder = 1000000;
  const yearSale = 1000000;
  const [valueCalGrowth1, setValueCalGrowth1] = useState(0);
  const [valueCalGrowth2, setValueCalGrowth2] = useState(0);

  const handleSrhSupplier = (event) => {
    setSupplierCode(event.target.value);
  }

  // const handleCalGrowth1 = (event) => {
  //   setValueGrowth1(event.target.value);
  // }
  // const handleCalGrowth2 = (event) => {
  //   setValueGrowth2(event.target.value);
  // }

  const { enqueueSnackbar } = useSnackbar();
  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('ทำการบันทึกเรียบร้อยค่ะ!', { variant });
  };

  useEffect(() => {
    let valuePercent = (
      (parseInt(valueGrowth1) * 100) / yearOrder -
      100
    ).toFixed(2);
    let valuePercent2 = (
      (parseInt(valueGrowth2) * 100) / yearSale -
      100
    ).toFixed(2);
    // setValueCalGrowth1(valuePercent >= 0 ? valuePercent : 0);
    setValueCalGrowth1(valuePercent);
    setValueCalGrowth2(valuePercent2);
  }, [valueGrowth1, valueGrowth2]);

  return (
    <>
      <Row className="z-supplier">
        <Col md={12} xl={12} className="mb-3">
        <Form.Group className="col-12 col-sm-6 col-md-2 pl-0">
          <Form.Label>ปีที่ทำใบความต้องการ</Form.Label>
          <Form.Control as="select" className="form-select">
            <option value="2564">2564</option>
            <option value="2565">2565</option>
            <option value="2566">2566</option>
          </Form.Control>
        </Form.Group>
        </Col>
        <Col md={6} xl>
          <h3 className="topic-line">ข้อมูลคู่ค้า</h3>
          <Form.Group className="mb-3">
            <InputGroup className="mb-0">
              <Form.Label htmlFor="supplier_title_id" className="col-4 p-0">รหัสผู้ขายสินค้า</Form.Label>
              <InputGroup.Append className="col p-0"><Form.Label htmlFor="supplier_title_name">ชื่อผู้ขายสินค้า</Form.Label></InputGroup.Append>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                id="supplier_name"
                aria-describedby="basic-addon3"
                placeholder="รหัสผู้ขายสินค้า"
                value={supplierCode}
                onChange={handleSrhSupplier}
                className="col-4"
              />
              <InputGroup.Append className="col p-0">
                
                <InputGroup.Text id="basic-addon3" className="bg-disabled d-block w-100 text-left">
                บริษัท เอฟแอนด์เอ็น แดรี่ส์(ประเทศไทย) จำกัด
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="managerBuyer">ผู้จัดการจัดซื้อ</Form.Label>
            <Form.Control type="text" id="managerBuyer" value="ศิริวัฒนาภา ปฏิมาประกร" disabled />
          </Form.Group>
        </Col>
        <Col xl={1} className="d-none d-xl-block space"></Col>
        <Col md={6} xl>
          <h3 className="topic-line">ยอดและเป้าหมาย</h3>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="yearOrder1">ยอดสั่งซื้อปี 2563</Form.Label>
              <NumberFormat
                className="form-control"
                id="yearOrder1"
                value={yearOrder}
                thousandSeparator={true}
                suffix={' บ.'}
                disabled
              />{" "}
              {/* prefix={'฿'} */}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label htmlFor="currentOrader1">
                เป้าหมายการสั่งซื้อปี 2564
              </Form.Label>
              <NumberFormat
                className="form-control"
                id="currentOrader1"
                thousandSeparator={true}
                placeholder="เป้ายอดสั่งซื้อสินค้า  บ."
                value={valueGrowth1}
                type={"text"}
                suffix={' บ.'}
                onValueChange={(values) => {
                  setValueGrowth1(values.floatValue);
                }}
              />
              {/* <Form.Control 
                type="text"
                onChange={handleCalGrowth1}
                value={valueGrowth1}
               /> */}
            </Form.Group>

            <Form.Group as={Col} md={3}>
              <Form.Label htmlFor="growth1">Growth</Form.Label>
              {/* <Form.Control type="text" disabled /> */}
              <div className="display-growth">
                <ProgressBar now={valueCalGrowth1} />
                <span>{valueCalGrowth1 !== 'NaN' ? valueCalGrowth1 : 0}%</span>
              </div> 
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="yearSale1">ยอดขายออกปี 2563</Form.Label>
              {/* <Form.Control type="text" value={yearSale} disabled /> */}
              <NumberFormat
                className="form-control"
                id="yearSale1"
                value={yearSale}
                thousandSeparator={true}
                suffix={' บ.'}
                disabled
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label htmlFor="currentSale1">
                เป้าหมายยอดขายออกปี 2564
              </Form.Label>
              {/* <Form.Control 
              type="text" 
              onChange={handleCalGrowth2}
              value={valueGrowth2}
              /> */}
              <NumberFormat
                className="form-control"
                id="currentSale1"
                thousandSeparator={true}
                // onChange={handleCalGrowth2}
                placeholder="เป้ายอดขายสินค้า  บ."
                value={valueGrowth2}
                type={"text"}
                suffix={' บ.'}
                onValueChange={(values) => {
                  setValueGrowth2(values.floatValue);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} md={3}>
              <Form.Label htmlFor="growth2">Growth</Form.Label>
              {/* <Form.Control type="text" disabled /> */}
              <div className="display-growth">
                <ProgressBar now={valueCalGrowth2} />
                <span>{valueCalGrowth2 !== 'NaN' ? valueCalGrowth2 : 0}%</span>
              </div>
            </Form.Group>
          </Form.Row>
        </Col>
      </Row>
      <Row className="z-supplier-tb mt-5">
        <Col xs={12}>
          <TASupplierCategory />
        </Col>
      </Row>
      <Col
        xs={12}
        className="ctrl-btn d-flex justify-content-end align-items-center pt-2 pb-2 pl-0 pr-0 position-sticky"
        style={{ bottom: "0" }}
      >
        <Button
          variant="outline-secondary"
          onClick={() => {
            eventFire(document.getElementById("btn-supplier"), "click");
          }}
        >
          <CgCloseO className="mr-2 mt-n1" />
          ยกเลิก
        </Button>
        <Button variant="warning ml-2" onClick={handleClickVariant('success')}><HiOutlineSave className="mr-2 mt-n1" /> บันทึก</Button>
      </Col>
    </>
  );
};

export default TASupplier;
