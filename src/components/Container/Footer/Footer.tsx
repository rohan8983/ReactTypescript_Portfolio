import * as React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer  */}
      <footer id="footer">
        <div className="container">
          <p>
            “Any fool can write code that a computer can understand. Good
            programmers write code that humans can understand.” - Martin Fowler
          </p>
          <div className="social-links">
            <a href="https://twitter.com/rohan6585" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://facebook.com/RohAn3410" className="facebook">
              <i
                className="bx
              bxl-facebook"
              ></i>
            </a>
            <a href="https://instagram.com" className="instagram">
              <i
                className="bx
              bxl-instagram"
              ></i>
            </a>
            <a href="rohanchougule888@gmail.com" className="google-plus">
              <i
                className="bx
              bxl-skype"
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-chougule-5a5210138/"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <a href="#" className="back-to-top">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
      <div id="preloader"></div>
    </>
  );
}
