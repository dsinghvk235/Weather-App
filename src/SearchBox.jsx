import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import "./SearchBox.css"
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1031e82180981b48e6b9fba105594774";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            }

            console.log(result);
            return result;
        } catch(err) {
            throw err;
        }
        
    }


    let handleChange = async (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);

            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch(err) {
            setErr(true);
        }
    }

    return (
        <div className="SearchBox">
            <h2>Search for the Weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>&nbsp;&nbsp; 
                <Fab variant="extended" color='primary' onClick={handleSubmit}>
                    Search &nbsp;<SendIcon />
                </Fab>

                {err ? <p style={{color: "red"}}>No such place exists in our API</p> : null}
            </form>
        </div>
    );
}