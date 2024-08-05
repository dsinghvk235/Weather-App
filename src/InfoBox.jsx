import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {
    let INITIAL_URL = "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_IMG = "https://media.istockphoto.com/id/1049365996/photo/rain-fall-on-the-ground.jpg?s=1024x1024&w=is&k=20&c=gWDvmfPy1ZKyifT_BjNXGASQQzdd7IKS7sF5b8u_-D4=";
    let COLD_IMG = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOTTY_IMG = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <h1>Weather Info - {info.weather}</h1>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAINY_IMG : info.temp > 20 ? HOTTY_IMG : COLD_IMG}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 20 ?< WbSunnyIcon /> : <AcUnitIcon />}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Minimum Temp : {info.tempMin}</p>
                        <p>Maximum Temp : {info.tempMax}</p>
                        <p>The weather is described as {info.weather} and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}