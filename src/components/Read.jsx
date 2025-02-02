import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [radioData, setRadioData] = useState("");
  console.log(radioData);
  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);
  // console.log(searchData);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <div>
        {showPopup && (
          <CustomModal
            id={id}
            showPopup={showPopup}
            setShowPopup={setShowPopup}
          />
        )}
        <h2>All data</h2>
        <input
          className="form-check-input"
          name="gender"
          type="radio"
          checked={radioData === ""}
          onChange={(e) => setRadioData("")}
        />
        <label className="form-check-label">All</label>
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          checked={radioData === "Male"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Male</label>
        <input
          className="form-check-input"
          name="gender"
          value="Female"
          type="radio"
          checked={radioData === "Female"}
          onChange={(e) => setRadioData(e.target.value)}
        />
        <label className="form-check-label">Female</label>

        <div>
          {users &&
            users
              ?.filter((ele) => {
                if (searchData.length === 0) {
                  return ele;
                } else {
                  return (
                    typeof ele.name === "string" &&
                    ele.name.toLowerCase().includes(searchData.toLowerCase())
                  );
                }
              })
              .filter((ele) => {
                if (radioData === "Male") {
                  return ele.gender === radioData;
                } else if (radioData === "Female") {
                  return ele.gender === radioData;
                } else return ele;
              })
              ?.map((ele) => (
                <div key={ele.id} className="card w-50 mx-auto my-2">
                  <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                    <h5 className="card-title">{ele.email}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {ele.gender}
                    </h6>
                    <p className="card-text"></p>
                    <button
                      className="card-link"
                      onClick={() => [setId(ele.id), setShowPopup(true)]}
                    >
                      View
                    </button>
                    <Link to={`/edit/${ele.id}`} className="card-link">
                      Edit
                    </Link>
                    <Link
                      className="card-link"
                      onClick={() => dispatch(deleteUser(ele.id))}
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
