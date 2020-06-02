import React, { useState, useEffect } from "react";
//helpers
import { formatDate } from "./helpers";
//API
import { API_URL } from "./api";
//components
import WeatherData from "./components/WeatherData";
import Info from "./components/Info";
import Unit from "./components/Unit";
import Previous from "./components/Previous";
//Img
import BGImage from "./img/nasa-mars-bg.jpg";
//Styles
import {
  AppWrapper,
  GlobalStyle,
  MarsWeather,
  InfoWrapper,
} from "./App.styles";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [selectedSol, setSelectedSol] = useState();
  const [metric, setMetric] = useState(true);
  const [previous, setPrevious] = useState(false);

  console.log(weather);

  useEffect(() => {
    const fetchFromApi = async () => {
      const weather = await (await fetch(API_URL)).json();
      console.log(weather);
      const marsWeather = weather.sol_keys.map((solKey) => {
        return {
          // key: solKey,
          sol: solKey,
          //nowy zapis ES2020 jesli nie ma danych to wyrzuc
          maxTemp: weather[solKey].AT?.mx || "No data!",
          minTemp: weather[solKey].AT?.mn || "No data!",
          windSpeed: Math.round(weather[solKey].HWS?.av || 0),
          season: weather[solKey].Season || "No data!",
          windDirectionDegrees:
            weather[solKey].WD?.most_common?.compass_degrees || 0,
          windDirectionPoint:
            weather[solKey].WD?.most_common?.compass_point || "No data!",
          date: formatDate(new Date(weather[solKey].First_UTC)),
        };
      });
      setWeather(marsWeather);
      setSelectedSol(marsWeather.length - 1);
      setLoading(false);
    };

    fetchFromApi();
  }, []);

  return (
    <>
      <GlobalStyle bgImage={BGImage} />
      <AppWrapper>
        <MarsWeather>
          {loading ? (
            <div>Loading ... </div>
          ) : (
            <>
              <h1 className="main-title">
                Latest Weather at Elysium Plantitia
              </h1>
              <WeatherData sol={weather[selectedSol]} isMetric={metric} />
              <InfoWrapper>
                <Info />
                <Unit metric={metric} setMetric={setMetric} />
              </InfoWrapper>
            </>
          )}
        </MarsWeather>
        <Previous
          weather={weather}
          previous={previous}
          setPrevious={setPrevious}
          setSelectedSol={setSelectedSol}
          isMetric={metric}
        />
      </AppWrapper>
    </>
  );
};

export default App;
