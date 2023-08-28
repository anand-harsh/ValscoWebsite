import React, { useState } from "react";
import "./Contact.css";
import { useForm, Controller, set } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import validator from "validator";
import { Helmet } from "react-helmet-async";

const backendURL = "https://valscobackendtest.onrender.com";
// const backendURL = "http://localhost:5000"

const PHONE_REGEX = new RegExp(
  /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,4}$/
);

function Contact() {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOnChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
    const inputs = document.querySelectorAll("input");
    const validity = [...inputs].every((input) => input.checkValidity());
    setIsValid(!validity);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const url =
      "https://website-bad9f-default-rtdb.asia-southeast1.firebasedatabase.app/contactUsRecords.json";

    try {
      newContact.name = newContact.name.trim();
      newContact.email = newContact.email.trim();
      newContact.company = newContact.company.trim();
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newContact.name,
          email: newContact.email,
          number: newContact.number,
          company: newContact.company,
        }),
      });
      // console.log(response);

      setIsSuccess(true);
      setIsValid(true);
      let savedEmail = newContact.email;
      let savedName = newContact.name;
      setTimeout(() => {
        setIsSuccess(false);
        setNewContact({ name: "", email: "", number: "", company: "" });
      }, 3000);
      const response2 = await fetch(backendURL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: savedName, email: savedEmail }),
      });

      // console.log(response2);
    } catch (error) {
      alert(`The Following Error Occured: ${error}.\nKindly Try Again!`);
      setNewContact({ name: "", email: "", number: "", company: "" });
    }
  };

  return (
    <>
      <Helmet>
        <title>VALSCO</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div id="aboutuspage" className="complete">
        <div className="abtus">
          <div className="header">
            <h1>WHO WE ARE</h1>
          </div>
          <div className="info">
            <img src={require("../../components/images/abt.jpeg")} alt="y" />
            <div classname="paragraph">
              <p className="people">OUR PEOPLE COME FIRST</p>
              <br></br>
              <p className="peoppara">
                Valsco specializes in developing custom software solutions that
                are tailored to meet the unique needs of the clients. We
                understand that investing in software solutions is a big
                decision for any business. That is why we offer a comprehensive
                range of services that go beyond just software development. Our
                consulting, training, and support services are designed to
                ensure that our clients can get the most out of their needs and
                visions. Valsco focuses on innovation and development. This
                involves constantly exploring new technologies, methods, and
                processes to create software solutions that are more efficient,
                effective, and user-friendly. In addition to innovation, we as a
                company also focus on improving its products, processes, and
                services. This involves regularly evaluating the effectiveness
                of existing solutions and identifying areas for improvement.
                Continuous improvement ensures that our company is always of the
                highest quality and offers maximum value to customers. Our team
                of experienced developers, designers, and project managers work
                closely with our clients to ensure that their software solutions
                are not only user-friendly, but also efficient and effective.
              </p>
              <p className="mobile">
                At Valsco , we specialize in crafting custom software solutions
                tailored to our clients' unique needs. Our services extend
                beyond development, encompassing consulting, training, and
                support to ensure our clients achieve their visions. Innovation
                is our hallmark, as we continuously explore new technologies to
                create efficient, user-friendly solutions. With a team of
                experienced developers, designers, and project managers, we
                excel in website development, mobile applications, personalized
                software, and more. Our commitment to improvement guarantees
                high-quality solutions that deliver maximum value.
              </p>
            </div>
          </div>
        </div>
        <div className="App">
          <div className="card-group" id="aboutus">
            <div className="card">
              <img
                src={require("../../components/images/newi2.jpeg")}
                className="car"
                alt="y"
              />
              <div className="card-body">
                <h5 className="card-title">Ayan Bhowal</h5>
                <p className="card-text">Co-Founder</p>
                <p className="ap">
                  Ayan Bhowal is our approachable, dependable, and vastly
                  talented Director. With his composed and collected demeanor
                  and persistent drive, Valsco is positioned to prosper and
                  thrive.
                </p>
              </div>
            </div>
            <div className="card" id="sac">
              <img
                src={require("../../components/images/newi11.jpeg")}
                className="car"
                alt="tp"
              />
              <div className="card-body">
                <h5 className="card-title">Sanidhya Agarwal</h5>
                <p className="card-text">Founder</p>
                <p className="sap">
                  Sanidhya Agarwal, our Managing Director, has amazing
                  leadership qualities and a very advanced and holistic vision
                  for Valsco. With his keen eye for detall and strive for
                  perfection.
                </p>
              </div>
            </div>
            <div className="card" id="shc">
              <img
                src={require("../../components/images/newi32.jpeg")}
                className="car"
                alt="p"
              />
              <div className="card-body">
                <h5 className="card-title">Srishti Jain</h5>
                <p className="card-text">Co-Founder</p>
                <p className="sp">
                  Srishti Jain, our Director, is dependable, resourceful and
                  always ready to take up challenges. With an amazing team
                  spirit, she brings to the Valsco table amazing skills and
                  proficiency
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="contactuspage" className="form">
          <div className="titl">
            <h1>FUEL.</h1>
            <h1>ELEVATE.</h1>
            <h1>IGNITE YOUR</h1>
            <h1>SW SOLUTIONS.</h1>
          </div>
          <div className="p-contact">
            <p>
              "Ready to take your business to the next level?" Contact us today
              and discover how Valsco can empower your success. Our dedicated
              team of experts is here to provide you with cutting-edge software
              solutions tailored to your specific needs. Reach out to us now to
              schedule a consultation and explore the possibilities. Let us
              transform your business and drive it towards greater efficiency,
              productivity, and growth. Don't wait - unlock your full potential
              with Valsco. Contact us today.
            </p>
            <br />
            <p>
              Experience the Valsco Difference, Request a Consultation Today!
            </p>
          </div>
          <div className="b-form" id="contactusrow2">
            <form method="POST" action={backendURL}>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  onChange={handleOnChange}
                  value={newContact.name}
                  placeholder="Your Name"
                  name="name"
                  required
                  pattern="^[A-Za-z\s.]{3,50}$"
                />
                <span className="inputSpan">
                  Name should be 3-50 Characters Long
                </span>
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleOnChange}
                  value={newContact.email}
                  placeholder="Your Email"
                  name="email"
                  required
                />
                <span className="inputSpan">Please enter a Valid Email!</span>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="number"
                    onChange={handleOnChange}
                    value={newContact.number}
                    placeholder="Your Phone Number"
                    name="number"
                    required
                    pattern="^(?:\+91\d{10}|\d{10})$"
                  />
                  <span className="inputSpan">
                    Please Enter a Valid Phone Number
                  </span>
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  onChange={handleOnChange}
                  value={newContact.company}
                  placeholder="Your Company/Organisation"
                  name="company"
                  required
                  pattern="^[A-Za-z\s0-9.\+\$\*\\]{3,100}$"
                />
                <span className="inputSpan">
                  Company Name Should be 3-50 Characters Long
                </span>
              </div>
              <button
                type="submit"
                className="btn btn-primary transparent-button"
                id="formSubmitButton"
                onClick={handleFormSubmit}
                disabled={isValid}
              >
                Click to send your message
              </button>
              {isSuccess && (
                <div id="successfulMessage">
                  Your Message Sent Successfully!
                </div>
              )}
            </form>
          </div>
          <div className="bottom">
            <h1 id="ide">Have an Idea?</h1>
            <h1 id="tell">Tell us about It!</h1>
            <div className="privacy">
              <p1>
                <a href="mailto:connect@valscotech.com">
                  connect@valscotech.com
                </a>
              </p1>
              <p2>J-3 SHAHABDI ENCLAVE</p2>
              <p2>NOIDA, UTTAR PRADESH 201301</p2>
              <p4>Privacy Policy</p4>
            </div>
          </div>
          <div className="foot">
            <div className="f">
              <div className="flex-center">
                <i
                  className="fa fa-github fa-4x icon-3d"
                  style={{ fontSize: "48px" }}
                ></i>
                <i
                  className="fa fa-twitter fa-4x icon-3d"
                  style={{ fontSize: "48px" }}
                ></i>
                <i
                  className="fa fa-facebook fa-4x icon-3d"
                  style={{ fontSize: "48px" }}
                ></i>
                <a
                  href="https://instagram.com/vals.co_tech?igshid=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-instagram fa-4x icon-3d"
                    style={{ fontSize: "48px" }}
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/valscotech/?fbclid=PAAaZ3ATa670NzIC1DB7OLSwzO9bOqISugzSF9Bs-sWUJjBBKLuYvnkm-qUJw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-linkedin fa-4x icon-3d"
                    style={{ fontSize: "48px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
