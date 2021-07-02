import React, { useState, useEffect } from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useToasts } from 'react-toast-notifications'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { BsImage } from "react-icons/bs";
import ConditionPayFor from "../components/ConditionPayFor";

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
  const { addToast } = useToasts()

  // Tabs
  const [value, setValue] = useState(4);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
    let sumQuarter = valuePayforQ1 + valuePayforQ2 + valuePayforQ3 + valuePayforQ4;
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
  }, [valuePayforQ1 , valuePayforQ2 , valuePayforQ3 , valuePayforQ4]);
  
  // console.log(valuePayforAmount);
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
                <ConditionPayFor />
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
