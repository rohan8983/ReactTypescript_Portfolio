import * as React from "react";
interface ISkills {
  title: string;
}
export default function Skills(props: ISkills) {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{props.title}</h2>
          <p></p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">HTML</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                >
                  <i className="val">90%</i>
                </div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">CSS</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "50%" }}
                >
                  <i className="val">50%</i>
                </div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">JavaScript</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                >
                  <i className="val">90%</i>
                </div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Redux</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                >
                  <i className="val">90%</i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">ReactJs</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">NodeJs</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">Typescript</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                >
                  <i className="val">80%</i>
                </div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">React Native</span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                >
                  <i className="val">80%</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
