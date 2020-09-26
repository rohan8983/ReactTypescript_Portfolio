import * as React from "react";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

export default function Container() {
  return (
    <main id="main">
      <About title="About" />
      <Skills title="Skills" />
      <Resume title="Resume" />
      <Testimonials title="Testimonials" />
      <Contact title="Contact" />
    </main>
  );
}
