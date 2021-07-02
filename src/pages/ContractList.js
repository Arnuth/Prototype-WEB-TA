import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col ,Table, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { VscOpenPreview } from "react-icons/vsc";
import { HiOutlineSave } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { useToasts } from 'react-toast-notifications'

import $ from "jquery";
import "datatables.net";
// import 'datatables.net-responsive'

import "datatables.net-dt/css/jquery.dataTables.css";
// import 'datatables.net-bs/css/dataTables.bootstrap'
// import 'datatables.net-bs4/css/dataTables.bootstrap4.css'

const ContractList = () => {
  
  const { addToast } = useToasts()
  // const history = useHistory()
  
  const dataSet = [
    { vid:"100043", vname:"บริษัท เนสท์เล่ (ไทย) จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100044", vname:"บริษัท เอฟแอนด์เอ็น แดรี่ส์(ประเทศไทย) จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100143", vname:"บริษัท AAA", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"รออนุมัติ", docNum:"RD001/64" },
    { vid:"100144", vname:"บริษัท BBB จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100243", vname:"บริษัท CCC", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100244", vname:"บริษัท DDD จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100343", vname:"บริษัท กอไก่ จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"รออนุมัติ", docNum:"RD001/64" },
    { vid:"100344", vname:"บริษัท ขอไข่(ประเทศไทย) จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100443", vname:"บริษัท คอฅน จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100444", vname:"บริษัท คอระฆัง จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100543", vname:"บริษัท ฮอนกฮูก (ไทย) จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100644", vname:"บริษัท อออ่าง จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"ฉบับร่าง", docNum:"RD001/64" },
    { vid:"100743", vname:"บริษัท ไทยน้ำทิพย์ จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"ฉบับร่าง", docNum:"RD001/64" },
    { vid:"100744", vname:"บริษัท EEE จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"ฉบับร่าง", docNum:"RD001/64" },
    { vid:"100843", vname:"บริษัท FFF จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100844", vname:"บริษัท GGG จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100943", vname:"บริษัท HHH จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"100944", vname:"บริษัท III จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"101043", vname:"บริษัท JJJ จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"เสร็จแล้ว", docNum:"RD001/64" },
    { vid:"101044", vname:"บริษัท KKK จำกัด", year:"2564", manager:"ศิริวัฒนาภา ปฏิมาประกร", status:"ฉบับร่าง", docNum:"RD001/64" },
  ];

  const [dataFilter, setDataFilter] = useState(dataSet);

  const dataDraft = dataSet.filter((item) => item.status === "ฉบับร่าง");
  const dataSuccess = dataSet.filter((item) => item.status === "เสร็จแล้ว");
  const dataPending = dataSet.filter((item) => item.status === "รออนุมัติ");

  
  

  const syncTable = () => {
    $(".display").DataTable().destroy();
    var dataTable = $(".display").DataTable({
      "language": {
        "zeroRecords": "ไม่พบข้อมูล!",
        },
      lengthChange: false,
      iDisplayLength: 10,
      //   stateSave: true,
      autoWidth: false,
      responsive: true,
      info: false,
      // "paging":   false,
      // "ordering": false,
      "order": [[ 1, "asc" ]],
      "bFilter": true, // search
      // "searching": false, // autosearch
      // scrollX: true,
      "dom":' <"top"l>rt<"bottom"ip><"search"f><"clear">',
      columnDefs: [
        {
          "targets": [ 0,3,5,6,7 ],
          // "visible": false,
          "searchable": false
        },
        { targets: [0, 3, 7], orderable: false},
        // { targets: '_all', orderable: false }
    ],
    });
    $("#text-search").keyup(function() {
      dataTable.search(this.value).draw();
    });  
  };

  useEffect(() => {

    // const getData = async () => {
    //   try {
    //     setLoading(true);
    //     const resp = await axios.get(
    //       `https://api.codingthailand.com/api/course`
    //     );
    //     setTableData(resp.data.data);
    //   } catch (error) {
    //     setError(error);
    //   } finally {
    //     setLoading(false);
    //     syncTable();
    //   }
    // };

    // syncTable();

    return () => {
    };
  }, []);

  const [filter, setFilter] = useState("all");
  

  console.log(dataFilter);
  console.log(filter);
  // console.log(dataDraft)
  // console.log(dataSuccess)
  // console.log(dataPending)

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
    // filter==="all" ? setDataFilter(dataSet) :
    // filter==="success" ? setDataFilter(dataSuccess) :
    // filter==="draft" ? setDataFilter(dataDraft) :
    // filter==="pending" && setDataFilter(dataPending) 
    // history.go(0)
  };

  useEffect(() => {
    filter==="all" ? setDataFilter(dataSet) :
    filter==="success" ? setDataFilter(dataSuccess) :
    filter==="draft" ? setDataFilter(dataDraft) :
    filter==="pending" && setDataFilter(dataPending) 
    // setTimeout(
    //     // proxy callback to `this` rather than `window`
    //     $.proxy(function(){ 
            
    //     },this)
    // ,1000);
    // setTimeout( syncTable() ,1000);
    // $(".display").DataTable().reload();
    
    syncTable()
    
  }, [filter]);

  return (
    <div className="wrap-ta pt-1 pl-1 pr-1">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>ใบความต้องการ</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mt-1 ml-0 mr-0 position-relative">
        <Col
          xs={12}
          className="wrap-accordion p-3 bg-white"
          style={{ minHeight: "calc(100vh - 115px)" }}
        >
          <Row>
            <Col md>
              <Row>
                <Col md="auto">
                <Form.Group controlId="filterType">
                  <Form.Control 
                    as="select" 
                    value={filter}
                    onChange={handleChangeFilter}
                    className="form-select"
                  >
                    <option value="all">ทั้งหมด</option>
                    <option value="success">เสร็จแล้ว</option>
                    <option value="draft">ฉบับร่าง</option>
                    <option value="pending">รออนุมัติ</option>
                  </Form.Control>
                </Form.Group>
                </Col>
                <Col className="pl-0" md>
                  <InputGroup className="col p-0">
                    <InputGroup.Prepend>
                      <InputGroup.Text className="bg-white pr-0"><BiSearch size="1.3rem" color="#B8BCCA" className="mr-2" /></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="pl-0 border-left-0"
                      placeholder="รหัสผู้ขายสินค้า / ชื่อผู้ขายสินค้า / ผู้จัดทำเอกสาร"
                      aria-label="รหัสผู้ขายสินค้า / ชื่อผู้ขายสินค้า / ผู้จัดทำเอกสาร"
                      aria-describedby="customSearch"
                      id="text-search"
                    />
                    {/* <InputGroup.Append>
                      <Button 
                        variant="light"
                      > <BiSearch className="mr-2" /> ค้นหา
                      </Button>
                    </InputGroup.Append> */}
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col md="auto ctrl-btn">
              <Link className="btn btn-warning" to="/contract/create/"><HiOutlineSave className="mr-2 mt-n1" /> สร้างใบความต้องการ</Link>
            </Col>
          </Row>

          <div className="card p-3">
          <h3 className="h6">
            ทั้งหมด
            <span className="text-gray ml-2 font-weight-lighter">{dataFilter.length} รายการ</span>
            {/* ผลการค้นหา
            <span className="text-gray ml-2 font-weight-lighter">9 รายการ</span> */}
          </h3>

          <Table
                    id="tableDisplay"
                    className="display table-ta"
                    // style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>รหัสผู้ขายสินค้า</th>
                        <th>ชื่อผู้ขายสินค้า</th>
                        <th>ใบความต้องการปีที่</th>
                        <th>ผู้จัดทำเอกสาร</th>
                        <th>สถานะเอกสาร</th>
                        <th>เลขที่เอกสาร</th>
                        <th className="text-center" width="30px">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataSet.map((u, index) => {
                        return (
                          <tr key={u.vid}>
                            <td className="text-center">{index + 1}</td>
                            <td><Link to={`/contract/create/${u.vid}`}>{u.vid}</Link></td>
                            <td><Link to={`/contract/create/${u.vid}`}>{u.vname}</Link></td>
                            <td>{u.year}</td>
                            <td>{u.manager}</td>
                            <td>{u.status}</td>
                            <td>{u.docNum}</td>
                            <td className="text-center">
                              <Button
                              variant="light"
                              size="sm"
                              className="pt-0 pb-0 pl-1 pr-1"
                              onClick={
                                // () => {alert('coming soon')}
                                () => {addToast('coming soon', { placement : 'bottom-center', appearance: 'info', autoDismiss: false,})}
                                
                              }>
                                <VscOpenPreview />
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  </div>

        </Col>
      </Row>
    </div>
  );
};

export default ContractList;
