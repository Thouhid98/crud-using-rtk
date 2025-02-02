import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [users, setUsers] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: [e.target.value] });
    console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
    e.target.reset();
    navigate("/read");
  };

  return (
    <div>
      <div>
        <h2 className="my-2">Fill the data</h2>
        <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              onChange={getUserData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              onChange={getUserData}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              required
              onChange={getUserData}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Male"
              type="radio"
              required
              onChange={getUserData}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              name="gender"
              value="Female"
              type="radio"
              onChange={getUserData}
            />
            <label className="form-check-label">Female</label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
