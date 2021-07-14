import React, { useState } from "react";
import { Breadcrumb, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { BsImage } from "react-icons/bs";
import ConditionPayFor from "../components/ConditionPayFor";
import ConditionPurchaseAmount from "../components/ConditionPurchaseAmount";

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
  // const history = useHistory();


  // Tabs
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/contract/create" }} active>
            Rebates
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Uncondition Rebates</Breadcrumb.Item>
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
                <ConditionPurchaseAmount />
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
