import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../Blogs/Blogs.css";
import "./StyleBlog.css";
import { Helmet } from "react-helmet-async";

export default function Login(props) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("authenticated", true);
        props.setAuthenticated(true);
        localStorage.setItem(
          "alertMsg",
          "You have been successfully logged in!"
        );
        props.setAlertMsg("You have been successfully logged in!");
        localStorage.setItem("alertColor", "lightgreen");
        props.setAlertColor("lightgreen");
        navigate("/BlogHome");
      })
      .catch((error) => {
        console.log("Caught error Popup closed");
      });
  };
  return (
    <>
      <Helmet>
        <title>Login - VALSCO Blog</title>
        <meta
          name="description"
          content="Login to create your own blogs and join the Valsco Technology blogging community."
        />
      </Helmet>
      <h3 className="login-head">Login to create your own blogs.</h3>
      <div className="login-div">
        <img
          src={require("../../../components/images/login-image.png")}
          id="login-img"
          alt="login-img"
        />
        <h1>Login</h1>
        <p>Login With Google</p>
        <button className="login-btn" onClick={signInWithGoogle}>
          <img
            src={require("../../../components/images/google-image.png")}
            id="google-img"
            className="mx-2"
          />
        </button>
      </div>
    </>
  );
}
