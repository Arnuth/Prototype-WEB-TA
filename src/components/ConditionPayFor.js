import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";
import NumberFormat from "react-number-format";
import { useToasts } from "react-toast-notifications";
import { HiOutlineSave } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

const ConditionPayFor = () => {
  const { addToast } = useToasts();
  const history = useHistory();

  // Form
  const [period, setPeriod] = useState("Month");
  const [valuePayforAmount, setValuePayforAmount] = useState("0");

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
    let month = parseInt(valuePayforAmount / 12);
    let quarter = parseInt(valuePayforAmount / 4);
    let haft = parseInt(valuePayforAmount / 2);
    let year = parseInt(valuePayforAmount);

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
                <option value="Month">รายเดือน</option>
                <option value="Quarter">รายไตรมาส</option>
                <option value="Haft">รายครึ่งปี</option>
                <option value="Year">รายปี</option>
                <option value="Once">ครั้งเดียว</option>
              </Form.Control>
            </Form.Group>

            <div className="z-option-period mb-4">
              {period === "Month" && (
                <div className="card p-3">
                  <Row className="ml-n2 mr-n2">
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
                        controlId="equalCheckbox"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="เท่ากันทุกเดือน"
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
                          placeholder="ยอดเรียกเก็บ บ."
                          value={valuePayforAmount / 12}
                          type={"text"}
                          suffix={" บ."}
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
                            value={
                              valuePayforM
                              // index===0 ? valuePayforM :
                              // index===1 ? valuePayforM :
                              // index===2 ? valuePayforM :
                              // index===3 ? valuePayforM : null
                            }
                            type={"text"}
                            suffix={" บ."}
                            onValueChange={(values) => {
                              setValuePayforM(values.floatValue);
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                </div>
              )}

              {period === "Quarter" && (
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
                            suffix={" บ."}
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
                        รวมกันทุกไตรมาส
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

              {period === "Haft" && (
                <div className="card p-3">
                  <Row className="ml-n2 mr-n2">
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
                        controlId="equalCheckbox"
                      >
                        <Form.Check
                          className="mb-0"
                          type="checkbox"
                          label="เท่ากันรายครึ่งปี"
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
                          placeholder="ยอดเรียกเก็บ บ."
                          value={valuePayforAmount / 2}
                          type={"text"}
                          suffix={" บ."}
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
                            value={
                              index === 0
                                ? valuePayforHaft
                                : index === 1 && valuePayforHaft2
                            }
                            type={"text"}
                            suffix={" บ."}
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
                </div>
              )}

              {period === "Year" && (
                <div className="card p-3">
                  <Row className="ml-n2 mr-n2">
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
                            value={valuePayforYear}
                            type={"text"}
                            suffix={" บ."}
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

              {period === "Once" && (
                <div className="card p-3">
                  <Row className="ml-n2 mr-n2">
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
                          controlId={`payfor_q${index + 1}_amount`}
                          className="mb-2"
                        >
                          <NumberFormat
                            className={`form-control text-right bg-disabled}
                                    `}
                            disabled
                            thousandSeparator={true}
                            value={valuePayforAmount}
                            type={"text"}
                            suffix={" บ."}
                            // onValueChange={(values) => {
                            //   setValuePayforYear(values.floatValue)
                            // }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  ))}
                </div>
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
          <Button
            variant="warning ml-2"
            onClick={() => {
              addToast("ทำการบันทึกเรียบร้อยค่ะ", {
                appearance: "success" /*, autoDismiss: false,*/,
              });
            }}
          >
            <HiOutlineSave className="mr-2 mt-n1" /> บันทึก
          </Button>
        </Col>
      </div>
    </>
  );
};

export default ConditionPayFor;
