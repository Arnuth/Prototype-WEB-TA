import React, { useState } from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FaRegFileImage } from "react-icons/fa";

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: 'calc(100vh - 117px)',
    "& > *": {backgroundColor: theme.palette.background.paper},
  },

  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
    marginRight: '.25rem',
    flexBasis: '20%',
    maxWidth: '20%',
    "& .MuiTab-wrapper": {
      flexDirection: "row",
      justifyContent: "flex-start",
      textAlign: "left",
      "& svg": { fontSize: '1.5rem' }
    },
    "& .MuiTab-labelIcon": {
      minHeight: '50px'
    },
    "& .Mui-selected": {
      backgroundColor: '#f3f9ff',
      "& .MuiTab-wrapper": { color:'#3B99FC'}
    },
    "& .MuiTabs-indicator": { right: 'auto', left: '0', width: '3px', backgroundColor: '#3B99FC'}
  }
  ,contenttabs: {
    flex: '1 1 0',
  }
}));

const ContractCreateCondition = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
     <div className="wrap-ta pt-1 pl-1 pr-1">
     <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/contract/list" }}>ใบความต้องการ</Breadcrumb.Item>
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
          <Tab label="ภาพรวม" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(0)} />
          <Tab label="% ยอดซื้อเติบโต" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(1)} />
          <Tab label="% ยอดซื้อเติบโต เฉพาะกลุ่ม" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(2)} />
          <Tab label="เป้ายอดซื้อ (บาท)" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(3)} />
          <Tab label="เป้ายอดซื้อ (บาท) เฉพาะกลุ่ม" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(4)} />
          <Tab label="บาทต่อหน่วยซื้อ" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(5)} />
          <Tab label="บาทต่อหน่วยซื้อ เฉพาะกลุ่ม" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(6)} />
          <Tab label="เหมาจ่าย" icon={<FaRegFileImage className="mr-2 mb-0" />} {...a11yProps(7)} />
        </Tabs>
        <div className={classes.contenttabs}>
        <TabPanel value={value} index={0}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Over all Conditions</b>
              <small className="sub-head">ภาพรวม</small>
            </span>
          </h2>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Conditions</b>
              <small className="sub-head">% ยอดซื้อเติบโต</small>
            </span>
          </h2>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Conditions</b>
              <small className="sub-head">% ยอดซื้อเติบโต เฉพาะกลุ่ม</small>
            </span>
          </h2>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Conditions</b>
              <small className="sub-head">เป้ายอดซื้อ (บาท)</small>
            </span>
          </h2>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Conditions</b>
              <small className="sub-head">เป้ายอดซื้อ (บาท) เฉพาะกลุ่ม</small>
            </span>
          </h2>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Conditions</b>
              <small className="sub-head">บาทต่อหน่วยซื้อ</small>
            </span>
          </h2>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Conditions</b>
              <small className="sub-head">บาทต่อหน่วยซื้อ เฉพาะกลุ่ม</small>
            </span>
          </h2>
        </TabPanel>
        <TabPanel value={value} index={7}>
          <h2 className="SubHdIcon">
            <i className="mr-2 mb-0"><FaRegFileImage size="1.5rem" /></i>
            <span>
              <b className="head">Conditions</b>
              <small className="sub-head">เหมาจ่าย</small>
            </span>
          </h2>
        </TabPanel>
        </div>
      </div>
    </Row>
    </div>
    </>
  );
}


export default ContractCreateCondition;
