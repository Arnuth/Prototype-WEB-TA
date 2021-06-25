import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../assets/css/accordion.css";

function ContractCreateCondition() {
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
    <Container className="wrap-create">
      <Row className="mt-4">
        <Col md={12}>
          <div className="d-flex justify-content-between align-items-center ml-auto mr-auto" style={{width:'80%'}}>
            <h1 className="text-center">สร้าง Condition</h1>
            <div className="mt-4 mb-4">
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
      </Row>
    </Container>
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

export default ContractCreateCondition;
