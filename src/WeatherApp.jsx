import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import Box from '@mui/material/Box';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 39.05,
        humidity: 74,
        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return (
        <div style={{textAlign: "center"}}>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey', borderRadius: '45px', color: 'aquablue', backgroundColor: 'cadetblue' }}>
            <h1><u>Weather App by Divyanshu Singh</u></h1>
            </Box>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}