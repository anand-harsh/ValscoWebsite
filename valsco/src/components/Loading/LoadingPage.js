import React, { useEffect, useState } from "react";
import "./LoadingPage.css";
import LandingPage from "../Landing/LandingPage";
import { Helmet } from "react-helmet-async";

export const LoadingPage = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const boxNone = () => {
      let box = document.getElementsByClassName("box")[0];
      if (box) {
        box.style.display = "none";
        let text = document.getElementsByClassName("text")[0];
        text.style.display = "flex";
        text.style.flexWrap = "wrap";
      }
    };

    const allDis = () => {
      let text = document.getElementsByClassName("text")[0];
      if (text) {
        text.classList.add("pos");
      }
    };

    const showOneByOne = () => {
      let hide = document.getElementsByClassName("hide");
      let counter = 0;

      const showNext = () => {
        if (hide && counter < hide.length) {
          hide[counter].classList.add("show" + counter);
          counter++;
          setTimeout(showNext, 600);
        }
      };

      showNext();
      setTimeout(() => {
        setIsLoadingComplete(true);
      }, 3500);
    };

    setTimeout(boxNone, 820);
    setTimeout(allDis, 1500);
    setTimeout(showOneByOne, 1000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Valsco</title>
        <title>Welcome to VALSCO - Empowering Solutions</title>
        <meta
          name="description"
          content="Welcome to Valsco! We provide innovative software products and services to businesses and individuals, tailored to meet their unique needs. Explore our solutions today."
        />
      </Helmet>
      <div>
        {!isLoadingComplete ? (
          <div className="plan">
            <div className="box">
              <video src="tv.mp3"></video>
            </div>
            <div className="text">
              <span className="center">V</span>
              <span className="hide">A</span>
              <span className="hide">L</span>
              <span className="hide">S</span>
              <span className="hide">C</span>
              <span className="hide">O</span>
            </div>
          </div>
        ) : (
          <LandingPage className={isLoadingComplete ? "show" : "hide"} />
        )}
      </div>
    </>
  );
};
