import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Row, Col, Form, InputGroup, FormControl, Table } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { HiOutlineSave } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
    
    HeadTab: {
      margin: theme.spacing(-3),
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1.5),
      marginBottom: theme.spacing(3),
    }
}));

const ConditionOnInvoice = () => {
    
  const classes = useStyles();
  const history = useHistory();

  // Form
  const [valueSalesAmount, setValueSalesAmount] = useState("");
  const purchaseTarget = 10000000.00;

  
  //Search Article Table
  const [qValue, setQValue] = useState('');
  const [radioValue, setRadioValue] = useState('article');

  const handleRemove = (vid) => {
    alert("ลบรายการสำเร็จ")
  }



  return (
    <>
      <h2 className={`HdCondition ${classes.HeadTab}`}>
        <b className="head">% On invoice ยอดซื้อ</b>
        <small className="d-block">
          <span>
            Amount 
            <NumberFormat
              thousandSeparator={true}
              className="ml-2"
              displayType={"text"}
              value={valueSalesAmount}
              suffix={" %"}
            />
          </span> |
          <span>
            Total Amount
            <NumberFormat
              thousandSeparator={true}
              className="ml-2"
              displayType={"text"}
              value={(purchaseTarget * valueSalesAmount) / 100+".00"}
              suffix={" บาท"}
            />
          </span>{" "} |
          <span>
            เป้ายอดซื้อ TA 
            {/* {purchaseTarget} บ. */}
            <NumberFormat
              thousandSeparator={true}
              className="ml-2"
              displayType={"text"}
              value={purchaseTarget+".00"}
              suffix={" บ."}
              // format={'##,###,###.00'}
            />
          </span>
        </small>
      </h2>
      <div className="tabDetail">
        <h3 class="topic-line">ข้อมูลส่วนที่ 1: รายการเรียกเก็บ</h3>
        <Row>
          <Col md={6} className="pr-md-2">
            <Form.Group>
              <Form.Label htmlFor="purchase_amount" className="text-dark">
                เรียกเก็บ
              </Form.Label>
              <InputGroup className="mb-3">
                <NumberFormat
                  className="form-control text-right"
                  id="purchase_amount"
                  thousandSeparator={true}
                  decimalSeparator={'.'} 
                  decimalScale={2}
                  placeholder="ยอดเรียกเก็บ %"
                  value={valueSalesAmount}
                  type={"text"}
                  suffix={" %"}
                  // format="#.##%"
                  onValueChange={(values) => {
                    setValueSalesAmount(values.floatValue);
                  }}
                />
                <InputGroup.Append>
                  <InputGroup.Text id="from-purchase" className="bg-disabled">จากยอดซื้อ</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6} className="pl-md-2">
            <Form.Group>
              <Form.Label htmlFor="purchase_amount_bath">
                ยอดเรียกเก็บ
              </Form.Label>
              
              <NumberFormat
                className="form-control text-right"
                id="purchase_amount_bath"
                disabled
                thousandSeparator={true}
                decimalSeparator={'.'} 
                decimalScale={2}
                placeholder="ยอดเรียกเก็บ บ."
                value={(purchaseTarget * valueSalesAmount) / 100}
                type={"text"}
                suffix={" บ."}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="card wrap-accordion p-3 mb-5">
              <Form.Group controlId="excluded_items" className="pt-1">
                <Form.Label className="text-dark f-large mb-2">รายการที่ยกเว้น <span className="text-gray font-weight-light ml-2"> {qValue.length * 3} รายการ</span></Form.Label>
                <InputGroup>
                  <InputGroup className="col p-0">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="bg-white pr-0"><BiSearch size="1.3rem" color="#B8BCCA" className="mr-2" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="pl-0 border-left-0 rounded-0"
                      value={qValue}
                      onChange={(e) => {
                        setQValue(e.target.value);
                      }}
                      placeholder={
                        radioValue === "article" ? 
                        "ค้นหา Article" :
                        radioValue === "subcategory" ?
                        "ค้นหา Sub Category" :
                        radioValue === "category" ?
                        "ค้นหา Category" : null
                      }
                      id="text-search"
                    />
                  </InputGroup>
                  <InputGroup.Append>
                    <div className="input-group-text bg-white">
                      <Form.Check className="d-flex align-items-center mb-0" type="radio" name="excluded_type" id="searchArticle" label="Article"
                      value="article"
                      checked={radioValue === 'article'}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                      />
                    </div>
                    <div className="input-group-text bg-white">
                      <Form.Check className="d-flex align-items-center mb-0" type="radio" name="excluded_type" id="searchSubCategory" label="Sub Category"
                      value="subcategory"
                      checked={radioValue === 'subcategory'}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                      />
                    </div>
                    <div className="input-group-text bg-white">
                      <Form.Check className="d-flex align-items-center mb-0" type="radio" name="excluded_type" id="searchCategory" label="Category"
                      value="category"
                      checked={radioValue === 'category'}
                      onChange={(e) => setRadioValue(e.currentTarget.value)}
                      />
                    </div>
                  </InputGroup.Append>
                </InputGroup>

              </Form.Group>
              {
                qValue &&
              
              <div className="z-supplier-tb">
              <Table responsive>
                <thead>
                  <tr className="th-light">
                    <th width="50">#</th>
                    <th width="20%">Category</th>
                    <th width="20%">
                      Sub Category
                    </th>
                    <th width="40%">
                      Article
                    </th>
                    <th width="30">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: qValue.length })
                    .map((_, index) => (
                      <>
                      <tr key={`${index+1}_1`}>
                        <td style={{verticalAlign:"bottom"}}>{index*2 + 1}</td>
                        <td>
                          <small className="dsID">10200</small>
                          <div>SPRITS</div>
                        </td>
                        <td>
                          <small className="dsID">10203</small>
                          <div>WHITE SPIRITS</div>
                        </td>
                        <td>
                          <small className="dsID">20021339</small>
                          <div>ตะวันแดงสุราข้าวหอม35ดีกรี 330ml</div>
                        </td>
                        <td style={{verticalAlign:"bottom"}} className="tools-btn text-center">
                          <Button
                            variant="light"
                            size="sm"
                            className="pt-0 pb-0 pl-1 pr-1"
                            onClick={ async () => {
                                  const isConfirm = window.confirm(`ต้องการลบข้อมูล ${index+1} ?`)
                                  if (isConfirm === true) {
                                      handleRemove(index+1)
                                      // alert("ลบรายการสำเร็จ!")
                                  }
                              }}
                          >
                            <BiTrashAlt />
                          </Button>
                        </td>
                      </tr>

                      <tr key={`${index+1}_2`}>
                        <td style={{verticalAlign:"bottom"}}>{index*2 + 2}</td>
                        <td>
                          <small className="dsID">I0600</small>
                          <div>MILK POWDER-BA...</div>
                        </td>
                        <td>
                          <small className="dsID">I0601</small>
                          <div>FOLLOW-UP FORM...</div>
                        </td>
                        <td>
                          <small className="dsID">&nbsp;</small>
                          <div>[All] Article</div>
                        </td>
                        <td style={{verticalAlign:"bottom"}} className="tools-btn text-center">
                          <Button
                            variant="light"
                            size="sm"
                            className="pt-0 pb-0 pl-1 pr-1"
                            onClick={ async () => {
                                  const isConfirm = window.confirm(`ต้องการลบข้อมูล ${index+1} ?`)
                                  if (isConfirm === true) {
                                      handleRemove(index+1)
                                      // alert("ลบรายการสำเร็จ!")
                                  }
                              }}
                          >
                            <BiTrashAlt />
                          </Button>
                        </td>
                      </tr>

                      <tr key={`${index+1}_3`}>
                        <td style={{verticalAlign:"bottom"}}>{index*2 + 3}</td>
                        <td>
                          <small className="dsID">I0100</small>
                          <div>FOOD SUPPLEMENT</div>
                        </td>
                        <td>
                          <small className="dsID">&nbsp;</small>
                          <div>[All] Sub Category</div>
                        </td>
                        <td>
                          <small className="dsID">&nbsp;</small>
                          <div>[All] Article</div>
                        </td>
                        <td style={{verticalAlign:"bottom"}} className="tools-btn text-center">
                          <Button
                            variant="light"
                            size="sm"
                            className="pt-0 pb-0 pl-1 pr-1"
                            onClick={ async () => {
                                  const isConfirm = window.confirm(`ต้องการลบข้อมูล ${index+1} ?`)
                                  if (isConfirm === true) {
                                      handleRemove(index+1)
                                      // alert("ลบรายการสำเร็จ!")
                                  }
                              }}
                          >
                            <BiTrashAlt />
                          </Button>
                        </td>
                      </tr>

                      </>
                    ))}
                </tbody>
              </Table>
              </div>
              }
            </div>

            <Form.Group controlId="moreDetail">
              <Form.Label htmlFor="purchase_more" className="text-dark">
                รายละเอียดเพิ่มเติม <span className="text-gray font-italic">(Optional)</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="กรอกรายละเอียด..."
              />
            </Form.Group>

            
          </Col>
        </Row>

        

        <Col
          xs={12}
          className="footer-bar ctrl-btn d-flex justify-content-end align-items-center pt-2 pb-2 pl-0 pr-0 position-sticky"
          style={{ bottom: "0" }}
        >
          <Button
            variant="outline-secondary"
            onClick={() => {
              history.goBack();
            }}
          >
            <CgCloseO className="mr-2 mt-n1" />
            ยกเลิก
          </Button>
          <Button
            variant="warning ml-2"
          >
            <HiOutlineSave className="mr-1 mt-n1" /> บันทึก
          </Button>
        </Col>
      </div>
    </>
  );
};

export default ConditionOnInvoice;
