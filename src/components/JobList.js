import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "FlutrAI": {
      jobTitle: "Founder and CEO @",
      duration: "January 2023 - Present",
      desc: [
        "Disrupting how individuals and brands invest in fashion.",
        "Helping Fashion Industry solve its $500 billion annual waste crisis.",
        <>
          Developing and Testing Beta within fashion enthusiasts of New York, Miami, and LA. Shoot me an email if you want to be on the list or visit 
          <a href="https://flutrai.com/" target="_blank" rel="noopener noreferrer">{" "}FlutrAI</a>.
        </>,
      ]
      
    },

    "Topcoder": {
      jobTitle: "Machine Learning Engineer @",
      duration: "MARCH 2022 - DECEMBER 2022",
      desc: [
        "Led engineering team to upgrade the legacy recommender engine to improve search/recommendations by 200x efficiency.",
        "Built data ingestion and feature engineering library for 5 million members and 10k+ Challenges with daily refresh.",
        "Deployed end to end pipeline for complex ML models, with >96% positive feedback.Compressed/Encoded data to make modified KNN clustering models 1000x efficient."
      ]
    },
    "Pepsico": {
      jobTitle: "Machine Learning Engineer & DataScientist @",
      duration: "MARCH 2022 - NOVEMBER 2022",
      desc: [
        "Worked on the Feature Engineering and model deployment ends of the pipeline, developed methods to ingest large datasets across all the brands of Pepsico, and engineered features pertaining to the North America Market.",
        "Ran experiments on the Pepsico MMX datasets across all brands, to find ROI on each advertising channel."
      ]
    },
    "GLG": {
      jobTitle: "Quantum Computing Consultant @",
      duration: "MARCH 2022 - Present",
      desc: [
        "Helped Fortune 500 companies make crucial decisions about their infrastructure for the Quantum Technology and Transition from digital to quantum."
      ]
    },
    "Emory University": {
      jobTitle: "Quantum Physicist @",
      duration: "AUGUST 2019 - AUGUST 2021",
      desc: [
        "Worked under Prof. Boettcher, on Quantum Walks and Computational Physics. Designed a Novel Quantum System implementing Quantum Walks with Novel Phase disorders. Developed QWalks Software, utilizing Python and C++, and gained system’s parameters of localization for the Quantum Particle.",
        "Utilized Convolutional Neural Networks to predict the Quantum Advantage of the system by feeding known parameters to the network.",
        "Used Shooting method for solving Differential Equations in Mathematical Physics Projects sinvolving Novel PT Symmetric potential."
      ]
    },
    
    "KEK,Japan + SAMEER, Mumbai": {
      jobTitle: "Research Scientist @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Member of a crucial team for Design and Implementation of first ever Large Scale Synchrotron cancer therapy facility.",
        "Researched and productionalized ML models on the large cancer research datasets, designed virtual accelator experiments utilizing C++, optimizing on Super Computers with multithreading libraries.",
        "Worked on Linear Accelerators and Simulated Transfer Matrix for 6 MeV Linac. Presented progress of the work at Accelerator School held at KEK, Japan. (Dec 2018)"
      ]
    },
    "BARC": {
      jobTitle: "Machine Learning Intern @",
      duration: "MAY 2016 - AUG 2016",
      desc: [
        "Developed a Brain-Computer interface for KUKA robotic arm and EEG controller. Designed and implemented the experiments to capture hand-motion and EEG signals successfully.",
        "Built a binary classifier to distinguish the data of the left and right brain signals.",
        "Successfully trained the Neural Networks for Binary Classifier using Matlab's deep learning toolkit and increased the accuracy of the model from 70% to 96.3%."
      ]
    },
    "NSUT (previously Delhi University)": {
      jobTitle: "Research Assistant @",
      duration: "MAY 2015 - AUG 2017",
      desc: [
        "Researched Quantum Electronics(RTDs) and alternatives to CMOS-based SRAM chips. Modeled and simulated novel devices.",
        "Developed Simulations of concepts like Quantum Computing Principles including Entanglement, Algorithms and Quantum Key Distribution.",
        "Researched & Awarded for Poster Presentation on Nanoscience and technology of Carbon Nanotubes for optics @ ThinkNano "
      ]
    }
  };

  


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;


