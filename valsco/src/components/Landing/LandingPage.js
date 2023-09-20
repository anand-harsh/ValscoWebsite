import "./LandingPage.css"
import React from "react"
import imgvalsco from "../images/img2.png"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"


function LandingPage() {
  return (
    <>
    <Helmet>
        <title>Loading - Valsco</title>
        <meta
          name="description"
          content="Experience the loading animation of VALSCO before exploring our innovative software solutions. Stay tuned for exciting content!"
        />
        <link rel="canonical" href="/loading" />
      </Helmet>
      <div className="wrapper">
        <div className="main">
          <div className="front">
            <div className="img1">
              <img
                src={require("../../components/images/newlogo.png")}
                id="lgo"
                alt="gb"
              />
            </div>
          </div>
          <div className="para">
            <span>VALSCO</span>
            <p>
              Our company provides software products and services to businesses
              individuals to help them meet their software needs. We strive to
              specialize in developing software solutions tailored to the unique
              needs of our clients.
            </p>
          </div>
        </div>
      </div>

      {/* <div className='imghovercontainer'>
      <img className="imghover" src={imgvalsco} alt="" />
    </div> */}
    </>
  )
}

export default LandingPage
