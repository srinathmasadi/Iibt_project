import React from "react";

const Admin = ({openModal,setOpenModal}) => {


  return (
    <>
    {openModal && (
    <div className="modal-shadow">
      <div className="modal-cont">
      <button className="back-btn" onClick={()=>setOpenModal(false)}>x</button>

        <div className="modal-header">
          <h3>Add details</h3>
        </div>
        <div className="modal-content">
          <div className="grid">
            <label>Property Name</label>
            <input type="text" />
          </div>
          <div className="grid">
            <label>Address</label>
            <input type="text" />
          </div>
          <div className="grid">
            <label>Upload Image</label>
            <input type="text" />
          </div>
          <div className="grid">
            <label>City</label>
            <input type="text" />
          </div>
          <div className="grid">
            <label>Rent</label>
            <input type="text" />
          </div>
        </div>
        <div className="modal-footer">
          <button>Submit</button>
        </div>
      </div>
    </div>)}
    </>
  );
};

export default Admin;
