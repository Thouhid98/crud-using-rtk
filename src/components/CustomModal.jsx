import React from "react";
import "./CustomModal.css";
import { useSelector } from "react-redux";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);
  const singleUser = allusers.filter((ele) => ele.id === id);
  console.log(singleUser);
  return (
    <div>
      <div className="modalBackground">
        <div className="modalContainer">
          <button onClick={() => setShowPopup(false)}>Close</button>
          <p> {singleUser[0].name}</p>
          <p> {singleUser[0].email}</p>
          <p> {singleUser[0].age}</p>
          <p> {singleUser[0].gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
