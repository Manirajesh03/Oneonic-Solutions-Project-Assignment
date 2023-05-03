import React from "react";
import image from "../Assets/Images/logo.png";
import "./components.css";

const Footer = () => {
  return (
    <div className="d-flex  my-footer">
      <div className="col mb-3 mt-5 mx-5 footer-img">
        <img
          src={image}
          alt="logo"
          width="112px"
          height="51px"
          style={{ marginBottom: "26px" }}
        />
        <p
          className="text-body-secondary"
          style={{
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "24px",
            width: "255px",
            height: "72px",
          }}
        >
          Lorem ipsum is typically a corrupted version of 'De finibus bonorum et
          malorum', a 1st century BC
        </p>
      </div>
      <div>
        <footer className="py-5">
          <div className="row">
            <div className="col-3 col-md-1 mb-3 footer-col">
              <h5 className="footer-header">Company</h5>
              <ul className="nav flex-column ">
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    About us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Career
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Blog
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Rent Guides
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Pricing
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Demo
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-3 col-md-1 mb-3 footer-col">
              <h5 className="footer-header">Support</h5>
              <ul className="nav flex-column flex-col">
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Contact us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Terms & Condition
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Sitemap
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-3 col-md-1 mb-3 footer-col">
              <h5 className="footer-header">Media</h5>
              <ul className="nav flex-column flex-col">
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Facebook
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Twitter
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Youtube
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a className="nav-link p-0 text-body-secondary text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3 col-md-3 mb-3 footer-col">
              {/* col-6 col-md-2 mb-3 footer-col */}
              {/* col-md-5 offset-md-1 mb-3 footer-col */}

              <h5 className="footer-header">Subscribe Us</h5>
              <div className="d-flex w-100 gap-2 flex-column">
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control w-100 place"
                  placeholder="Your email here..."
                />
                <button className="btn btn-light btn-last" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
