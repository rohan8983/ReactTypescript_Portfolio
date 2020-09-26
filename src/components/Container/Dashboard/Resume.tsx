import * as React from "react";
interface IResume {
  title: string;
}
export default function Resume(props: IResume) {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up" id="module">
        <div className="section-title">
          <h2>{props.title}</h2>
          <p></p>
        </div>
        <div className="collapse" id="collapseExample" aria-expanded="false">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Computer Science (B.C.S.)</h4>
                <h5>JUN 2013 - OCT 2016</h5>
                <p>Sadguru Gadage Maharaj College, Karad</p>
                <p>
                  <em>Shivaji University, Kolhapur</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Higher Secondary Certificate (H.S.C.)</h4>
                <h5>JUN 2012 - FEB 2013</h5>
                <p>Sadguru Gadage Maharaj College, Karad</p>
                <p>
                  <em>
                    Maharashtra State Board Of Secondary And Higher Secondary
                    Education
                  </em>
                </p>
              </div>
              <div className="resume-item">
                <h4>Secondary School Certificate (S.S.C.)</h4>
                <h5>JUN 2010 - APR 2011</h5>
                <p>Adarsh Vidya Mandir, Karad</p>
                <p>
                  <em>
                    Maharashtra State Board Of Secondary And Higher Secondary
                    Education
                  </em>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Engineer (Front-End Developer)</h4>
                <h5>FEB 2019 - Present</h5>
                <p>
                  <em>
                    Zoonga, Shivganga Apartments, 7, Senapati Bapat Rd, Pune,
                    Maharashtra 411016
                  </em>
                </p>
                <ul>
                  <li>
                    Meeting with the development team to discuss user interface
                    ideas and applications.
                  </li>
                  <li>
                    Researched, designed and implemented scalable applications
                    for information identification, extraction, analysis,
                    retrieval and indexing.
                  </li>
                  <li>
                    Supported software integration and implemented maintenance
                    enhancements to bolster product development cycle.
                  </li>
                  <li>
                    Developing and implementing highly-responsive user interface
                    components using React concepts.
                  </li>

                  <li>
                    Worked with project managers, developers, quality assurance
                    and customers to resolve technical issues.
                  </li>
                  <li>
                    Troubleshooting interface software and debugging application
                    codes and Monitoring and improving front-end performance.
                  </li>
                  <li>
                    Maintained effective customer relationships and identified
                    future business opportunities to support and strengthen
                    corporation mission.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Junior Software Developer (Full-Stack Developer)</h4>
                <h5>SEP 2017 - FEB 2019</h5>
                <p>
                  <em>
                    Peoplelink Unified Communications Pvt. Ltd. Regd. Office and
                    H.Q.:Q3-A3, 10th Floor, Cyber Towers Hitech City, Madhapur,
                    Hyderabad - 500081
                  </em>
                </p>
                <ul>
                  <li>
                    Collaborated on all stages of systems development lifecycle,
                    from requirement gathering to production releases.
                  </li>
                  <li>
                    Coordinated with project management staff on database
                    development timelines and project scope.
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate graphic design
                  </li>
                  <li>
                    Contributed ideas and suggestions in team meetings and
                    delivered updates on deadlines, designs and enhancements.
                  </li>
                  <li>
                    Learned software engineering process improvements and best
                    practices.
                  </li>
                  <li>
                    Delivered and maintained scalable system architecture to
                    support high-availability Internet site with various
                    internal applications.
                  </li>
                  <li>
                    Integration of user-facing elements developed by front-end
                    developers with server side logic and Writing reusable,
                    testable, and efficient code.
                  </li>
                  <li>
                    Design and implementation of low-latency and performant
                    applications and Implementation of security and data
                    protection using Node.Js, MongoDB, React.Js, Redux,
                    Socket.IO and WebRTC.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a
          role="button"
          className="collapsed"
          data-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        ></a>
      </div>
    </section>
  );
}
