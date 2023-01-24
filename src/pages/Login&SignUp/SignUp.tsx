import React, { useState } from "react";
import logo from "../Images/LogoTransparente.png";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "../../components/forms/registerForm";
import "./styles.css";

export const SignUpPage: React.FC<{}> = () => {

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });


  return (
    <div className="pageBody">
      <div className="container-form gap-SU">        
        <h2 className="font-weight-bold">SIGN UP</h2>
        <Image src={logo} className="img-fluid" alt="logo"></Image>
        <h3 className="font-weight-bold">CROMBIE</h3>
        <RegisterForm></RegisterForm>
        <p style={{ fontSize: "small" }}>Do you already have an account? <a href="/login">Sign in here.</a></p>
      </div>
    </div>
  );
};
