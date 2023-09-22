export default function Tarjeta(props){

    //const fecha = new Date(props.resultado.daily[0].dt * 1000).toLocaleDateString();

    return(
        <div>
            <h3> Fecha: {props.resultado.daily[0].dt} </h3>
            
            <h4> Temp: </h4>
            <h4> Humedad: % </h4>
            <h4> Viento: m/s </h4>
        </div>
    )
}