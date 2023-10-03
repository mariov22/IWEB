export default function Tarjeta(props){

    //const fecha = new Date(props.resultado.daily[0].dt * 1000).toLocaleDateString();

    const arrayDatos = props.resultado.daily?.slice(0, props.numitems);

    return(
        <div>
            <ul>
            {arrayDatos.map((item,index) => (
                <li key={index}>
                <p> Fecha: {new Date(item.dt * 1000).toLocaleDateString()} </p>
                <img className="tiempoimg" src= {`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt = "" />
                <p> Temp: {item.temp.day}ºC</p>
                <p> Humedad: {item.humidity}% </p>
                <p> Viento: {item.wind_speed}m/s </p>
                </li>
              
            ))}
            </ul>
            
        </div>)
}