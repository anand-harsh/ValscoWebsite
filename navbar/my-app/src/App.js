import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
    <div className="animate__animated animate__slideInDown" id="top">
      <div className="row" id="row1">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-white p-3">
            <button
              type="button"
              className="btn btn dropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="homeb"
            >
              Home
            </button>
            <div className="btn-group dropend">
              <a
                href="#productsrow2"
                className="btn btn-info"
                role="button"
                id="productsb"
                >Products</a
              >
            </div>
            <div className="btn-group dropend">
              <a
                href="#productsrow2"
                className="btn btn-info"
                role="button"
                id="aboutusb"
                >About us</a
              >
            </div>
            <div className="btn-group dropend">
              <a
                href="#contactusrow2"
                className="btn btn-info"
                role="button"
                id="contactus"
                >Contact Us</a
              >
            </div>
          </div>
        </div>
        <nav className="navbar navbar-white bg-white">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="col-1 up" id="coll">
              <img src={require("./logooo.png")} id="tl" alt="Logo" />
            </div>
            <div className="col-md-3 up">
              <div className="heading">
                Valsco Technology
              </div>
            </div>
            <div className="col-1 offset-3 a" id="home">
              <div className="btn-group dropend">
                <button
                  type="button"
                  className="btn btn dropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="homeb"
                >
                  Home
                </button>
              </div>
            </div>
            <div className="col-1 a">
              <div className="btn-group dropend">
                <a
                  href="#productsrow2"
                  className="btn btn-info"
                  role="button"
                  id="productsb"
                  >Products</a
                >
              </div>
            </div>
            <div className="col-1 a">
              <div className="btn-group dropend">
                <a
                  href="#productsrow2"
                  className="btn btn-info"
                  role="button"
                  id="aboutusb"
                  >About us</a
                >
              </div>
            </div>
            <div className="col-1 a">
              <div className="btn-group dropend">
                <a
                  href="#contactusrow2"
                  className="btn btn-info"
                  role="button"
                  id="contactus"
                  >Contact Us</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
  );
}

export default App;
