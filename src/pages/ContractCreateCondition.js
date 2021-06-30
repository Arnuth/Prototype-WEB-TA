import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, Row, Col, Form, InputGroup, FormControl } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NumberFormat from "react-number-format";
import Box from "@material-ui/core/Box";
import { BsImage } from "react-icons/bs";
import { HiOutlineSave } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "calc(100vh - 117px)",
    "& > *": { backgroundColor: theme.palette.background.paper },
  },

  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
    marginRight: ".25rem",
    flexBasis: "20%",
    maxWidth: "20%",
    "& .MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "flex-start",
      textAlign: "left",
      lineHeight: "120%",
      fontFamily: "Sarabun",
      "& svg": { fontSize: "1.2rem" },
    },
    "& .MuiTab-labelIcon": {
      minHeight: "50px",
      maxWidth: "100%",
    },
    "& .Mui-selected": {
      backgroundColor: "#f3f9ff",
      "& .MuiTab-wrapper": { color: "#3B99FC" },
    },
    "& .MuiTabs-indicator": {
      right: "auto",
      left: "0",
      width: "3px",
      backgroundColor: "#3B99FC",
    },
  },
  contenttabs: {
    flex: "1 1 0",
  },
  HeadTab: {
    margin: theme.spacing(-3),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
  }
}));

const ContractCreateCondition = () => {
  const classes = useStyles();
  const history = useHistory();
  // Tabs
  const [value, setValue] = useState(4);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Form
  const [period, setPeriod] = useState("1");
  const [valuePayforAmount, setValuePayforAmount] = useState("");
  
  const [valuePayforQ1, setValuePayforQ1] = useState("");
  const [valuePayforQ2, setValuePayforQ2] = useState("");
  const [valuePayforQ3, setValuePayforQ3] = useState("");
  const [valuePayforQ4, setValuePayforQ4] = useState("");
  const [valuePayforSum, setValuePayforSum] = useState("");

  const handleChangePeriod = (event) => {
    setPeriod(event.target.value);
    // setSelectedStartDate("15-06-2564");
    // setSelectedEndDate("20-06-2564");
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

  console.log(valuePayforQ1 , valuePayforQ2 , valuePayforQ3, valuePayforQ4)

  function calPayforSum() {
    let sumQuarter = valuePayforQ1 + valuePayforQ2 + valuePayforQ3 + valuePayforQ4;
    setValuePayforSum(sumQuarter);
  }
  useEffect(() => {
    let quarter = parseInt(valuePayforAmount / 4) ;
    
    setValuePayforQ1(quarter);
    setValuePayforQ2(quarter);
    setValuePayforQ3(quarter);
    setValuePayforQ4(quarter);
    setValuePayforSum(valuePayforAmount);

  }, [valuePayforAmount]);

  useEffect(() => {
    calPayforSum();
  }, [valuePayforQ1 , valuePayforQ2 , valuePayforQ3 , valuePayforQ4]);
  
  console.log(valuePayforAmount);
  return (
    <>
      <div className="wrap-ta pt-1 pl-1 pr-1">
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/contract/list" }}>
            ใบความต้องการ
          </Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/contract/create" }}>
            บริษัท เนสท์เล่ (ไทย) จำกัด
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Condition Rebates</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="mt-1 ml-0 mr-0 position-relative">
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Menu Condition"
              className={classes.tabs}
            >
              <Tab
                label="ภาพรวม"
                icon={<BsImage className="mr-3 mb-0" />}
                {...a11yProps(0)}
              />
              <Tab
                label="% จากยอดซื้อ"
                icon={<BsImage className="mr-3 mb-0" />}
                {...a11yProps(1)}
              />
              <Tab
                label="% จากยอดซื้อ เฉพาะกลุ่ม"
                icon={<BsImage className="mr-3 mb-0" />}
                {...a11yProps(2)}
              />
              <Tab
                label="% จากยอดขาย"
                icon={<BsImage className="mr-3 mb-0" />}
                {...a11yProps(3)}
              />
              <Tab
                label="เหมาจ่าย"
                icon={<BsImage className="mr-3 mb-0" />}
                {...a11yProps(4)}
              />
              <Tab
                label="% On invoice ยอดซื้อ"
                icon={<BsImage className="mr-3 mb-0" />}
                {...a11yProps(5)}
              />
            </Tabs>
            <div className={classes.contenttabs}>
              <TabPanel value={value} index={0}>
                <h2 className={`HdCondition ${classes.HeadTab}`}>
                  <b className="head">ภาพรวม</b>
                  <small className="d-block">
                    <span>Amount 1%</span> |
                    <span>Total Amount 100,000.00 บาท</span> |
                    <span>เป้ายอดซื้อ TA 10,000,000.00 บ.</span>
                  </small>
                </h2>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <h2 className={`HdCondition ${classes.HeadTab}`}>
                  <b className="head">% จากยอดซื้อ</b>
                  <small className="d-block">
                    <span>Amount 1%</span> |
                    <span>Total Amount 100,000.00 บาท</span> |
                    <span>เป้ายอดซื้อ TA 10,000,000.00 บ.</span>
                  </small>
                </h2>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <h2 className={`HdCondition ${classes.HeadTab}`}>
                  <b className="head">% จากยอดซื้อ เฉพาะกลุ่ม</b>
                  <small className="d-block">
                    <span>Amount 1%</span> |
                    <span>Total Amount 100,000.00 บาท</span> |
                    <span>เป้ายอดซื้อ TA 10,000,000.00 บ.</span>
                  </small>
                </h2>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <h2 className={`HdCondition ${classes.HeadTab}`}>
                  <b className="head">% จากยอดขาย</b>
                  <small className="d-block">
                    <span>Amount 1%</span> |
                    <span>Total Amount 100,000.00 บาท</span> |
                    <span>เป้ายอดซื้อ TA 10,000,000.00 บ.</span>
                  </small>
                </h2>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <h2 className={`HdCondition ${classes.HeadTab}`}>
                  <b className="head">เหมาจ่าย</b>
                  <small className="d-block">
                    <span>
                      Total Amount 
                      <NumberFormat
                          thousandSeparator={true}
                          className="ml-2"
                          displayType={'text'}
                          value={valuePayforAmount === "" ? 0 : valuePayforAmount}
                          suffix={" บาท"}
                        />
                    </span> |
                    <span>เป้ายอดซื้อ TA 10,000,000.00 บ.</span>
                  </small>
                </h2>
                <div className="tabDetail">
                  <h3 class="topic-line">ยอดซื้อ</h3>
                  <Row>
                    <Col md={8} lg={7} xl={6}>
                      <Form.Group>
                        <Form.Label htmlFor="payfor_amount" className="text-dark">
                          ยอดเรียกเก็บ
                        </Form.Label>
                        <NumberFormat
                          className="form-control"
                          id="payfor_amount"
                          thousandSeparator={true}
                          placeholder="ยอดเรียกเก็บ บ."
                          value={valuePayforAmount}
                          type={"text"}
                          suffix={" บ."}
                          onValueChange={(values) => {
                            setValuePayforAmount(values.floatValue);
                          }}
                        />
                      </Form.Group>

                      <Form.Group controlId="payfor_collect">
                        <Form.Label className="text-dark">Period เรียกเก็บ</Form.Label>
                        <Form.Control
                          as="select"
                          value={period}
                          onChange={handleChangePeriod}
                        >
                          <option value={1}>รายเดือน</option>
                          <option value={2}>รายไตรมาส</option>
                          <option value={3}>รายครึ่งปี</option>
                          <option value={4}>รายปี</option>
                          <option value={5}>ครั้งเดียว</option>
                        </Form.Control>
                      </Form.Group>

                      <div className="z-option-period mb-4">
                        {period === "1" && (
                          <div className="card p-3">
                            <Row className="ml-n2 mr-n2">
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
                                  controlId="equalCheckbox"
                                >
                                  <Form.Check
                                    className="mb-0"
                                    type="checkbox"
                                    label="เท่ากันทุกไตรมาส"
                                    checked={state.checkedQuarter}
                                    onChange={handleCheckChange}
                                    name="checkedQuarter"
                                  />
                                </Form.Group>
                              </Col>
                              <Col className="pl-2 pr-2" md={6}>
                                <Form.Group controlId="payfor_equalamount" className="mb-2">
                                  <NumberFormat
                                    className="form-control text-right"
                                    disabled={!state.checkedQuarter}
                                    readOnly
                                    className={`form-control text-right
                                    ${state.checkedQuarter === true ? 'bg-white' : 'bg-disabled'}
                                    `}
                                    // id="payfor_equalamount"
                                    thousandSeparator={true}
                                    placeholder="ยอดเรียกเก็บ บ."
                                    value={valuePayforAmount / 4}
                                    type={"text"}
                                    suffix={" บ."}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            {Array.from({ length: 4 }).map((_, index) => (
                            <Row className="ml-n2 mr-n2" key={index}>
                              <Col className="pl-2 pr-2" md={6}>
                                <InputGroup className="mb-2">
                                  <InputGroup.Prepend className="col p-0">
                                    <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">ไตรมาส {index+1}</InputGroup.Text>
                                  </InputGroup.Prepend>
                                  <InputGroup.Append className="col p-0">
                                    <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                                      {
                                      index===0 ? "ม.ค. - มี.ค." :
                                      index===1 ? "เม.ย. - มิ.ย." :
                                      index===2 ? "ก.ค. - ก.ย." :
                                      index===3 && "ต.ค. - ธ.ค."
                                      }
                                    </InputGroup.Text>
                                  </InputGroup.Append>
                                </InputGroup>
                              </Col>
                              <Col className="pl-2 pr-2" md={6}>
                                <Form.Group controlId={`payfor_q${index+1}_amount`} className="mb-2">
                                  <NumberFormat
                                    className={`form-control text-right
                                    ${state.checkedQuarter === true ? 'bg-disabled' : 'enable'}
                                    `}
                                    disabled={state.checkedQuarter}
                                    thousandSeparator={true}
                                    value={
                                      index===0 ? valuePayforQ1 :
                                      index===1 ? valuePayforQ2 :
                                      index===2 ? valuePayforQ3 :
                                      index===3 ? valuePayforQ4 : null
                                    }
                                    type={"text"}
                                    suffix={" บ."}
                                    onValueChange={(values) => {
                                      index===0 ? setValuePayforQ1(values.floatValue) :
                                      index===1 ? setValuePayforQ2(values.floatValue) :
                                      index===2 ? setValuePayforQ3(values.floatValue) :
                                      index===3 && setValuePayforQ4(values.floatValue)

                                    }}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            ))}
                            
                            <Row className="ml-n2 mr-n2">
                              <Col className="pl-2 pr-2" md={6}>
                                <Form.Group
                                  className="form-control bg-disabled d-flex align-items-center mb-2"
                                >
                                  รวมกันทุกไตรมาส
                                </Form.Group>
                              </Col>
                              <Col className="pl-2 pr-2" md={6}>
                                <Form.Group controlId="payfor_sum_amount" className="mb-2">
                                  <NumberFormat
                                    className="form-control text-right"
                                    disabled={true}
                                    // id="payfor_sum_amount"
                                    thousandSeparator={true}
                                    placeholder="ยอดเรียกเก็บ บ."
                                    value={valuePayforSum}
                                    type={"text"}
                                    suffix={" บ."}
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                          </div>
                        )}

                        {period === "2" && (
                          <div className="card p-3">รายไตรมาส</div>
                        )}

                        {period === "3" && (
                          <div className="card p-3">รายครึ่งปี</div>
                        )}

                        {period === "4" && (
                          <div className="card p-3">รายปี</div>
                        )}

                        {period === "5" && (
                          <div className="card p-3">ครั้งเดียว</div>
                        )}
                      </div>
                    </Col>
                  </Row>

                  <h3 class="topic-line">รายละเอียดเพิ่มเติม</h3>
                  <Row>
                    <Col>
                      <Form.Group controlId="moreDetail">
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
                      <Button variant="warning ml-2">
                        <HiOutlineSave className="mr-2 mt-n1" /> บันทึก
                      </Button>
                    </Col>

                </div>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <h2 className={`HdCondition ${classes.HeadTab}`}>
                  <b className="head">% On invoice ยอดซื้อ</b>
                  <small className="d-block">
                    <span>Amount 1%</span> |
                    <span>Total Amount 100,000.00 บาท</span> |
                    <span>เป้ายอดซื้อ TA 10,000,000.00 บ.</span>
                  </small>
                </h2>
              </TabPanel>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default ContractCreateCondition;
