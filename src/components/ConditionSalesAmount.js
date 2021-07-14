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

const ConditionSalesAmount = () => {
    
  const classes = useStyles();
  const history = useHistory();

  // Form
  const [period, setPeriod] = useState(0);
  const [valueSalesAmount, setValueSalesAmount] = useState("");
  const salesTarget = 10000000.00;

  const [filterMonth, setFilterMonth] = useState("1");

  const handleChangeFilterMonth = (event) => {
    setFilterMonth(event.target.value);
  };

  const handleChangePeriod = (event) => {
    setPeriod(event.target.value);
  };
  //checkbox
  const [state, setState] = useState({
    checkedQuarter: true,
    checkedMonth: true,
    checkedHaftYear: true,
  });
  const handleCheckChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //Search Article Table
  const [qValue, setQValue] = useState('');
  const [radioValue, setRadioValue] = useState('article');

  const handleRemove = (vid) => {
    alert("ลบรายการสำเร็จ")
  }



  return (
    <>
      <h2 className={`HdCondition ${classes.HeadTab}`}>
        <b className="head">% จากยอดขาย</b>
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
              value={(salesTarget * valueSalesAmount) / 100+".00"}
              suffix={" บาท"}
            />
          </span>{" "} |
          <span>
            เป้ายอดขาย TA 
            {/* {salesTarget} บ. */}
            <NumberFormat
              thousandSeparator={true}
              className="ml-2"
              displayType={"text"}
              value={salesTarget+".00"}
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
                  <InputGroup.Text id="from-purchase" className="bg-disabled">จากยอดขาย</InputGroup.Text>
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
                value={(salesTarget * valueSalesAmount) / 100}
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

        <h3 class="topic-line mt-4">ข้อมูลส่วนที่ 2: ระยะเวลาที่เรียกเก็บ</h3>
        <Row>
          <Col md={8} lg={7} xl={6}>
          <div className="card p-3 mb-4">
            <Form.Group controlId="purchase_collect">
              <Form.Label className="text-dark f-large mb-2">Period เรียกเก็บ</Form.Label>
              <Form.Control
                as="select"
                value={period}
                onChange={handleChangePeriod}
              > 
                <option value={0}>กรุณาระบุ</option>
                <option value="Year">รายปี</option>
                <option value="Haft">รายครึ่งปี</option>
                <option value="Quarter">รายไตรมาส</option>
                <option value="Month">รายเดือน</option>
                <option value="Once">ครั้งเดียว</option>
              </Form.Control>
            </Form.Group>

            <div className="z-option-period">
              {period === "Year" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เดือนที่เรียกเก็บ
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เรียกเก็บ
                      </Form.Label>
                    </Col>
                  </Row>

                  {Array.from({ length: 1 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                            เก็บเดือน ม.ค. ปีถัดไป
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`purchase_q${index + 1}_amount`}
                          className="mb-2"
                        >
                          <NumberFormat
                            className={`form-control text-right
                                    ${
                                      state.checkedQuarter === true
                                        ? "bg-disabled"
                                        : "enable"
                                    }
                                    `}
                            disabled={true}
                            thousandSeparator={true}
                            decimalSeparator={'.'} 
                            decimalScale={2}
                            value={valueSalesAmount}
                            type={"text"}
                            suffix={" %"}
                            placeholder="%"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                </div>
              )}

              {period === "Haft" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เดือนที่เรียกเก็บ
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เรียกเก็บ
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        className="form-control bg-disabled d-flex align-items-center mb-2"
                        controlId="checkedHaftYear"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="เท่ากันรายครึ่งปี"
                          checked={state.checkedHaftYear}
                          onChange={handleCheckChange}
                          // onClick={() => alert('สามารถระบุค่า "เท่ากันรายครึ่งปี" เท่านั้นค่ะ')}
                          name="checkedHaftYear"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="purchase_equalamount"
                        className="mb-2"
                      >
                        <NumberFormat
                          className="form-control text-right"
                          disabled={!state.checkedHaftYear}
                          readOnly
                          className={`form-control text-right
                                    ${
                                      state.checkedHaftYear === true
                                        ? "bg-white"
                                        : "bg-disabled"
                                    }
                                    `}
                          // id="purchase_equalamount"
                          thousandSeparator={true}
                          decimalSeparator={'.'} 
                          decimalScale={2}
                          placeholder="ยอดเรียกเก็บ %"
                          value={valueSalesAmount}
                          type={"text"}
                          suffix={" %"}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {Array.from({ length: 2 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Prepend className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              {index === 0
                                ? "ครึ่งปีแรก"
                                : index === 1 && "ครึ่งปีหลัง"}
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <InputGroup.Append className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              {index === 0
                                ? " ม.ค - มิ.ย."
                                : index === 1 && " ก.ค. - ธ.ค."}
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`purchase_q${index + 1}_amount`}
                          className="mb-2"
                        >
                          <NumberFormat
                            className={`form-control text-right
                                    ${
                                      state.checkedHaftYear === true
                                        ? "bg-disabled"
                                        : "enable"
                                    }
                                    `}
                            disabled={state.checkedHaftYear}
                            thousandSeparator={true}
                            decimalSeparator={'.'} 
                            decimalScale={2}
                            value={valueSalesAmount}
                            type={"text"}
                            suffix={" %"}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                  
                </div>
              )}

              {period === "Quarter" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ไตรมาส
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เรียกเก็บ
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        className="form-control bg-disabled d-flex align-items-center mb-2"
                        controlId="checkedQuarter"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="เท่ากันทุกไตรมาส"
                          checked={state.checkedQuarter}
                          onChange={handleCheckChange}
                          // onClick={() => alert('สามารถระบุค่า "เท่ากันรายครึ่งปี" เท่านั้นค่ะ')}
                          name="checkedQuarter"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="purchase_equalamount"
                        className="mb-2"
                      >
                        <NumberFormat
                          className="form-control text-right"
                          disabled={!state.checkedQuarter}
                          readOnly
                          className={`form-control text-right
                                    ${
                                      state.checkedQuarter === true
                                        ? "bg-white"
                                        : "bg-disabled"
                                    }
                                    `}
                          // id="purchase_equalamount"
                          thousandSeparator={true}
                          decimalSeparator={'.'} 
                          decimalScale={2}
                          placeholder="ยอดเรียกเก็บ %"
                          value={valueSalesAmount}
                          type={"text"}
                          suffix={" %"}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Prepend className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              ไตรมาส {index + 1}
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <InputGroup.Append className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              {index === 0
                                ? "ม.ค. - มี.ค."
                                : index === 1
                                ? "เม.ย. - มิ.ย."
                                : index === 2
                                ? "ก.ค. - ก.ย."
                                : index === 3 && "ต.ค. - ธ.ค."}
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`purchase_q${index + 1}_amount`}
                          className="mb-2"
                        >
                          <NumberFormat
                            className={`form-control text-right
                                    ${
                                      state.checkedQuarter === true
                                        ? "bg-disabled"
                                        : "enable"
                                    }
                                    `}
                            disabled={state.checkedQuarter}
                            thousandSeparator={true}
                            decimalSeparator={'.'} 
                            decimalScale={2}
                            value={valueSalesAmount}
                            type={"text"}
                            suffix={" %"}
                            
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}

                  
                </div>
              )}

              {period === "Month" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เดือนที่เรียกเก็บ
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เรียกเก็บ
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        className="form-control bg-disabled d-flex align-items-center mb-2"
                        controlId="checkedMonth"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="เท่ากันทุกเดือน"
                          checked={state.checkedMonth}
                          onChange={handleCheckChange}
                          // onClick={() => alert('สามารถระบุค่า "เท่ากันรายครึ่งปี" เท่านั้นค่ะ')}
                          name="checkedMonth"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="purchase_equalamount"
                        className="mb-2"
                      >
                        <NumberFormat
                          className="form-control text-right"
                          disabled={!state.checkedMonth}
                          readOnly
                          className={`form-control text-right
                                    ${
                                      state.checkedMonth === true
                                        ? "bg-white"
                                        : "bg-disabled"
                                    }
                                    `}
                          // id="purchase_equalamount"
                          thousandSeparator={true}
                          decimalSeparator={'.'} 
                          decimalScale={2}
                          placeholder="ยอดเรียกเก็บ %"
                          value={valueSalesAmount}
                          type={"text"}
                          suffix={" %"}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                            {index === 0
                              ? "ม.ค."
                              : index === 1
                              ? "ก.พ."
                              : index === 2
                              ? "มี.ค."
                              : index === 3
                              ? "เม.ย."
                              : index === 4
                              ? "พ.ค."
                              : index === 5
                              ? "มิ.ย."
                              : index === 6
                              ? "ก.ค."
                              : index === 7
                              ? "ส.ค."
                              : index === 8
                              ? "ก.ย."
                              : index === 9
                              ? "ต.ค."
                              : index === 10
                              ? "พ.ย."
                              : index === 11 && "ธ.ค."}
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`purchase_q${index + 1}_amount`}
                          className="mb-2"
                        >
                          <NumberFormat
                            className={`form-control text-right
                                    ${
                                      state.checkedMonth === true
                                        ? "bg-disabled"
                                        : "enable"
                                    }
                                    `}
                            disabled={state.checkedMonth}
                            thousandSeparator={true}
                            decimalSeparator={'.'} 
                            decimalScale={2}
                            value={valueSalesAmount}
                            type={"text"}
                            suffix={" %"}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                  
                </div>
              )}

              

              {period === "Once" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เดือนที่เรียกเก็บ
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        เรียกเก็บ
                      </Form.Label>
                    </Col>
                  </Row>

                  {Array.from({ length: 1 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        {/* <InputGroup className="mb-2">
                                    <InputGroup.Text class="input-group-text px-2 form-control">
                                     เก็บเดือน ม.ค. ปีถัดไป
                                    </InputGroup.Text>
                                </InputGroup> */}
                        <Form.Group controlId="filterMonth" className="mb-2">
                          <Form.Control
                            as="select"
                            value={filterMonth}
                            onChange={handleChangeFilterMonth}
                            className="form-select"
                          >
                            <option value={1}>ม.ค.</option>
                            <option value={2}>ก.พ.</option>
                            <option value={3}>มี.ค.</option>
                            <option value={4}>เม.ย.</option>
                            <option value={5}>พ.ค.</option>
                            <option value={6}>มิ.ย.</option>
                            <option value={7}>ก.ค.</option>
                            <option value={8}>ส.ค.</option>
                            <option value={9}>ก.ย.</option>
                            <option value={10}>ต.ค.</option>
                            <option value={11}>พ.ย.</option>
                            <option value={12}>ธ.ค.</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`purchase_q${index + 1}_amount`}
                          className="mb-2"
                        >
                          <NumberFormat
                            className={`form-control text-right bg-disabled}
                                    `}
                            disabled
                            thousandSeparator={true}
                            decimalSeparator={'.'} 
                            decimalScale={2}
                            value={valueSalesAmount}
                            type={"text"}
                            placeholder="%"
                            suffix={" %"}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                </div>
              )}
            </div>
            </div>
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

export default ConditionSalesAmount;
