import React, { Fragment } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Register Sample"
            />
          </div>
          <div className="col-md-6">
            <form>
              <p className="h4 text-center mb-4">Registration Form</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormRegisterEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterPasswordEx"
                className="grey-text"
              >
                Your password
              </label>
              <input
                type="password"
                id="current-password"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormRegisterConfirmEx"
                className="grey-text"
              >
                Confirm your password
              </label>
              <input
                type="password"
                id="defaultFormRegisterConfirmEx"
                className="form-control"
              />
              <div className="text-center my-4">
                <button className="btn btn-primary py-2 px-4" type="submit">
                  Register
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Already have an account?{" "}
                  <Link to={"/login"} className="link-danger">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Register;