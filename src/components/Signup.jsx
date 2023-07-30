import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
function Signup() {
  const alert = useContext(AlertContext);
  let { showAlert } = alert;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      if (json.success) {
        showAlert("You have successfully Signed Up", "success");
        localStorage.setItem("token", json.authToken);
        navigate("/");
      } else {
        showAlert("There was an error signing Up", "danger");
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
