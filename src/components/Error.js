import React from "react";
import { ErrorStyles } from "./Error.styles";
import MarsImage from "../img/mars-dan-gerhards-01.svg";

const Error = () => {
  return (
    <ErrorStyles>
      <img src={MarsImage} alt="mars" />
      <div style={{ width: "300px" }}>
        Unfortunately due to dust falling on solar batteries and therefore lack
        of energy, InSight has suspended daily temperature measurements. Get the
        latest Mars weather from the{" "}
        <a
          href="https://mars.nasa.gov/msl/weather/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Curiosity Rover
        </a>
        . Please have a look at{" "}
        <a
          href="https://github.com/misza777/Mars_Weather_App_React"
          target="_blank"
          rel="noopener noreferrer"
        >
          app github repository
        </a>
        .
      </div>
    </ErrorStyles>
  );
};

export default Error;
