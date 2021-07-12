import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Row, Col, Form, InputGroup } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    
    HeadTab: {
      margin: theme.spacing(-3),
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1.5),
      marginBottom: theme.spacing(3),
    }
}));

const ConditionPurchaseAmount = () => {
    
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <h2 className={`HdCondition ${classes.HeadTab}`}>
        <b className="head">% จากยอดซื้อ</b>
        <small className="d-block">
          <span>Amount 1%</span> |<span>Total Amount 100,000.00 บาท</span> |
          <span>เป้ายอดซื้อ TA 10,000,000.00 บ.</span>
        </small>
      </h2>
    </>
  );
};

export default ConditionPurchaseAmount;
