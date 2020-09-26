import * as React from "react";
interface IContact {
  title: string;
}
export default function HeroSection() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Rohan Chougule</h1>
        <p>
          I'm{" "}
          <span
            className="txt-rotate"
            data-period="2000"
            data-rotate='[  "Designer.", "Developer.", "Freelancer.", "Photographer." ]'
          ></span>
        </p>
        <div className="social-links">
          <a
            href="https://twitter.com/rohan6585"
            className="twitter"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="https://m.facebook.com/RohAn3410"
            className="facebook"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            className="instagram"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://myaccount.google.com/u/2/profile?pli=1"
            className="google-plus"
            target="_blank"
          >
            <i className="bx bxl-skype"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-chougule-5a5210138"
            className="linkedin"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
