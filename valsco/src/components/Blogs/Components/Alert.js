import React from "react";
import { Helmet } from "react-helmet-async";

const Alert = (props) => {
  setTimeout(() => {
    localStorage.setItem("alertMsg", "");
    props.setAlertMsg("");
  }, 4000);

  return (
    <>
      <Helmet>
        <title>{props.alertMsg ? props.alertMsg : "Alert"}</title>
      </Helmet>
      <div className="alert-main-div">
        {props.alertMsg && props.alertMsg != "" && (
          <div
            className="alert-div"
            style={{ backgroundColor: `${props.alertColor}` }}
          >
            {props.alertMsg}
          </div>
        )}
      </div>
    </>
  );
};

export default Alert;
