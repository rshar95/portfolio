import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "": {
        title: "",
        desc:
          "Utilizing AI and core blockchain technology to tackle biggest supply chain issues of the Fashion Industry.",
        techStack: "AI, Blockchain,NFTs, Fullstack Development",
        link: "https://flutrai.com/litepaper",
        open: "https://flutrai.com",
        image: "/assets/1.png"
      },
      "Quantum Walks": {
        title: "Quantum Walks",
        desc:
          "Exploring Novel disorders in Quantum Systems",
        techStack: "C++,Python",
        link: "https://github.com/rshar95/QWalks-Software",
        open: "https://github.com/rshar95/QWalks-Software",
        image: "/assets/quantum_walks.gif"
      },
      "Publications": {
        title: "Transport and Localization in Quantum Walks on a Random Hierarchy of Barriers",
        desc:
          "",
        techStack: "Python, C++, Mathematica, Calculus, Quantum Walks, Quantum Computing",
        link: "https://iopscience.iop.org/article/10.1088/1751-8121/ac7117/meta",
        open: "https://iopscience.iop.org/article/10.1088/1751-8121/ac7117/meta",
        image: "/assets/3.png"
      },
      "StockTwits Sentiment Analysis": {
        title: "StockTwits Sentiment Analysis",
        desc:
          "Developed deep learning model for the classification of sentiments of messages between investors and traders on StockTwits.",
        techStack: "Python, Deep Learning, ML",
        link: "https://github.com/rshar95/StockTwits",
        open: "https://github.com/rshar95/StockTwits",
        image: "/assets/4.png"
      }
      
    };
    const projects = {
      "FlutrAI": {
        desc:"Utilizing AI and core blockchain technology to tackle biggest supply chain issues of the Fashion Industry.",
        techStack: "AI, Blockchain,NFTs, MERN Stack",
        link: "https://flutrai.com/litepaper",
        open: "https://flutrai.com",
      },
      "Publications": {
        desc:
          "Studied transport within a spatially heterogeneous one-dimensional quantum walk with a combination of hierarchical and random barriers.",
        techStack: "Python, C++, Mathematica, Calculus, Quantum Walks, Quantum Computing",
        link: "https://iopscience.iop.org/article/10.1088/1751-8121/ac7117/meta",
        open: "https://iopscience.iop.org/article/10.1088/1751-8121/ac7117/meta",
        
      },
      "StockTwits Sentiment Analysis": {
        desc:
          "Developed deep learning model for the classification of sentiments of messages between investors and traders on StockTwits.",
        techStack: "Python, Deep Learning, ML",
        link: "https://github.com/rshar95/StockTwits",
        open: "https://github.com/rshar95/StockTwits",
        
      },
      
      "Quantum Walks": {
        desc:
          "Exploring Novel disorders in Quantum Systems.",
        techStack: "C++,Python",
        link: "https://github.com/rshar95/QWalks-Software",
        open: "https://github.com/rshar95/QWalks-Software"
      },
      "BayesianInference": {
        desc:
          "Developing some simple ML codes to calculate Bayesian Inference on Media Mix models",
        techStack: "Python, Maths, Probabilty, Statistical Inference",
        link: "https://github.com/rshar95/BayesianInference",
        open: "https://github.com/rshar95/BayesianInference"
      },
      "CryptoBot": {
        desc:
          "Low Latency C++ Crypto Bot to execute trade based on capturing Alpha in high frequency trading.",
        techStack: "C++, Multithreading",
        link: "https://github.com/rshar95/cryptobot",
        open: "https://github.com/rshar95/cryptobot"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ work-snapshots</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
