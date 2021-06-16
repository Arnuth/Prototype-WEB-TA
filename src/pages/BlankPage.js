import React from "react";
import { useParams } from 'react-router-dom'
import { RiFileList3Line } from "react-icons/ri";

const BlankPage = () => {
    const { id, title } = useParams()
  return (
    <div className="wrap-main" style={{ minHeight: "150vh" }}>
      <div className="p-3">
        <h2 className="SubHdIcon">
            <i className="mr-2 mb-0">
            <RiFileList3Line size="1.5rem" />
            </i>
            <span>
            <b className="head">Page {id}</b>
            <small className="sub-head">{title}</small>
            </span>
        </h2>
      </div>
    </div>
  );
};

export default BlankPage;
