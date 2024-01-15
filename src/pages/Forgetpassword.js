import React from "react";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { CContainer } from "@coreui/react";
import { CRow } from "@coreui/react";
import NavBar from "../components/NavBar";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { message } from "antd";

function ForgotPassword() {
  const history = useNavigate();
  const year = new Date().getFullYear();
  const page = {
    backgroundColor: "#FFFCF2",
    height: "1200px",
    width: "1920px",
  };

  const foot = {
    background: "#252422",
    width: "100%",
    height: "220px",
    bottom: "0%",
    left: "0%",
  };

  const box = {
    background: "#696969",
    width: "32%",
    height: "50%",
    right: "34%",
    top: "19%",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(auth, emailVal)
      .then((data) => {
        message.success("Check your email");

        // alert("Check your email");
        history("/");
      })
      .catch((err) => {
        message.error("User not found");
        //alert(err.code);
      });
  };

  return (
    <CContainer fluid style={{ ...page, position: "relative" }}>
      <CRow>
        <NavBar style={{ position: "absolute", top: "0%" }}></NavBar>
      </CRow>
      <div
        style={{
          background: "#252422",
          position: "absolute",
          borderRadius: "50%",
          width: "40%",
          height: "60%",
          right: "0%",
          top: "9.5%",
        }}
      ></div>
      <div
        style={{
          background: "#EB5E28",
          position: "absolute",
          borderRadius: "50%",
          width: "40%",
          height: "60%",
          left: "0%",
          top: "20%",
        }}
      ></div>

      <div
        style={{
          ...box,
          boxShadow: "2px 2px 5px black",
          position: "absolute",
          borderRadius: "50px",
        }}
      ></div>
      <h1
        style={{
          color: "#FFFFFF",
          position: "absolute",
          width: "25%",
          left: "37.5%",
          top: "260px",
        }}
      >
        Reset Password
      </h1>
      <form
        style={{
          color: "#FFFFFF",
          position: "absolute",
          top: "270px",
          left: "38%",
          width: "25%",
          height: "25%",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          style={{
            position: "absolute",
            left: "0px",
            top: "62%",
            height: "18%",
            fontSize: "80%",
            borderRadius:"14px"
          }}
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
        />
        <br />
        <br />
        <button
          style={{
            background: "#EB5E28",
            borderRadius: "20px",
            position: "absolute",
            left: "14%",
            top: "140%",
            width: "70%",
            height: "18%",
          }}
          type="submit"
          className="btn btn-primary"
        >
          Reset
        </button>
        <p  style={{color :"black",position: "absolute", left:"1%", top:"36%",fontSize:"17px" ,textAlign:"start"}} >Please enter the email address you would like your password reset information sent to </p>
        <a  style={{color :"#00002F",position: "absolute", left:"36%", top:"165%",fontSize:"18px"}} href="/Signin">Back To Login</a>
      </form>
      <div>
        <div className="" style={{ ...foot, position: "absolute" }}>
          <footer
            style={{
              textAlign: "center",
              color: "#FFFFFF",
              width: "100%",
              position: "absolute",
              top: "60px",
            }}
          >
            <span>
              <a href="https://www.twitter.com">
                <FaTwitter className="icon" size={32} color="#00acee" />
              </a>
              <a href="https://www.facebook.com">
                <FaFacebook className="icon" size={32} color="#3b5998" />
              </a>
              <a href="https://www.whatsapp.com">
                <FaWhatsapp className="icon" size={32} color="#25D366" />
              </a>
            </span>
            <h6>+962 777777777</h6>
            <h6>intelliGym@info.com</h6>
            <p>
              &copy; <span>{year}</span> Copyright All Rights Reserves
            </p>
          </footer>
        </div>
      </div>
    </CContainer>
  );
}

export default ForgotPassword;