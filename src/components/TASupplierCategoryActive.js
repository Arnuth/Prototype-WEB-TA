import React from "react";
import { Button, Table, Modal } from "react-bootstrap";
// import { useSnackbar } from 'notistack';
import { useToasts } from 'react-toast-notifications'
import "../assets/css/ta-supplier.css";
import { BiTrashAlt } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
// import TACatModal from "./TACatModal";

const TASupplierCategory = () => {
  //modal
  const [modalShow, setModalShow] = React.useState(false);
  const { addToast } = useToasts()
  // const { enqueueSnackbar } = useSnackbar();
  //   const [modalData, setModalData] = React.useState({});

  const [checkBoxList, setCheckBoxList] = React.useState({
    allChecked: false,
    list: [
      {
        id: 1,
        name: "Category Name 1",
        current: "17.99%",
        expected: "17.99%",
        isChecked: true,
      },
      {
        id: 2,
        name: "Category Name 2",
        current: "16.99%",
        expected: "16.99%",
        isChecked: true,
      },
      {
        id: 3,
        name: "Category Name 3",
        current: "15.99%",
        expected: "15.99%",
        isChecked: true,
      },
      {
        id: 4,
        name: "Category Name 4",
        current: "14.99%",
        expected: "14.99%",
        isChecked: true,
      },
      {
        id: 5,
        name: "Category Name 5",
        current: "18.99%",
        expected: "18.99%",
        isChecked: true,
      },
      {
        id: 6,
        name: "Category Name 6",
        current: "19.99%",
        expected: "19.99%",
        isChecked: true,
      },
      {
        id: 7,
        name: "Category Name 7",
        current: "20.99%",
        expected: "20.99%",
        isChecked: true,
      },
      {
        id: 8,
        name: "Category Name 8",
        current: "14.99%",
        expected: "14.99%",
        isChecked: true,
      },
      {
        id: 9,
        name: "Category Name 9",
        current: "13.99%",
        expected: "13.99%",
        isChecked: true,
      },
      {
        id: 10,
        name: "Category Name 10",
        current: "7.99%",
        expected: "7.99%",
        isChecked: true,
      },
      {
        id: 11,
        name: "Category Name 11",
        current: "6.99%",
        expected: "6.99%",
        isChecked: true,
      },
      {
        id: 12,
        name: "Category Name 12",
        current: "5.99%",
        expected: "5.99%",
        isChecked: true,
      },
      {
        id: 13,
        name: "Category Name 13",
        current: "9.99%",
        expected: "9.99%",
        isChecked: true,
      },
      {
        id: 14,
        name: "Category Name 14",
        current: "8.99%",
        expected: "8.99%",
        isChecked: true,
      },
    ],
  });

  const handleCheckChange = (e) => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    setCheckBoxList((prevState) => {
      let { list, allChecked } = prevState;
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map((item) => ({ ...item, isChecked: checked }));
      } else {
        list = list.map((item) =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allChecked = list.every((item) => item.isChecked);
      }
      return { list, allChecked };
    });
    // enqueueSnackbar('ทำการเรียบร้อยค่ะ!', 'success')
    addToast('ทำการเพิ่มรายการเรียบร้อยค่ะ', { appearance: 'success' })
  };


  return (
    <>
      <h3 className="topic-line">
        หมวดหมู่สินค้า (Category)
      </h3>
      <div className="card p-3 mb-4">
        <h3 className="font-weight-semibold h6">
          <span className="text-dark ">บริษัท เอฟแอนด์เอ็น แดรี่ส์(ประเทศไทย) จำกัด</span>
          <span className="text-gray ml-2 font-weight-lighter">{checkBoxList.list.filter((item) => item.isChecked !== false).length} รายการ</span>
          {checkBoxList.list.filter((item) => item.isChecked === false).length > 0 ?
          <Button
            variant="warning"
            size="sm"
            className="p-0 rounded-pill ml-2 d-inline-flex align-items-center"
            onClick={() => {
              setModalShow(true);
              // addDataModal(h)
            }}
          >
            <HiPlus size="1.2rem" color="#404040" />
          </Button>
          : null }
        </h3>
        <Table responsive>
          <thead>
            <tr className="th-light">
              <th width="50">#</th>
              <th>Category</th>
              <th width="20%" className="text-right">
                Current %GP
              </th>
              <th width="20%" className="text-right">
                Expected %GP
              </th>
              <th width="50">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {checkBoxList.list
              .filter((item) => item.isChecked === true)
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td className="text-right">{item.current}</td>
                  <td className="text-right">{item.expected}</td>
                  <td className="tools-btn text-center">
                    <Button
                      variant="light"
                      size="sm"
                      className="pt-0 pb-0 pl-1 pr-1"
                      onClick={ async () => {
                            const isConfirm = window.confirm('ต้องการลบข้อมูล ' + item.name + '?')
                            if (isConfirm === true) {
                                // const resp = await axios.delete(`https://api.codingthailand.com/api/category/${c.id}`)
                                setCheckBoxList((prevState) => {
                                    let { list, allChecked } = prevState;
                                      list = list.map((chk) =>
                                      chk.id === item.id ? { ...chk, isChecked: false } : chk
                                      );
                                    return { list, allChecked };
                                  });
                                  addToast('ลบรายการสำเร็จ', { appearance: 'success' })
                                // enqueueSnackbar('ลบรายการสำเร็จ!', 'secondary');
                                // alert("ลบรายการสำเร็จ!")
                            }
                        }}
                    >
                      <BiTrashAlt />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>

      <Modal
        // {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        className="modal wrap-accordion"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="topic-line pb-1 modal-header mx-2 mb-0"> {/*closeButton */}
          <Modal.Title className="mb-0 h6">หมวดหมู่สินค้า (Category)</Modal.Title>
        </Modal.Header>
        <Modal.Body className="wrap-accordion px-2 pt-0 pb-0">
        <div className="z-supplier-tb">
          <Table responsive hover className="mb-0 tb-supplier-cat">
            <thead>
              <tr className="th-light">
                <th width="50"></th>
                <th className="text-left">Category</th>
                <th width="20%" className="text-right">
                  Current %GP
                </th>
                <th width="20%" className="text-right">
                  Expected %GP
                </th>
              </tr>
            </thead>
            <tbody>
              {checkBoxList.list
                .filter((item) => item.isChecked === false)
                .map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input chd-chk"
                          id={`chk${item.id}`}
                          name={item.name}
                          value={item.name}
                          checked={item.isChecked}
                          onChange={handleCheckChange}
                        />
                      </div>
                    </td>
                    <td className="text-left"><label htmlFor={`chk${item.id}`} className="mb-0" style={{cursor:'pointer'}}>{item.name}</label></td>
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
            variant="outline-secondary"
            className="rounded-pill"
            onClick={() => setModalShow(false)}
          >
            <CgCloseO className="mr-2 mt-n1" />
            ปิด
          </Button>
          {/* <Button
            variant="warning ml-2"
            className="rounded-pill"
            onClick={() => setModalShow(false)}
          >
            Restore <HiOutlineSave />
          </Button> */}
        </Modal.Footer>
      </Modal>

      {/* <TACatModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        toggle={handleCheckChange}
        data={checkBoxList}
      /> */}
    </>
  );
};

export default TASupplierCategory;
