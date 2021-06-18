import React,{ useState, useEffect } from "react";
import { Row, Col, Button, Form, InputGroup, FormControl, Table, ProgressBar } from "react-bootstrap";
import "../assets/css/ta-supplier.css";
import NumberFormat from 'react-number-format';
// import NumberBox from 'devextreme-react/number-box';

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

  const [valueGrowth1, setValueGrowth1] = useState(null);
  const [valueGrowth2, setValueGrowth2] = useState(null);
  const yearOrder = 1000000
  const yearSale = 1000000
  const [valueCalGrowth1, setValueCalGrowth1] = useState(0);
  const [valueCalGrowth2, setValueCalGrowth2] = useState(0);

  // const handleCalGrowth1 = (event) => {
  //   setValueGrowth1(event.target.value);
  // }
  // const handleCalGrowth2 = (event) => {
  //   setValueGrowth2(event.target.value);
  // }
  
  useEffect(() => {
    let valuePercent = ( ((parseInt(valueGrowth1)*100)/yearOrder)  - 100 ).toFixed(2)
    let valuePercent2 = ( ((parseInt(valueGrowth2)*100)/yearSale)  - 100 ).toFixed(2)
    setValueCalGrowth1(valuePercent >= 0 ? valuePercent : 0);
    setValueCalGrowth2(valuePercent2 >= 0 ? valuePercent2 : 0);
  }, [valueGrowth1, valueGrowth2]);

  return (
    <>
      <Row>
        <Col md={6} xl>
          <h3 className="topic-line">ข้อมูลคู่ค้า</h3>
          <Form.Group className="mb-3" controlId="supplier">
            <Form.Label htmlFor="basic-url">ผู้ขายสินค้า</Form.Label>
            <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3" className="bg-white">
              รหัสผู้ขายสินค้า
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="basic-url" aria-describedby="basic-addon3" value="00064120021" disabled  />
          </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="managerBuyer">
            <Form.Label htmlFor="managerBuyer">ผู้จัดการจัดซื้อ</Form.Label>
            <Form.Control type="text" value="Patricia Good" disabled  />
          </Form.Group>

        </Col>
        <Col xl={1} className="d-none d-xl-block space"></Col>
        <Col md={6} xl>
          <h3 className="topic-line">ยอดและเป้าหมาย</h3>
          <Form.Row>
            <Form.Group as={Col} controlId="yearOrder1">
              <Form.Label htmlFor="yearOrder1">ยอดสั่งซื้อปี 2562</Form.Label>
              {/* <Form.Control type="text" value={yearOrder} disabled  /> */}
              <NumberFormat className="form-control" value={yearOrder} thousandSeparator={true} disabled /> {/* prefix={'฿'} */}
            </Form.Group>

            <Form.Group as={Col} controlId="currentOrader1">
              <Form.Label htmlFor="currentOrader1">เป้าหมายการสั่งซื้อปี 2563</Form.Label>
              <NumberFormat 
              className="form-control"
              thousandSeparator={true}
              value={valueGrowth1}
              type={'text'}
              onValueChange={values => {
                setValueGrowth1(values.floatValue);
              }} />
              {/* <Form.Control 
                type="text"
                onChange={handleCalGrowth1}
                value={valueGrowth1}
               /> */}
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="growth1">
              <Form.Label htmlFor="growth1">Growth</Form.Label>
              {/* <Form.Control type="text" disabled /> */}
              <div className="display-growth">
                <ProgressBar now={valueCalGrowth1} />
                <span>{valueCalGrowth1}%</span>
              </div>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="yearSale1">
              <Form.Label htmlFor="yearSale1">ยอดขายออกปี 2562</Form.Label>
              {/* <Form.Control type="text" value={yearSale} disabled /> */}
              <NumberFormat className="form-control" value={yearSale} thousandSeparator={true} disabled />
            </Form.Group>

            <Form.Group as={Col} controlId="currentSale1">
              <Form.Label htmlFor="currentSale1">เป้าหมายยอดขายออกปี 2563</Form.Label>
              {/* <Form.Control 
              type="text" 
              onChange={handleCalGrowth2}
              value={valueGrowth2}
              /> */}
              <NumberFormat 
              className="form-control"
              thousandSeparator={true}
              // onChange={handleCalGrowth2}
              value={valueGrowth2}
              type={'text'}
              onValueChange={values => {
                setValueGrowth2(values.floatValue);
              }}
              />
            </Form.Group>

            <Form.Group as={Col} md={2} controlId="growth2">
              <Form.Label htmlFor="growth2">Growth</Form.Label>
              {/* <Form.Control type="text" disabled /> */}
              <div className="display-growth">
                <ProgressBar now={valueCalGrowth2} />
                <span>{valueCalGrowth2}%</span>
              </div>
            </Form.Group>
          </Form.Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12}>
          <h3 className="topic-line">หมวดหมู่สินค้า (Category)</h3>
          <Table responsive>
            <thead>
              <tr className="th-light">
                <th width="50">#</th>
                <th>Category</th>
                <th width="20%" className="text-right">Current %GP</th>
                <th width="20%" className="text-right">Expected %GP</th>
                {/* <th>Tools</th> */}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 14 }).map((_, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>Category Name {index+1}</td>
                <td className="text-right">{(index+1*1.09).toFixed(2)}%</td>
                <td className="text-right">{(index+1*1.09).toFixed(2)}%</td>
              </tr>
              ))}
              
            </tbody>
          </Table>
        </Col>
      </Row>
      <Col
        xs={12}
        className="d-flex justify-content-end align-items-center pt-2 pb-2 pl-0 pr-0 position-sticky"
        style={{ bottom: "0" }}
      >
        <Button
          variant="secondary"
          onClick={() => {
            eventFire(document.getElementById("btn-supplier"), "click");
          }}
        >
          Cancel
        </Button>
        <Button variant="success ml-2">Save</Button>
      </Col>
    </>
  );
};

export default TASupplier;
