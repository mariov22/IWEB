export default function Tarjeta(props){

    //const fecha = new Date(props.resultado.daily[0].dt * 1000).toLocaleDateString();

    console.log(props.numItems);
    const arrayDatos = props.resultado.daily.slice(0, props.numItems);

    return(
        <div>
            <ul>
            {arrayDatos.map((item,index) => (
                <li key={index}>
                <p> Fecha: {item.dt} </p>
                <p> {console.log(props.numItems)} </p>
                <p> Humedad: % </p>
                <p> Viento: m/s </p>
                </li>
              
            ))}
            </ul>
            
        </div>)
}