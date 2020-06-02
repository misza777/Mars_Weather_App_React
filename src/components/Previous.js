import React from "react";
// Styles
import {
  PreviousWrapper,
  Toggle,
  PreviousDays,
  PreviousDay,
} from "./Previous.styles";
import {formatTemperature} from "../helpers";

const Previous = ({
  isMetric,
  weather,
  previous,
  setPrevious,
  setSelectedSol,
}) => (
  <PreviousWrapper previous={previous}>
    <Toggle
      htmlFor="weather-toggle"
      onClick={() => setPrevious((prev) => !prev)}
      previous={previous}
    >
      <span>&#8593;</span>
      <span className="sr-only">Show previous weather</span>
    </Toggle>

    <h2 className="main-title previous-weather__title">Previous 7 days</h2>
    <PreviousDays weather={weather}>
      {weather.map((sol, i) => (
        <PreviousDay key={sol.sol} previous={previous}>
          <h3 className=".previous-day__sol">Sol {sol.sol}</h3>
          <p className="previous-day__date">{sol.date}</p>
          <p className="previous-day__date">{sol.season}</p>
          <p className="previous-day__temp">
            High: <span>{formatTemperature(sol.maxTemp, isMetric)}</span> °
            <span>{isMetric ? "C" : "F"}</span>
          </p>
          <p className="previous-day__temp">
            Low: High: <span>{formatTemperature(sol.minTemp, isMetric)}</span> °
            <span>{isMetric ? "C" : "F"}</span>
          </p>
          <button
            className="previous-day__more-info"
            onClick={() => setSelectedSol(i)}
          >
            More info
          </button>
        </PreviousDay>
      ))}
    </PreviousDays>
  </PreviousWrapper>
);

export default Previous;
