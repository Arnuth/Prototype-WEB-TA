import React, { useState } from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";

import "../assets/css/accordion.css";

function ContractCreateConditionAcc() {
  const [blocks, setBlocks] = useState([
    { id: 1, title: "First Accordion", content: "Content 1", expanded: false },
    { id: 2, title: "Second Accordion", content: "Content 2", expanded: false },
    { id: 3, title: "Third Accordion", content: "Content 3", expanded: false },
    { id: 4, title: "Fourth Accordion", content: "Content 4", expanded: false },
  ]);

  function toggle(id) {
    setBlocks(
      blocks.map((item) => {
        if (item.id === id) {
          item.expanded = !item.expanded;
          return item;
        }
        return item;
      })
    );
  }

  function toggleExpand(expand) {
    if (expand) {
      setBlocks(
        blocks.map((item) => {
          item.expanded = true;
          return item;
        })
      );
    } else {
      setBlocks(
        blocks.map((item) => {
          item.expanded = false;
          return item;
        })
      );
    }
  }

  return (
    <div className="wrap-create p-1">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item href="/contract">
        ใบความต้องการ
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/contract/create">
        บริษัท เนสท์เล่ (ไทย) จำกัด
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Condition Rebates</Breadcrumb.Item>
      </Breadcrumb>
      <div className="mt-1">
        <Col md={12} className="p-0">
          <div className="bg-white p-2 mb-1 d-flex justify-content-between align-items-center ml-auto mr-auto">
            <h1 className="h4 mb-0">สร้าง Condition</h1>
            <div className="mt-1 mb-1">
                <button
                type="button"
                className="btn btn-outline-danger btn-xs rounded-pill"
                onClick={() => toggleExpand(false)}
                >
                Collapse All
                </button>
                {"  "}
                <button
                type="button"
                className="btn btn-outline-success btn-xs rounded-pill"
                onClick={() => toggleExpand(true)}
                >
                Expand All
                </button>
            </div>
          </div>
          <dl className="accordion">
            {blocks.map((item) => (
              <Accordion
                key={`item-${item.id}`}
                title={item.title}
                content={item.content}
                expand={item.expanded}
                onClick={() => toggle(item.id)}
              />
            ))}
          </dl>
        </Col>
      </div>
    </div>
  );
}

function Accordion({ title, content, expand, onClick }) {
  return (
    <>
      <div>
        <dt
          className={expand ? "title is-expanded" : "title"}
          onClick={onClick}
        >
          {title}
        </dt>
        <dd
          className={expand ? "content is-expanded" : "content"}
          // onClick={onClick}
        >
          <p>{content}</p>
        </dd>
      </div>
    </>
  );
}

export default ContractCreateConditionAcc;
