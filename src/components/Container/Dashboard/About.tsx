import * as React from "react";
interface IAbout {
  title: string;
}
export default function About(props: IAbout) {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{props.title}</h2>
          <p>
            {" "}
            “I’m an innovative software engineer with 3+ years of experience
            managing all aspects of the development process for small to
            medium-sized companies.”
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="public/assets/img/profile-img.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Mobile &amp; Web Fullstack Developer.</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Birthday:</strong>
                    30 May 1995
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Website:</strong>
                    rohan-chougule.vercel.app
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Phone:</strong>
                    (+91)-9511998983
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>City:</strong>
                    Pune, India
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Age:</strong>
                    25
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Degree:</strong>
                    Bachelor
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Email:</strong>
                    rohanchougule3410@outlook.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Freelance:</strong>
                    Available
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I am Rohan Working as a <b>Software Engineer</b> in Zoonga at
              Pune, Maharashtra. I have total{" "}
              <b>3+ Years of experience in Software develpoment </b>
              in that 3+ Years of experience in JavaScript, ReactJs, Redux,
              HTML, CSS, Typescript as Front-End developer & 1.8 Years of
              experience in NodeJs, ExpressJs, MongoDB, Oracle as Back-End
              developer. My responsibility includes design and development of
              user interface using ReactJs/NodeJs Technologies, providing
              technical support and knowledge transfer to my co-workers. I have
              a good knowledge of JavaScript and ReactJs Web application
              development. I have worked in different domain like E-Commerce,
              Video Conferencing, Web Conferencing, and Insurance domain. I have
              worked on Project like GoLive, E-Mulakat & FeelitLIVE. I have
              worked for some of the clients like Volkswagen, Indian Oil
              Corporation, and Bajaj etc. .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
