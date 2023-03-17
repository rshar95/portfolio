import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        In 2021, I graduated with a <b>Masters of Physics</b> from
        <a href="https://physics.emory.edu/home/index.html">
          {" "}
          Emory University
          {" "}
        </a>
        under <a href="https://physics.emory.edu/faculty/boettcher/">
          {" "}
          Prof. Stefan Boettcher
        </a> . 
        After graduation, I worked in the industry on the cutting edge Research & Development teams for Fortune 500 clients, enabling the 
        industrial giants to make better decisions using the data, and deploying Machine Learning 
        powered products for their platforms i.e Recommender Engines, Bayesian Inference Models for ROI Predictions, etc.
        Recently founded 
       {" "}
        <a href="https://flutrai.com/">FlutrAI</a>.
      </p>
    );
    const two = (
      <p>
        I'm passionate about using my experience in closing the gap for underrepresented groups to get
        into the Tech Industry or Cutting-Edge Research. In the free time you can catch me creating content
        around lifestyle, academia, physics, and productivity.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:founder@flutrai.com">
        founder@flutrai.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "C++",
      "Deep Learning",
      "PyTorch",
      "NLP",
      "Quantum ML"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
