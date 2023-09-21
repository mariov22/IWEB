export default function Tarjeta(props){

    const fecha = new Date(props.resultado.daily[0].dt * 1000).toLocaleDateString();

    return(
        <div>
            <h3> {fecha} </h3>
            <img className="tiempoimg" src = {process.env.PUBLIC_URL + props.resultado.daily[0].weather[0].icon} alt = "" />
            <h4> Temp: </h4>
            <h4> Humedad: {props.resultado.daily[0].humidity}% </h4>
            <h4> Viento: {props.resultado.daily[0].wind_speed}m/s </h4>
        </div>
    )
}