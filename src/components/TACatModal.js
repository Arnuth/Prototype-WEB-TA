import React from "react";
import { Modal, Button, Table } from "react-bootstrap";
import { HiOutlineSave } from "react-icons/hi";

import "../assets/css/ta-supplier.css";

const TACatModal = (props, {toggle}) => {
  // const [modalData, setModalData] = React.useState({});
  // const addDataModal = (h) => {
  //     // console.log(p)
  //     const Content = {
  //       code: h.code,
  //       name: h.h_name,
  //     };
  //     //call action
  //     setModalData(Content)
  //   };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="topic-line pb-1 modal-header mx-2 mb-0">
        <Modal.Title>หมวดหมู่สินค้า (Category)</Modal.Title>
      </Modal.Header>
      <Modal.Body className="wrap-accordion px-2 pt-0 pb-0">
        <div className="z-supplier-tb">
        <Table responsive hover className="mb-0 tb-supplier-cat">
          <thead>
            <tr className="th-light">
              <th width="50"></th>
              <th>Category</th>
              <th width="20%" className="text-right">
                Current %GP
              </th>
              <th width="20%" className="text-right">
                Expected %GP
              </th>
            </tr>
          </thead>
          <tbody>
            {props.data.list
              .filter((item) => item.isChecked === false)
              .map((item) => (
                <tr key={item.id}>
                  <td className="text-center">
                    <label className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input chd-chk"
                        name={item.name}
                        value={item.name}
                        checked={item.isChecked}
                        onChange={toggle}
                      />
                      
                    </label>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">{item.current}</td>
                  <td className="text-right">{item.expected}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        </div>
      </Modal.Body>
      <Modal.Footer className="ctrl-btn border-top-0">
        <Button
          variant="secondary"
          className="rounded-pill"
          onClick={props.onHide}
        >
          Cancel
        </Button>
        <Button
          variant="warning ml-2"
          className="rounded-pill"
          onClick={props.onHide}
        >
          Restore <HiOutlineSave />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TACatModal;
