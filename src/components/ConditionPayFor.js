import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { useToasts } from "react-toast-notifications";
import { HiOutlineSave } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

const useStyles = makeStyles((theme) => ({
    
    HeadTab: {
      margin: theme.spacing(-3),
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1.5),
      marginBottom: theme.spacing(3),
    }
}));

const ConditionPayFor = () => {
  const classes = useStyles();
  const { addToast } = useToasts();
  const history = useHistory();

  // Form
  const [period, setPeriod] = useState(0);
  const [valuePayforAmount, setValuePayforAmount] = useState("");
  const purchaseTarget = 10000000;

  const [valuePayforQ1, setValuePayforQ1] = useState("");
  const [valuePayforQ2, setValuePayforQ2] = useState("");
  const [valuePayforQ3, setValuePayforQ3] = useState("");
  const [valuePayforQ4, setValuePayforQ4] = useState("");
  const [valuePayforM, setValuePayforM] = useState("");
  const [valuePayforHaft, setValuePayforHaft] = useState("");
  const [valuePayforHaft2, setValuePayforHaft2] = useState("");
  const [valuePayforYear, setValuePayforYear] = useState("");
  // const [valuePayforOnce, setValuePayforOnce] = useState("");
  const [valuePayforSum, setValuePayforSum] = useState("");
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

  // console.log(valuePayforQ1 , valuePayforQ2 , valuePayforQ3, valuePayforQ4)

  function calPayforSum() {
    let sumQuarter =
      valuePayforQ1 + valuePayforQ2 + valuePayforQ3 + valuePayforQ4;
    setValuePayforSum(sumQuarter);
  }

  useEffect(() => {
    let month = parseFloat(valuePayforAmount / 12).toFixed(2);
    let quarter = parseFloat(valuePayforAmount / 4).toFixed(2);
    let haft = parseFloat(valuePayforAmount / 2).toFixed(2);
    let year = parseFloat(valuePayforAmount).toFixed(2);

    setValuePayforQ1(quarter);
    setValuePayforQ2(quarter);
    setValuePayforQ3(quarter);
    setValuePayforQ4(quarter);
    setValuePayforM(month);
    setValuePayforHaft(haft);
    setValuePayforHaft2(haft);
    setValuePayforYear(year);
    setValuePayforSum(valuePayforAmount);
  }, [valuePayforAmount]);

  useEffect(() => {
    calPayforSum();
  }, [valuePayforQ1, valuePayforQ2, valuePayforQ3, valuePayforQ4]);

  return (
    <>
      <h2 className={`HdCondition ${classes.HeadTab}`}>
        <b className="head">????????????????????????</b>
        <small className="d-block">
          <span>
            Total Amount
            <NumberFormat
              thousandSeparator={true}
              className="ml-2"
              displayType={"text"}
              value={valuePayforAmount === "" ? 0 : valuePayforAmount}
              suffix={" ?????????"}
            />
          </span>{" "} |
          <span>
            ????????????????????????????????? TA 
            <NumberFormat
              thousandSeparator={true}
              className="ml-2"
              displayType={"text"}
              value={parseFloat(purchaseTarget).toFixed(2)}
              suffix={" ?????????"}
            />
          </span>
        </small>
      </h2>
      <div className="tabDetail">
        <h3 class="topic-line">??????????????????????????????????????? 1: ?????????????????????????????????????????????</h3>
        <Row>
          <Col md={8} lg={7} xl={6}>
            <Form.Group>
              <Form.Label htmlFor="payfor_amount" className="text-dark">
                ????????????????????????????????????
              </Form.Label>
              <NumberFormat
                className="form-control text-right"
                id="payfor_amount"
                thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                placeholder="???????????????????????????????????? ???."
                value={valuePayforAmount}
                type={"text"}
                suffix={" ???."}
                onValueChange={(values) => {
                  setValuePayforAmount(values.floatValue);
                }}
              />
            </Form.Group>

            <Form.Group controlId="moreDetail">
              <Form.Label htmlFor="payfor_amount" className="text-dark">
                ????????????????????????????????????????????????????????? <span className="text-gray font-italic">(Optional)</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="??????????????????????????????????????????..."
              />
            </Form.Group>

            
          </Col>
        </Row>

        <h3 class="topic-line mt-4">??????????????????????????????????????? 2: ????????????????????????????????????????????????????????????</h3>
        <Row>
          <Col md={8} lg={7} xl={6}>
          <div className="card p-3 mb-4">
            <Form.Group controlId="payfor_collect">
              <Form.Label className="text-dark f-large mb-2">Period ???????????????????????????</Form.Label>
              <Form.Control
                as="select"
                value={period}
                onChange={handleChangePeriod}
              > 
                <option value={0}>???????????????????????????</option>
                <option value="Year">???????????????</option>
                <option value="Haft">??????????????????????????????</option>
                <option value="Quarter">???????????????????????????</option>
                <option value="Month">????????????????????????</option>
                <option value="Once">??????????????????????????????</option>
              </Form.Control>
            </Form.Group>

            <div className="z-option-period">
              {period === "Year" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????????????????????????????
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????
                      </Form.Label>
                    </Col>
                  </Row>

                  {Array.from({ length: 1 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                            ??????????????????????????? ???.???. ?????????????????????
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`payfor_q${index + 1}_amount`}
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
                            value={valuePayforYear}
                            type={"text"}
                            suffix={" ???."}
                            placeholder="???."
                            onValueChange={(values) => {
                              setValuePayforYear(values.floatValue);
                            }}
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
                        ???????????????????????????????????????????????????
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????
                      </Form.Label>
                    </Col>
                  </Row>
                  {/* <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        className="form-control bg-disabled d-flex align-items-center mb-2"
                        controlId="equalCheckbox"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="???????????????????????????????????????????????????"
                          checked={state.checkedQuarter}
                          onChange={handleCheckChange}
                          name="checkedQuarter"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="payfor_equalamount"
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
                          // id="payfor_equalamount"
                          thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                          placeholder="???????????????????????????????????? ???."
                          value={parseFloat(valuePayforAmount / 2).toFixed(2)}
                          type={"text"}
                          suffix={" ???."}
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}
                  {Array.from({ length: 2 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Prepend className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              {index === 0
                                ? "??????????????????????????????"
                                : index === 1 && "?????????????????????????????????"}
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <InputGroup.Append className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              {index === 0
                                ? " ???.??? - ??????.???."
                                : index === 1 && " ???.???. - ???.???."}
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`payfor_q${index + 1}_amount`}
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
                            value={
                              index === 0
                                ? valuePayforHaft
                                : index === 1 && valuePayforHaft2
                            }
                            type={"text"}
                            suffix={" ???."}
                            onValueChange={(values) => {
                              index === 0
                                ? setValuePayforHaft(values.floatValue)
                                : index === 1 &&
                                  setValuePayforHaft2(values.floatValue);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                  <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group className="form-control bg-disabled d-flex align-items-center mb-2">
                        ?????????
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="payfor_sum_amount"
                        className="mb-2"
                      >
                        <NumberFormat
                          className="form-control text-right"
                          disabled={true}
                          // id="payfor_sum_amount"
                          thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                          placeholder="???????????????????????????????????? ???."
                          value={valuePayforHaft + valuePayforHaft2}
                          type={"text"}
                          suffix={" ???."}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              )}

              {period === "Quarter" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ??????????????????
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????
                      </Form.Label>
                    </Col>
                  </Row>
                  {/* <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        className="form-control bg-disabled d-flex align-items-center mb-2"
                        controlId="equalCheckbox"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="????????????????????????????????????????????????"
                          checked={state.checkedQuarter}
                          onChange={handleCheckChange}
                          name="checkedQuarter"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="payfor_equalamount"
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
                          // id="payfor_equalamount"
                          thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                          placeholder="???????????????????????????????????? ???."
                          value={parseFloat(valuePayforAmount / 4).toFixed(2)}
                          type={"text"}
                          suffix={" ???."}
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Prepend className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              ?????????????????? {index + 1}
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <InputGroup.Append className="col p-0">
                            <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                              {index === 0
                                ? "???.???. - ??????.???."
                                : index === 1
                                ? "??????.???. - ??????.???."
                                : index === 2
                                ? "???.???. - ???.???."
                                : index === 3 && "???.???. - ???.???."}
                            </InputGroup.Text>
                          </InputGroup.Append>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`payfor_q${index + 1}_amount`}
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
                            value={
                              index === 0
                                ? valuePayforQ1
                                : index === 1
                                ? valuePayforQ2
                                : index === 2
                                ? valuePayforQ3
                                : index === 3
                                ? valuePayforQ4
                                : null
                            }
                            type={"text"}
                            suffix={" ???."}
                            onValueChange={(values) => {
                              index === 0
                                ? setValuePayforQ1(values.floatValue)
                                : index === 1
                                ? setValuePayforQ2(values.floatValue)
                                : index === 2
                                ? setValuePayforQ3(values.floatValue)
                                : index === 3 &&
                                  setValuePayforQ4(values.floatValue);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}

                  <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group className="form-control bg-disabled d-flex align-items-center mb-2">
                        ?????????????????????????????????????????????
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="payfor_sum_amount"
                        className="mb-2"
                      >
                        <NumberFormat
                          className="form-control text-right"
                          disabled={true}
                          // id="payfor_sum_amount"
                          thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                          placeholder="???????????????????????????????????? ???."
                          value={valuePayforSum}
                          type={"text"}
                          suffix={" ???."}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              )}

              {period === "Month" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????????????????????????????
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????
                      </Form.Label>
                    </Col>
                  </Row>
                  {/* <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        className="form-control bg-disabled d-flex align-items-center mb-2"
                        controlId="equalCheckbox"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="?????????????????????????????????????????????"
                          checked={state.checkedQuarter}
                          onChange={handleCheckChange}
                          name="checkedQuarter"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="payfor_equalamount"
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
                          // id="payfor_equalamount"
                          thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                          placeholder="???????????????????????????????????? ???."
                          value={parseFloat(valuePayforAmount / 12).toFixed(2)}
                          type={"text"}
                          suffix={" ???."}
                        />
                      </Form.Group>
                    </Col>
                  </Row> */}
                  {Array.from({ length: 12 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        <InputGroup className="mb-2">
                          <InputGroup.Text class="input-group-text px-2 form-control bg-disabled">
                            {index === 0
                              ? "???.???."
                              : index === 1
                              ? "???.???."
                              : index === 2
                              ? "??????.???."
                              : index === 3
                              ? "??????.???."
                              : index === 4
                              ? "???.???."
                              : index === 5
                              ? "??????.???."
                              : index === 6
                              ? "???.???."
                              : index === 7
                              ? "???.???."
                              : index === 8
                              ? "???.???."
                              : index === 9
                              ? "???.???."
                              : index === 10
                              ? "???.???."
                              : index === 11 && "???.???."}
                          </InputGroup.Text>
                        </InputGroup>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`payfor_q${index + 1}_amount`}
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
                            value={
                              valuePayforM
                              // index===0 ? valuePayforM :
                              // index===1 ? valuePayforM :
                              // index===2 ? valuePayforM :
                              // index===3 ? valuePayforM : null
                            }
                            type={"text"}
                            suffix={" ???."}
                            onValueChange={(values) => {
                              setValuePayforM(values.floatValue);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                  <Row className="ml-n2 mr-n2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group className="form-control bg-disabled d-flex align-items-center mb-2">
                        ?????????????????????????????????
                      </Form.Group>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Group
                        controlId="payfor_sum_amount"
                        className="mb-2"
                      >
                        <NumberFormat
                          className="form-control text-right"
                          disabled={true}
                          // id="payfor_sum_amount"
                          thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                          placeholder="???????????????????????????????????? ???."
                          value={valuePayforM * 12}
                          type={"text"}
                          suffix={" ???."}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              )}

              

              {period === "Once" && (
                <div className="period-box">
                  <Row className="ml-n2 mr-n2 mb-2">
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????????????????????????????
                      </Form.Label>
                    </Col>
                    <Col className="pl-2 pr-2" md={6}>
                      <Form.Label className="label-title mb-1">
                        ???????????????????????????
                      </Form.Label>
                    </Col>
                  </Row>

                  {Array.from({ length: 1 }).map((_, index) => (
                    <Row className="ml-n2 mr-n2" key={index}>
                      <Col className="pl-2 pr-2" md={6}>
                        {/* <InputGroup className="mb-2">
                                    <InputGroup.Text class="input-group-text px-2 form-control">
                                     ??????????????????????????? ???.???. ?????????????????????
                                    </InputGroup.Text>
                                </InputGroup> */}
                        <Form.Group controlId="filterMonth" className="mb-2">
                          <Form.Control
                            as="select"
                            value={filterMonth}
                            onChange={handleChangeFilterMonth}
                            className="form-select"
                          >
                            <option value={1}>???.???.</option>
                            <option value={2}>???.???.</option>
                            <option value={3}>??????.???.</option>
                            <option value={4}>??????.???.</option>
                            <option value={5}>???.???.</option>
                            <option value={6}>??????.???.</option>
                            <option value={7}>???.???.</option>
                            <option value={8}>???.???.</option>
                            <option value={9}>???.???.</option>
                            <option value={10}>???.???.</option>
                            <option value={11}>???.???.</option>
                            <option value={12}>???.???.</option>
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-2 pr-2" md={6}>
                        <Form.Group
                          controlId={`payfor_q${index + 1}_amount`}
                          className="mb-2"
                        >
                          <NumberFormat
                            className={`form-control text-right bg-disabled}
                                    `}
                            disabled
                            thousandSeparator={true}
decimalSeparator={'.'} 
decimalScale={2}
                            value={parseFloat(valuePayforAmount).toFixed(2)}
                            type={"text"}
                            placeholder="???."
                            suffix={" ???."}
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
            ??????????????????
          </Button>
          <Button
            variant="warning ml-2"
            onClick={() => {
              addToast("?????????????????????????????????????????????????????????????????????", {
                appearance: "success" /*, autoDismiss: false,*/,
              });
            }}
          >
            <HiOutlineSave className="mr-1 mt-n1" /> ??????????????????
          </Button>
        </Col>
      </div>
    </>
  );
};

export default ConditionPayFor;
